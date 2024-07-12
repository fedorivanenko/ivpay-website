'use client'

import * as React from "react"
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  useImperativeHandle
} from "react";

import {
  m, motion,
  HTMLMotionProps,
  useInView,
  useAnimationControls,
  AnimationControls
} from "framer-motion"

import useScrollDirection from "@/lib/useScrollDirection";

import { staggerChildren } from "@/components/motion/motion_utils";

type MotionDivWrapperProps = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
}

type AnimationItem = {
  id: string;
  animation: Parameters<AnimationControls['start']>[0];
};

function useAnimationQueue() {
  const controls = useAnimationControls();
  const [queue, setQueue] = useState<AnimationItem[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const queueRef = useRef<AnimationItem[]>([]);

  const addToQueue = useCallback((id: string, animation: Parameters<AnimationControls['start']>[0]) => {
    const newItem = { id, animation };
    //console.log("Adding to queue:", newItem);

    // Check if the animation already exists in the queue
    const existingIndex = queueRef.current.findIndex(item => item.id === id);

    if (existingIndex !== -1) {
      // If it exists, remove it and all animations in between
      queueRef.current = [
        ...queueRef.current.slice(0, existingIndex),
        newItem,
        ...queueRef.current.slice(existingIndex + 1)
      ];
    } else {
      // If it doesn't exist, just add it to the end
      queueRef.current = [...queueRef.current, newItem];
    }

    setQueue([...queueRef.current]);
  }, []);

  const runQueue = useCallback(async () => {
    if (isAnimating || queueRef.current.length === 0) return;

    setIsAnimating(true);
    //console.log("Starting to run queue");

    while (queueRef.current.length > 0) {
      const item = queueRef.current[0];
      //console.log("Running animation:", item);
      await controls.start(item.animation);
      queueRef.current = queueRef.current.slice(1);
      setQueue([...queueRef.current]);
    }

    //console.log("Queue finished");
    setIsAnimating(false);
  }, [controls, isAnimating]);

  useEffect(() => {
    if (queue.length > 0 && !isAnimating) {
      //console.log("Effect triggered, running queue");
      runQueue();
    }
  }, [queue, isAnimating, runQueue]);
  return { controls, addToQueue };
}

const MotionTriggerWrapper = React.forwardRef<HTMLDivElement, MotionDivWrapperProps>(({ children, ...props }, forwardedRef) => {

  const internalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(forwardedRef, () => {
    if (internalRef.current) {
      return internalRef.current;
    }
    throw new Error('internalRef.current is null')
  });

  const isInView = useInView(internalRef, {
    once: false,
    margin: "-200px 0px -200px 0px"
  });

  const scrollDirection = useScrollDirection();

  const prevInViewRef = useRef(false);

  const { controls, addToQueue } = useAnimationQueue();

  useEffect(() => {
    const prevInView = prevInViewRef.current;
    //console.log("inView changed:", isInView, "Previous inView:", prevInView);

    if (isInView !== prevInView) {
      if (isInView) {
        // Component has just come into view
        //console.log("Component came into view");
        if (scrollDirection === 'down') {
          addToQueue('visibleFromBottom', "visibleFromBottom");
          //console.log("Triggering visibleFromBottom animation");
        } else {
          addToQueue('visibleFromTop', "visibleFromTop");
          //console.log("Triggering visibleFromTop animation");
        }
      } else {
        // Component has just gone out of view
        //console.log("Component went out of view");
        if (scrollDirection === 'down') {
          addToQueue('hiddenToTop', "hiddenToTop");
          //console.log("Triggering hiddenToTop animation");
        } else {
          addToQueue('hiddenToBottom', "hiddenToBottom");
          //console.log("Triggering hiddenToBottom animation");
        }
      }
    }

    // Update the ref with the current isInView state for the next render
    prevInViewRef.current = isInView;
  }, [isInView, controls, addToQueue, scrollDirection]);

  return (
    <m.div
      variants={staggerChildren}
      ref={internalRef}
      animate={controls}
      initial="hiddenToBottom"
      {...props}
    >
      {children}
    </m.div>
  )
});

MotionTriggerWrapper.displayName = 'MotionTriggerWrapper';

export { MotionTriggerWrapper };