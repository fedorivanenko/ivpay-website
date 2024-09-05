"use client";

import * as React from "react";
import { m } from "framer-motion";

import { cn } from "@/lib/utils";

const InfinityMarque = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, forwardRef) => {
  return (
    <div
      ref={forwardRef}
      className={cn("my-auto flex scale-150 sm:scale-125 xl:scale-150 flex-col justify-center", className)}
      {...props}
    >
      <m.div
        className="grid w-full grid-cols-[100%_100%]"
        animate={{ x: "-100%" }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-2 pr-2">
            {children}
          </div>
        ))}
      </m.div>
    </div>
  );
});
InfinityMarque.displayName = "InfinityMarque";

export { InfinityMarque };
