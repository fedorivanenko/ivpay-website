"use client";

import * as React from "react";

import { m, motion, HTMLMotionProps } from "framer-motion";
import { textAppearing, textStaggerChildren } from "./motion_utils";

import { useRef, useImperativeHandle } from "react";

import { useAriaLabel } from "@/lib/useAriaLabel";
import { splitAndFormat } from "@/components/elements/thousandsSeparator";

type ProcessedChildren = {
  children: (string | React.ReactNode)[];
  totalElements: number;
};

function processChildren(children: React.ReactNode): ProcessedChildren {
  let tagCount = 0;

  const processedChildren = React.Children.toArray(children).flatMap(
    (child) => {
      //console.log(child);
      if (React.isValidElement(child)) {
        tagCount++;
        return [child];
      } else if (typeof child === "string") {
        const words = child.match(/\S+\s?/g) || [];
        return words;
      }
      return [child];
    },
  );

  const wordCount = processedChildren.filter(
    (child) => typeof child === "string",
  ).length;

  return {
    children: processedChildren,
    totalElements: wordCount + tagCount,
  };
}

type animatedTextProps = HTMLMotionProps<"span"> & {
  children: React.ReactNode;
};

const AnimatedTextWrapper = React.forwardRef<
  HTMLSpanElement,
  animatedTextProps
>(({ children, ...props }, forwardedRef) => {
  const internalRef = useRef<HTMLSpanElement>(null);

  const processedChildren = processChildren(children);

  useImperativeHandle(forwardedRef, () => {
    if (internalRef.current) {
      return internalRef.current;
    }
    throw new Error("internalRef.current is null");
  });

  useAriaLabel(internalRef);

  return (
    
      <m.span
        variants={textStaggerChildren}
        custom={processedChildren.totalElements}
        ref={internalRef}
        {...props}
      >
        {processedChildren.children.map((item, index) => (
          <m.span
            variants={textAppearing}
            key={index}
            className="inline-block origin-bottom-left whitespace-pre-wrap"
          >
            {typeof item === "string" ? splitAndFormat(item) : item}
          </m.span>
        ))}
      </m.span>
   
  );
});
AnimatedTextWrapper.displayName = "animatedTextWrapper";

export { AnimatedTextWrapper };
