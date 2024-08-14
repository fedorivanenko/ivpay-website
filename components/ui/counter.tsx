'use client'

import * as React from 'react'

import { animate, m, motion, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState, useImperativeHandle } from 'react';
import { textAppearing } from '../motion/motion_utils';
import { thousandsSeparator } from '@/components/elements/thousandsSeparator';

type CounterProps = {
  to: number;
  duration?: number;
}

export const customRound = (num: number) => {
  if (num < 1000) {
    return Math.round(num);
  } else if (num >= 1000 && num < 1000000) {
    return Math.round(num / 100) * 100;
  } else if (num >= 1000000 && num < 1000000000) {
    return Math.round(num / 1000) * 1000;
  } else {
    return Math.round(num / 1000000) * 1000000;
  }
};

const Counter = React.forwardRef<HTMLElement, CounterProps>(({ to, duration = 1.25 }, forwardedRef) => {

  const internalRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(internalRef);

  useImperativeHandle(forwardedRef, () => {
    if (internalRef.current) {
      return internalRef.current;
    }
    throw new Error('internalRef.current is null')
  });

  const count = useMotionValue(0);
  const [roundedCount, setRoundedCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, to, {
        duration: duration,
        ease: 'easeInOut',
        onUpdate: (latest) => {
          setRoundedCount(customRound(latest));
        },
        onComplete: () => {
          setRoundedCount(to);
        },
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
      {thousandsSeparator({number:roundedCount})}
    </m.span>
  );
})
Counter.displayName = 'Counter'

export { Counter }