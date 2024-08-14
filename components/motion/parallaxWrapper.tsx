'use client'

import * as React from 'react'
import { useRef, useState, useEffect, useImperativeHandle } from 'react';
import { m, motion, useScroll, useTransform, useAnimation, easeIn, HTMLMotionProps } from 'framer-motion';

type ParallaxWrapperProps = HTMLMotionProps<'div'> & {
    children: React.ReactNode;
    offset?: number
}

const ParallaxWrapper = React.forwardRef<HTMLDivElement, ParallaxWrapperProps>((
    {
        className,
        children,
        offset = 60,
        ...props
    }, forwardedRef) => {

    const internalRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);

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
        [0, offset],
        { ease: easeIn }
    )

    // Use requestAnimationFrame to ensure the calculation has occurred to prevent render until parallaxOffset is calculated
    useEffect(() => {
        requestAnimationFrame(() => {
            setIsReady(true);
        });
    }, []);

    if (!isReady) {
        return null;
    }

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