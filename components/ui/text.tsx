'use client'

import * as React from 'react'

import { m, motion, HTMLMotionProps } from 'framer-motion'
import { contentAppearing } from '../motion/motion_utils'
import { cn } from "@/lib/utils"
import { AnimatedTextWrapper } from '../motion/animatedTextWrapper'

type TextProps = HTMLMotionProps<'p'> & {
    children: React.ReactNode
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <m.p
                variants={contentAppearing}
                ref={ref}
                className={cn("text-sm md:text-base", className)}
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