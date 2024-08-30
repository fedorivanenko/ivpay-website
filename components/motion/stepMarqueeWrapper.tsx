"use client";

import * as React from "react";

import { useEffect, useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  HTMLMotionProps,
  AnimatePresence,
} from "framer-motion";

import {
  popLayoutVariants,
  defaultDuration,
  contentAppearing,
} from "@/components/motion/motion_utils";

import { cn } from "@/lib/utils";

type StepMarqueeWrapperProps = HTMLMotionProps<"ul"> & {
  length?: number;
  children?: React.ReactNode;
};

const StepMarqueeWrapper = React.forwardRef<
  HTMLUListElement,
  StepMarqueeWrapperProps
>(({ children, className, length = 4, ...props }, ref) => {
  const [itemArray, setItemArray] = useState<React.ReactNode[]>(() =>
    React.Children.toArray(children),
  );

  //render all children for SEO purpose
  const [visibleItems, setVisibleItems] =
    useState<React.ReactNode[]>(itemArray);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to prevent render until until animation is ready
    requestAnimationFrame(() => {
      setIsReady(true);
    });

    if (typeof window !== "undefined") {
      // Client-side only code
      setVisibleItems(itemArray.slice(0, length));

      const interval = setInterval(
        () => {
          setItemArray((prevItemArray) => {
            const [first, ...rest] = prevItemArray;
            return [...rest, first];
          });
        },
        defaultDuration * 1000 * 3,
      );

      return () => clearInterval(interval);
    }
  }, [itemArray, length]);

  if (!isReady) {
    return null;
  }

  return (
    <m.ul
      ref={ref}
      className={cn("flex gap-2 xl:gap-3", className)}
      variants={contentAppearing}
      {...props}
      layout
    >
      <LazyMotion features={domAnimation}>
        <AnimatePresence initial={false} mode="popLayout">
          {visibleItems.map((item, index) => {
            if (React.isValidElement(item)) {
              const MotionTag = m[item.type as keyof typeof m] || m.div;
              return (
                <MotionTag
                  key={item.key}
                  layout
                  variants={popLayoutVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  {...item.props}
                >
                  {item.props.children}
                </MotionTag>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </LazyMotion>
    </m.ul>
  );
});

StepMarqueeWrapper.displayName = "StepMarqueeWrapper";

export { StepMarqueeWrapper };
export type { StepMarqueeWrapperProps };
