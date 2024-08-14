'use client'

import * as React from 'react'

import { m, motion, HTMLMotionProps } from 'framer-motion'
import { textAppearing, textStaggerChildren } from './motion_utils'

import { useRef, useImperativeHandle } from 'react'

import { useAriaLabel } from '@/lib/useAriaLabel'
import { splitAndFormat } from '@/components/elements/thousandsSeparator'

type ProcessedChildren = {
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
}

const AnimatedTextWrapper = React.forwardRef<HTMLSpanElement, animatedTextProps>(
  ({ children, ...props }, forwardedRef) => {

    const internalRef = useRef<HTMLSpanElement>(null);

    const processedChildren = processChildren(children);
    //console.log(processedChildren)

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
          custom={processedChildren.totalElements}
          ref={internalRef}
          {...props}
        >
          {processedChildren.children.map((item, index) => (
            typeof item === 'string' ? (
              <m.span
                variants={textAppearing}
                key={index}
                className='inline-block whitespace-pre-wrap origin-bottom-left'
              >
                {splitAndFormat(item)}
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