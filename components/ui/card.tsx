'use client'

import * as React from "react"

import { cn } from "@/lib/utils"
import { m, motion, MotionProps, HTMLMotionProps } from 'framer-motion'

import { 
  cardAppearing,
  contentAppearing
 } from "@/components/motion/motion_utils"

export type DivProps = Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> &
MotionProps & {
  className?: string
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, children, ...props }, ref) => (
    <m.div
      ref={ref}
      variants={cardAppearing}
      className={cn(
        "rounded-lg border box-border border-background/50 sm:rounded-2xl bg-background/20 backdrop-blur-2xl text-card-foreground overflow-hidden relative z-0 shadow-2xl shadow-accent/30",
        className
      )}
      {...props}
      >
        <div aria-hidden className="absolute inset-0 m-10 bg-background/40 blur-xl rounded-lg -z-50"/>
      {children}
      </m.div>
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-5 sm:p-7.5 pb-2 sm:pb-2.5", className)}
      {...props}
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
      "text-xl md:text-3xl leading-none tracking-tight uppercase",
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

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-7.5 py-0", className)}
      {...props}
    />
  ))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-7.5 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CardImageWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute h-full aspect-square bottom-0 right-0 -z-10", className)}
    {...props}
  />
))
CardImageWrapper.displayName = "CardImageWrapper"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImageWrapper }
