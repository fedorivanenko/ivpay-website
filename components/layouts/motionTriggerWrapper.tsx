'use client'

import * as React from "react"

import { m, motion, useInView, useAnimation, HTMLMotionProps } from "framer-motion"
import useScrollDirection from "@/lib/useScrollDirection";
import { staggerChildren } from "@/lib/motion_utils";

import { useRef, useEffect, useImperativeHandle } from "react";

type MotionDivWrapperProps = HTMLMotionProps<'div'> & {
    children: React.ReactNode;
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

    const controls = useAnimation();
    const scrollDirection = useScrollDirection();

    const prevInViewRef = useRef(false);

    useEffect(() => {
        const prevInView = prevInViewRef.current;
        //console.log("inView changed:", isInView, "Previous inView:", prevInView);

        if (isInView !== prevInView) {
            if (isInView) {
                // Component has just come into view
                console.log("Component came into view");
                if (scrollDirection === 'down') {
                    //console.log("Triggering visibleFromBottom animation");
                    controls.start("visibleFromBottom");
                } else {
                    //console.log("Triggering visibleFromTop animation");
                    controls.start("visibleFromTop");
                }
            } else {
                // Component has just gone out of view
                console.log("Component went out of view");
                if (scrollDirection === 'down') {
                    //console.log("Triggering hiddenToTop animation");
                    controls.start("hiddenToTop");
                } else {
                    //console.log("Triggering hiddenToBottom animation");
                    controls.start("hiddenToBottom");
                }
            }
        }

        // Update the ref with the current isInView state for the next render
        prevInViewRef.current = isInView;
    }, [isInView, controls, scrollDirection]);

    return (
        
        <motion.div
            variants={staggerChildren}
            ref={internalRef}
            animate={controls}
            initial="hiddenToBottom"
            {...props}
        >
            {children}
        </motion.div>
    )
});

MotionTriggerWrapper.displayName = 'MotionTriggerWrapper';

export { MotionTriggerWrapper };