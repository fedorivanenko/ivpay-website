"use client";

import * as React from "react";

import { useRef, useImperativeHandle } from "react";

import {
  m,
  useScroll,
  MotionProps,
  useTransform,
  circOut,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useMultipleTransform } from "./useMultipleTransofrm";

type ScrollStackedCardType = React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    children: React.ReactNode;
  };

/* Helper for calculate perspective       
    default X: 0.025,
    default power: 0.015
  */
function calculatePerspectiveScale(
  n: number,
  X: number,
  power: number,
  i: number,
) {
  if (i >= n || i < 0) {
    throw new Error("Index out of range");
  }

  const R = new Array(n).fill(0);
  R[n - 1] = 1; // R(n) = 1

  for (let idx = n - 2; idx >= i; idx--) {
    let diff = X + power * (n - idx - 2);
    R[idx] = R[idx + 1] - diff;
  }

  return R[i];
}

function calculateOpacity(n: number, diff: number, i: number) {
  if (i >= n || i < 0) {
    throw new Error("Index out of range");
  }
  return (n - i - 1) * diff; //for cover div that emulates opacity
  //return 1 - (n - i - 1) * diff; //for real opacity
}

const ScrollStackedCard = React.forwardRef<
  HTMLDivElement,
  ScrollStackedCardType
>(({ children, className, ...props }, forwardedRef) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const processedChildren = React.Children.toArray(children);

  useImperativeHandle(forwardedRef, () => {
    if (internalRef.current) {
      return internalRef.current;
    }
    throw new Error("internalRef.current is null");
  });

  const { scrollYProgress } = useScroll({
    target: internalRef,
    offset: ["start start", "end start"],
  });

  const amount = processedChildren.length;

  /* OFFSETS */
  const offsetsInputRanges = processedChildren.map((_, index) => [
    0, 0.1 * index, 0.2 * (amount - 1)
  ]);
  const offsetsOutputRanges = processedChildren.map((_, index) => 
    [(100 / amount) * index, (100 / amount) * (index + 1), (100 / amount) * (index + 2)],
  );
  const offsets = useMultipleTransform(scrollYProgress, offsetsInputRanges, offsetsOutputRanges);

  /* OPACITIES */
  const opacitiesInputRanges = processedChildren.map((_, index) => 
    [0, 0.19 * index, 0.2 * (amount - 1)],
  );
  const opacitiesOutputRanges = processedChildren.map((_, index) => 
    [0, 0, calculateOpacity(amount, 0.1, index)],
  );
  const opacities = useMultipleTransform(scrollYProgress, opacitiesInputRanges, opacitiesOutputRanges);

  /* SCALES */
  const scalesInputRanges = processedChildren.map((_, index) => 
    [0, 0.19 * index, 0.2 * (amount - 1)],
  );
  const scalesOutputRanges = processedChildren.map((_, index) => 
    [1, 1, calculatePerspectiveScale(amount, 0.025, 0.015, index)],
  );
  const scales = useMultipleTransform(scrollYProgress, scalesInputRanges, scalesOutputRanges);

  return (
    <m.div ref={internalRef} className={cn("relative", className)} {...props}>
      {processedChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return (
            <m.div
            key={index}
            className="sticky top-0 origin-top sm:top-10"
            ref={forwardedRef}
            style={{
              transform: `scale(${scales[index]}) translateY(${offsets[index]}px)`,
              //filter: blur,
            }}
            {...props}
          >
            <m.div
              style={{
                opacity: opacities[index],
              }}
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 bg-blue-94"
            />
            {child}
          </m.div>
          );
        }
        return child;
      })}
    </m.div>
  );
});
ScrollStackedCard.displayName = "ScrollStackedCard";

export { ScrollStackedCard };
