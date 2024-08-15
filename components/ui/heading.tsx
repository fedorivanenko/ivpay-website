'use client'

import * as React from 'react';

import { m, motion, HTMLMotionProps, ForwardRefComponent } from 'framer-motion'
import { AnimatedTextWrapper } from '../motion/animatedTextWrapper';
import { contentAppearing } from '../motion/motion_utils';

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva(
    "capitalize",
    {variants: {
        size: {
            '72': 'text-4xl lg:text-6xl xl:text-7xl leading-none lg:leading-none xl:leading-none',
            '64': 'text-3xl lg:text-6xl xl:text-6xl leading-tighten sm:leading-none lg:leading-none xl:leading-none',
            '48': 'text-xl lg:text-4xl xl:text-5xl leading-tighten sm:leading-none lg:leading-none xl:leading-none',
            '32': 'text-xl sm:text-2xl xl:text-3xl leading-tighten sm:leading-none xl:leading-none',
        }
    },
    defaultVariants: {size: "72"}
}
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
                ref={ref}
                variants={contentAppearing}
                className={cn(headingVariants({ size, className }))}
                {...props}
            >
            <AnimatedTextWrapper>
                {children}
            </AnimatedTextWrapper>
            </MotionTag>
        )
    })
Heading.displayName = 'Heading';

export { Heading, headingVariants }