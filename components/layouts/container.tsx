import * as React from "react"

import { cn } from "@/lib/utils"

const Container = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative max-w-md sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col w-full px-2 lg:px-0 mx-auto",
            className
        )}
        {...props}
    />
))
Container.displayName = "Container"

export { Container }