'use client'

import * as React from 'react'

import { m, HTMLMotionProps } from 'framer-motion'
import { contentAppearing } from '@/components/motion/motion_utils'
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { AnimatedTextWrapper } from '@/components/motion/animatedTextWrapper'

type MotionTextProps = HTMLMotionProps<'p'>

export type TextProps = MotionTextProps & 
  VariantProps<typeof textVariants> & {
    children: React.ReactNode
  };

const textVariants = cva(
    "tracking-[0.02rem]",
    {variants: {
        size: {
            '12': 'text-xs leading-normal',
            '14': 'text-xs sm:text-sm leading-normal',
            '16': 'text-base leading-normal lg:leading-snug',
            '18': 'text-base lg:text-lg xl:text-lg leading-normal',
            '24': 'text-base lg:text-xl xl:text-2xl leading-normal',
            '28': 'text-base lg:text-2xl xl:text-2.5xl leading-normal',
            '32': 'text-base lg:text-2xl xl:text-3xl leading-normal',
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