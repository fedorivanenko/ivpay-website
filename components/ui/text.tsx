'use client'

import * as React from 'react'

import { m, motion, HTMLMotionProps } from 'framer-motion'
import { contentAppearing } from '../motion/motion_utils'
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { AnimatedTextWrapper } from '../motion/animatedTextWrapper'

type MotionTextProps = HTMLMotionProps<'p'>

export type TextProps = MotionTextProps & 
  VariantProps<typeof textVariants> & {
    children: React.ReactNode
  };

const textVariants = cva(
    "tracking-[0.02rem]",
    {variants: {
        size: {
            '16': 'text-base leading-snug',
            '18': 'text-base lg:text-lg xl:text-lg leading-snug lg:leading-snug xl:leading-snug',
            '28': 'text-base lg:text-2xl xl:text-2.5xl leading-snug lg:leading-snug xl:leading-snug',
            '32': 'text-base lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug',
        }
    },
    defaultVariants: {size: "16"}
}
)

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
    ({ children, className, size, ...props }, ref) => {
        return (
            <m.p
                variants={contentAppearing}
                ref={ref}
                className={cn(textVariants({ size, className }))}
                {...props}
            >
                <AnimatedTextWrapper>
                    {children}
                </AnimatedTextWrapper>
            </m.p>
        )
    }
)
Text.displayName = "Text"

export { Text }