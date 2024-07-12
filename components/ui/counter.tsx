'use client'

import * as React from 'react'

import { animate, m, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useImperativeHandle } from 'react';
import { textAppearing } from '../motion/motion_utils';

type CounterProps = {
  to: number;
  duration?: number;
}

const Counter = React.forwardRef<HTMLElement, CounterProps>(({ to, duration = 1.25 }, forwardedRef) => {

  const count = useMotionValue(0);
  const roundedCount = useTransform(count, Math.round);
  const internalRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(internalRef);

  useImperativeHandle(forwardedRef, () => {
    if (internalRef.current) {
      return internalRef.current;
    }
    throw new Error('internalRef.current is null')
  });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, to, {
        duration: duration,
        ease: "easeInOut",
      });

      return () => {
        animation.stop();
      };
    }
  }, [to, duration, isInView, count]);

  return (
    <m.span
      ref={internalRef}
      variants={textAppearing}
      className='inline-block whitespace-pre-wrap origin-bottom-left'
      aria-label={to.toString()}
    >
      {roundedCount}
    </m.span>
  );
})
Counter.displayName = 'Counter'

export { Counter }