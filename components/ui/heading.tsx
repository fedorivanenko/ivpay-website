'use client'

import * as React from 'react';

import { m, motion, HTMLMotionProps, ForwardRefComponent } from 'framer-motion'
import { contentAppearing } from '../motion/motion_utils';

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { AnimatedTextWrapper } from '../motion/animatedTextWrapper';

const headingVariants = cva(
    "leading-none tracking-tight uppercase",
    {variants: {
        size: {
            '100': 'text-5xl md:text-7xl',
            '80': 'text-4xl md:text-6xl',
            '60': 'text-3xl md:text-5xl',
            '40': 'text-2xl md:text-4xl',
            '32': 'text-xl md:text-3xl'
        }
    }}
)

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

type MotionHeadingProps = {
    [K in HeadingLevel]: HTMLMotionProps<K>;
}[HeadingLevel];

export type HeadingProps = MotionHeadingProps & 
  VariantProps<typeof headingVariants> & {
    as?: HeadingLevel;
    children: React.ReactNode
  };

const Heading = React.forwardRef<HTMLElement, HeadingProps>(
    ({ children, className, as = 'h1', size, ...props }, ref) => {
        const MotionTag = m[as] as ForwardRefComponent<HTMLElement, MotionHeadingProps>;

        return (
            <MotionTag
                variants={contentAppearing}
                {...props}
                ref={ref}
                className={cn(headingVariants({ size, className }))}
            >
            <AnimatedTextWrapper>
                {children}
            </AnimatedTextWrapper>
            </MotionTag>
        )
    })
Heading.displayName = 'Heading';

export { Heading, headingVariants }