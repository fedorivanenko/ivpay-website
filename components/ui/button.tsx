"use client";

import * as React from "react";

import { Slot } from "@radix-ui/react-slot"

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { MotionWrapper } from "../motion/motion-wrapper";

const buttonVariants = cva(
  "group inline-flex items-center text-sm justify-center gap-1.5 whitespace-nowrap rounded-sm capitalize ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/40 border-background/30",
        white: "bg-background text-primary hover:bg-secondary shadow-xl shadow-accent/20 border border-border",
        link: "text-primary underline-offset-4 hover:underline",
        ghost: "hover:bg-secondary/70",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-0 h-7 rounded-[0.5rem] text-xs shadow-lg",
        lg: "px-4 py-2 rounded-sm lg:rounded-sm text-base lg:text-lg xl:text-xl min-w-32 lg:min-w-40 xl:min-w-48",
        xl: "px-6 py-4 rounded-md lg:rounded-lg text-lg lg:text-xl xl:text-2xl min-w-40 sm:min-w-48 xl:min-w-64",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant, size, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <MotionWrapper>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </MotionWrapper>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
