"use client";

import * as React from "react";
import {
  m,
  MotionProps,
  Variants,
  easeOut,
  easeIn,
  circOut,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { useRef, useEffect, useState } from "react";
import { contentAppearing } from "@/components/motion/motion_utils";

type StackedCardsFanType = MotionProps & {
  className?: string;
  children: React.ReactNode;
};

const StackedCardsFan = React.forwardRef<HTMLDivElement, StackedCardsFanType>(
  ({ children, className, ...props }, ref) => {
    const processedChildren = React.Children.toArray(children);

    //set refs
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const setRef = (index: number, element: HTMLDivElement | null) => {
      refs.current[index] = element;
    };

    //set variants
    const variants: Variants = {
      hidden: { opacity: 0, y: "0%", filter: "blur(0px)", zIndex:0, scale:1 },
      first: { opacity: 1, y: "0%", filter: "blur(0px)", zIndex: 30, scale:1 },
      second: { opacity: 0.6, y: "-30%", filter: "blur(1px)", zIndex: 20, scale:0.9 },
      third: { opacity: 0.4, y: "-60%", filter: "blur(2px)", zIndex: 10, scale:0.85 },
      fourth: { opacity: 0.2, y: "-90%", filter: "blur(4px)", zIndex: 0, scale:0.7 },
      rest: { opacity: 0, y: "50%", filter: "blur(0px)", zIndex: 0, scale:1 },
    };
    const [variantKeys, setVariantKeys] = useState<string[]>([]);
    const cycleInterval = 2500;

    useEffect(() => {
      // Initialize variant keys
      const initializeVariantKeys = () => {
        const keys = refs.current.map((_, index) => {
          if (index === 0) return "first";
          if (index === 1) return "second";
          if (index === 2) return "third";
          if (index === 3) return "fourth";
          return "rest";
        });
        setVariantKeys(keys);
      };

      initializeVariantKeys(); // Initial setting

      const intervalId = setInterval(() => {
        setVariantKeys((prevKeys) => {
          // Rotate the array by shifting elements
          const [first, ...rest] = prevKeys;
          return [...rest, first];
        });
      }, cycleInterval);

      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
      <m.div ref={ref} className={cn("relative w-full sm:w-80 min-w-max h-12", className)} {...props} variants={contentAppearing}>
        {processedChildren.map((item, index) =>
          React.isValidElement(item) ? (
            <m.div
              key={index}
              ref={(element) => setRef(index, element)}
              variants={variants}
              initial="hidden"
              animate={variantKeys[index]}
              style={{transform: "translate3d(0, 0, 0)"}} //safari fix to force it use GPU
              transition={{ duration: 0.75, ease: circOut }}
              className="absolute origin-bottom bottom-0 w-full h-full min-w-max"
            >
              {item}
            </m.div>
          ) : null,
        )}
      </m.div>
    );
  },
);
StackedCardsFan.displayName = "StackedCardsFan";

export { StackedCardsFan };
