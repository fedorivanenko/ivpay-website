import * as React from "react"

import { cn } from "@/lib/utils"

const Container = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "max-w-screen-xl flex flex-col w-full mx-auto",
            className
        )}
        {...props}
    />
))
Container.displayName = "Container"

export default Container