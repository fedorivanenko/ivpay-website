'use client'

import * as React from "react"

import { cn } from "@/lib/utils"
import { m, motion, HTMLMotionProps } from 'framer-motion'

import { 
  cardAppearing,
  contentAppearing
 } from "@/lib/motion_utils"

type DivProps = HTMLMotionProps<'div'> & {
  className?: string
}

const Card = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-lg bg-card text-card-foreground overflow-hidden relative z-0",
        className
      )}
      variants={cardAppearing}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6 pb-2", className)}
      {...props}
      //variants={contentAppearing}
    />
  ))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-32 leading-none tracking-tight uppercase",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...props}
      //variants={contentAppearing}
    />
  ))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
    //variants={contentAppearing}
  />
))
CardFooter.displayName = "CardFooter"

const CardImageWrapper = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn("absolute w-full h-full top-0 -z-10", className)}
    {...props}
    //variants={contentAppearing}
  />
))
CardImageWrapper.displayName = "CardImageWrapper"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImageWrapper }
