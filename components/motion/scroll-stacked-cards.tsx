"use client";

import * as React from "react";

import {
  useRef,
  useState,
  useEffect,
  useMemo,
  useImperativeHandle,
} from "react";

import debounce from "lodash/debounce";

import { m, useScroll, MotionProps } from "framer-motion";
import { useMultipleTransform } from "@/components/motion/useMultipleTransofrm";
import { cn } from "@/lib/utils";

/** Helper for calculate perspective
 * n - amount of elements
 * i - number of current element
 * X - linear difference. default = 0.025
 * power - progressive difference. default = 0.015
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

type HeightData = {
  accumulatedHeight: number;
  elementHeight: number;
}

type ScrollStackedCardType = React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    children: React.ReactNode;
    /** Tailwind bg */
    backgroundColor?: string;
  };

  /** Convert children into set of cards that stacks on scroll */
const ScrollStackedCard = React.forwardRef<
  HTMLDivElement,
  ScrollStackedCardType
>(({ children, className, backgroundColor = 'bg-background', ...props }, forwardedRef) => {
  const internalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(forwardedRef, () => {
    if (internalRef.current) {
      return internalRef.current;
    }
    throw new Error("internalRef.current is null");
  });

  const processedChildren = React.Children.toArray(children);

  const childrenRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    processedChildren.map(() => React.createRef<HTMLDivElement>()),
  );

  const amountOfChildren = processedChildren.length;

  const [heightData, setHeightData] = useState<HeightData[]>([]);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateHeightData = () => {
      if (!internalRef.current) return;

      const container = internalRef.current;
      const newContainerHeight = container.offsetHeight;

      let accumulatedHeight = 0;
      const newHeightData = childrenRefs.current.map((childRef) => {
        const childElement = childRef?.current;
        if (!childElement) return { accumulatedHeight: 0, elementHeight: 0 };

        const elementHeight = childElement.offsetHeight;
        const data = { accumulatedHeight, elementHeight };
        accumulatedHeight += elementHeight + 120 / childrenRefs.current.length; // Adding spacing
        return data;
      });

      setHeightData(newHeightData);
      setContainerHeight(newContainerHeight);
    };

    updateHeightData();

    const debouncedUpdate = debounce(updateHeightData, 100);
    const resizeObserver = new ResizeObserver(debouncedUpdate);

    if (internalRef.current) {
      resizeObserver.observe(internalRef.current);
    }

    childrenRefs.current.forEach((ref) => {
      if (ref && ref.current) {
        resizeObserver.observe(ref.current);
      }
    });

    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: internalRef,
    offset: ["start start", "end start"],
  });

  /* Calculate card's OFFSETS */
  //not sure about useMemo, but what's done that's done
  const offsetsInputRanges = useMemo(() => {
    return heightData.map(({ accumulatedHeight, elementHeight }, index) => {
      const scrollStart = 0;
      const scrollEnd = (accumulatedHeight + elementHeight) / containerHeight;
      return [0, scrollStart, scrollEnd];
    });
  }, [heightData, containerHeight]);

  const offsetsOutputRanges = useMemo(() => {
    return processedChildren.map((_, index) => [
      0,
      (100 / amountOfChildren) * index,
      (100 / amountOfChildren) * index,
    ]);
  }, [processedChildren, amountOfChildren]);

  const offsets = useMultipleTransform(
    scrollYProgress,
    offsetsInputRanges,
    offsetsOutputRanges,
  );

  /* Calculate card's OPACITIES */
  const opacitiesInputRanges = useMemo(() => {
    return heightData.map(({ accumulatedHeight, elementHeight }, index) => {
      const scrollStart = accumulatedHeight / containerHeight;
      const scrollEnd =
        (accumulatedHeight + elementHeight + 20) / containerHeight;
      return [0, scrollStart, scrollEnd];
    });
  }, [heightData, containerHeight]);

  const opacitiesOutputRanges = useMemo(() => {
    return processedChildren.map((_, index) => [
      0,
      0,
      calculateOpacity(amountOfChildren, 0.1, index),
    ]);
  }, [processedChildren, amountOfChildren]);

  const opacities = useMultipleTransform(
    scrollYProgress,
    opacitiesInputRanges,
    opacitiesOutputRanges,
  );

  /* Calculate card's SCALES */
  const scalesInputRanges = useMemo(() => {
    return heightData.map(({ accumulatedHeight, elementHeight }, index) => {
      const scrollStart = (accumulatedHeight - 60) / containerHeight;
      const scrollEnd =
        (accumulatedHeight + elementHeight + 20) / containerHeight;

      return [0, scrollStart, scrollEnd];
    });
  }, [heightData, containerHeight]);

  const scalesOutputRanges = useMemo(() => {
    return processedChildren.map((_, index) => [
      1,
      1,
      calculatePerspectiveScale(amountOfChildren, 0.025, 0.015, index),
    ]);
  }, [processedChildren, amountOfChildren]);

  const scales = useMultipleTransform(
    scrollYProgress,
    scalesInputRanges,
    scalesOutputRanges,
  );

  return (
    <m.div ref={internalRef} className={cn("relative", className)} {...props}>
      {processedChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return (
            <m.div
              key={index}
              className="sticky top-5 origin-top sm:top-10"
              ref={childrenRefs.current[index]}
              style={{
                transform: `scale(${scales[index]}) translateY(${offsets[index]}px)`,
              }}
              {...props}
            >
              <m.div
                //Opacity emulation. It needed because opacity mess with filter:blur
                style={{
                  opacity: opacities[index],
                }}
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-0 z-10",
                  backgroundColor,
                )}
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
