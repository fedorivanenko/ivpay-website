"use client";

import * as React from "react";
import { m, MotionProps } from "framer-motion";
import { contentAppearing } from "@/components/motion/motion_utils";

type MotionWrapperProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  asDiv?: boolean;
};

/**
 * Wraps a single child element with Framer Motion capabilities.
 *
 * <MotionWrapper animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
 *   <YourComponent />
 * </MotionWrapper>
 *
 * Note: The child must be a valid React element. Strings, numbers, or other non-element nodes will cause an error.
 */

const MotionWrapper = React.forwardRef<unknown, MotionWrapperProps>(
  (
    {
      children,
      className,
      variants = contentAppearing,
      asDiv = false,
      ...motionProps
    },
    ref,
  ) => {
    if (!asDiv) {
      React.Children.only(children);
      if (React.isValidElement(children)) {
        const MotionComponent = React.useMemo(() => m(children.type), [children.type]);
        return (
          <MotionComponent
            variants={variants}
            {...children.props}
            {...motionProps}
            ref={ref as React.ForwardedRef<Element>}
          />
        );
      }
      throw new Error(
        "MotionWrapper only accepts a single React element as a child",
      );
    } else {
      return (
        <m.div
          className={className}
          variants={variants}
          {...motionProps}
          ref={ref as React.ForwardedRef<HTMLDivElement>}
        >
          {children}
        </m.div>
      );
    }
  },
);
MotionWrapper.displayName = "MotionWrapper";

export { MotionWrapper };
