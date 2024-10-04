"use client";

import * as React from "react";
import * as Slot from '@radix-ui/react-slot';
import { m, MotionProps, Variants } from 'framer-motion';
import { contentAppearing } from "./motion_utils"; 

export type MotionWrapperProps = React.HTMLAttributes<HTMLElement> &
  MotionProps & {
    asDiv?: boolean;
    variants?: Variants;
  };

/**
 * Wraps a single child element with Framer Motion capabilities with radix-ui/react-slot under the hood.
 *
 * Usage example:
 * ```jsx
 * <MotionSlot animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
 *   <YourComponent />
 * </MotionSlot>
 * ```
 */

const MotionWrapper = React.forwardRef<HTMLElement, MotionWrapperProps>(
  ({ asDiv = false, variants = contentAppearing, children, ...props }, ref) => {
    const Comp = !asDiv ? Slot.Slot : 'div';
    const MotionComponent = React.useMemo(() => m(Comp as any), [Comp]);
    return (
      <MotionComponent ref={ref} {...props} variants={variants}>
        {children}
      </MotionComponent>
    );
  }
);
MotionWrapper.displayName = "MotionSlot";

export { MotionWrapper };
