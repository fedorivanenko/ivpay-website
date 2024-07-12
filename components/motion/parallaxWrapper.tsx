'use client'

import * as React from 'react'
import { m, motion, useScroll, useTransform, HTMLMotionProps, easeIn } from "framer-motion"
import { useRef, useImperativeHandle } from 'react'

type ParallaxWrapperProps = HTMLMotionProps<'div'> & {
    children: React.ReactNode;
}

const ParallaxWrapper = React.forwardRef<HTMLDivElement, ParallaxWrapperProps>(({ className, children, ...props }, forwardedRef) => {

    const internalRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(forwardedRef, () => {
        if (internalRef.current) {
            return internalRef.current;
        }
        throw new Error('internalRef.current is null')
    });

    const { scrollYProgress } = useScroll({
        target: internalRef,
        offset: ["start end", "end start"]
    });

    const parallaxOffset = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 60],
        {ease: easeIn }
    )

    return (
        <m.div
            ref={internalRef}
            style={{ y: parallaxOffset }}
            className={className}
            {...props}
        >
            {children}
        </m.div>
    )
})
ParallaxWrapper.displayName = 'ParallaxWrapper'

export { ParallaxWrapper }