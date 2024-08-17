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

type ScrollStackedCardItemType = React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    children: React.ReactNode;
    index: number;
    amount: number;
    container: React.RefObject<HTMLDivElement>;
  };
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

const ScrollStackedCardItem = React.forwardRef<
  HTMLDivElement,
  ScrollStackedCardItemType
>(
  (
    { children, index, amount, container, className, ...props },
    forwardedRef,
  ) => {
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end start"],
    });

    const perspectiveScale = calculatePerspectiveScale(
      amount,
      0.025,
      0.015,
      index,
    );

    const scale = useTransform(
      scrollYProgress,
      [0, 0.19 * index, 0.2 * (amount - 1)],
      [1, 1, perspectiveScale],
      { ease: circOut },
    );

    const offset = useTransform(
      scrollYProgress,
      [0, 0.19 * index, 0.2 * (amount - 1)],
      [(100 / amount) * index, (100 / amount) * index, (100 / amount) * index],
    );

    const calculatedOpacity = calculateOpacity(amount, 0.1, index);

    const opacity = useTransform(
      scrollYProgress,
      [0, 0.19 * index, 0.2 * (amount - 1)],
      [0, 0, calculatedOpacity],
      { ease: circOut },
    );

    /* interfere with card backdrop-blur
    const blur = useTransform(
      scrollYProgress,
      [0, 0.19 * (index+1), 0.2 * (index+1), 1],
      ['blur(0px)', 'blur(0px)', 'blur(1px)', 'blur(2px'],
      {
        ease: circIn,
      },
    );
    */

    return (
      <m.div
        className="sticky top-2 origin-top sm:top-10"
        ref={forwardedRef}
        style={{
          translateY: offset,
          scale: scale,
          //filter: blur,
        }}
        {...props}
      >
        <m.div
          style={{
            opacity: opacity,
          }}
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-blue-94"
        />
        {children}
      </m.div>
    );
  },
);
ScrollStackedCardItem.displayName = "ScrollStackedCardItem";

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

  return (
    <m.div ref={internalRef} className={cn("relative", className)} {...props}>
      {processedChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return (
            <ScrollStackedCardItem
              key={index}
              container={internalRef}
              amount={processedChildren.length}
              index={index}
            >
              {child}
            </ScrollStackedCardItem>
          );
        }
        return child;
      })}
    </m.div>
  );
});
ScrollStackedCard.displayName = "ScrollStackedCard";

export { ScrollStackedCard };
