"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { m, MotionProps } from 'framer-motion'

import { cn } from "@/lib/utils"
import { separatorVariantH, separatorVariantV } from "../motion/motion_utils"

// Create a motion version of SeparatorPrimitive.Root
const MotionSeparatorRoot = m(SeparatorPrimitive.Root)

// Combine the props from Radix UI and Framer Motion
type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & MotionProps


const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <MotionSeparatorRoot
      ref={ref}
      variants={orientation === "horizontal" ? separatorVariantH : separatorVariantV}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border origin-top-left",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
