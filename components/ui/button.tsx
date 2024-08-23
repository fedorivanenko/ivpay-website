"use client";

import * as React from "react";

import { m, motion, HTMLMotionProps } from "framer-motion";
import { contentAppearing } from "../motion/motion_utils";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center text-sm justify-center gap-1.5 whitespace-nowrap rounded-md uppercase ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/40 border border-background/30",
        white: "bg-background text-primary hover:bg-background/70 shadow-xl shadow-accent/20 border border-background/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2 ",
        lg: "px-4 py-2 rounded-sm sm:rounded-md text-xs lg:text-base xl:text-lg min-w-32 sm:min-w-40 xl:min-w-48",
        xl: "px-6 py-4 rounded-md sm:rounded-lg text-base lg:text-lg xl:text-xl min-w-40 sm:min-w-48 xl:min-w-64",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <m.button
        variants={contentAppearing}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </m.button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
