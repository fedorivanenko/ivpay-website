'use client'

import * as React from 'react'

import { m, motion, HTMLMotionProps } from 'framer-motion'
import { textAppearing, textStaggerChildren } from './motion_utils'

import { useEffect, useState, useRef, useImperativeHandle } from 'react'

import useAriaLabel from '@/lib/useAriaLabel'

interface ProcessedChildren {
  children: (string | React.ReactNode)[];
  totalElements: number;
}

function processChildren(children: React.ReactNode): ProcessedChildren {
  let tagCount = 0;

  const processedChildren = React.Children.toArray(children)
    .flatMap(child => {
      if (React.isValidElement(child)) {
        const childContent = child.props.children;

        if (typeof childContent === 'string') {
          const words = childContent.match(/\S+\s?/g) || [];
          return words;
        } else {
          tagCount++;
          return [child];
        }
      } else if (typeof child === 'string') {
        const words = child.match(/\S+\s?/g) || [];
        return words;
      }
      return [child];
    });

  const wordCount = processedChildren.filter(child => typeof child === 'string').length;

  return {
    children: processedChildren,
    totalElements: wordCount + tagCount
  };
}

type animatedTextProps = HTMLMotionProps<'span'> & {
  children: React.ReactNode
  split?: 'words' | 'letters'
}

const AnimatedTextWrapper = React.forwardRef<HTMLSpanElement, animatedTextProps>(
  ({ children, split = 'words', ...props }, forwardedRef) => {
    
    const internalRef = useRef<HTMLSpanElement>(null);

    const result = processChildren(children);

    useImperativeHandle(forwardedRef, () => {
      if (internalRef.current) {
        return internalRef.current;
      }
      throw new Error('internalRef.current is null')
    });

    useAriaLabel(internalRef);

    return (
      <>
        <m.span
          variants={textStaggerChildren}
          custom={result.totalElements}
          ref={internalRef}
          {...props}
        >
          {result.children.map((item, index) => (
            typeof item === 'string' ? (
              <m.span
                variants={textAppearing}
                key={index}
                className='inline-block whitespace-pre-wrap origin-bottom-left'
              >
                {item}
              </m.span>
            ) : (
              <React.Fragment key={index}>{item}</React.Fragment>
            )
          ))}
        </m.span>
      </>
    );
  }
);
AnimatedTextWrapper.displayName = 'animatedTextWrapper'

export { AnimatedTextWrapper }