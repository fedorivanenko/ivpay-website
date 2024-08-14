'use client'

import * as React from 'react'

import { m, motion, LazyMotion, domAnimation, AnimatePresence, HTMLMotionProps } from 'framer-motion'
import { separatorVariantH, separatorVariantV, popLayoutVariants, defaultDuration, cardAppearing } from '../motion/motion_utils'

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

import { useState, useEffect, useRef } from 'react'
import { useAriaLabel } from '@/lib/useAriaLabel'

type TicTacToeGridLayoutProps = HTMLMotionProps<'div'> & {
    cols?: 2 | 3 | 4 | 6 | 8
    maxRows?: number
    animated?: boolean
    children?: React.ReactNode
}

const gridVariants = cva(
    "grid w-full relative",
    {
        variants: {
            cols: {
                2: 'grid-cols-2',
                3: 'grid-cols-3',
                4: 'grid-cols-4',
                6: 'grid-cols-6',
                8: 'grid-cols-8',
            }
        }
    }
)

const TicTacToeGridLayout = React.forwardRef<HTMLDivElement, TicTacToeGridLayoutProps>(
    ({ className, children, maxRows = 4, animated = false, cols = 4, ...props }, ref) => {

        //const internalRef = useRef<HTMLDivElement>(null);

        const amountOfChildren = React.Children.count(children)
        const rows = Math.ceil(amountOfChildren / cols);

        const [itemArray, setItemArray] = useState<React.ReactNode[]>(() => {
            
            const childrenArray = React.Children.toArray(children);
            const wrappedChildren = [];

            for (let i = 0; i < childrenArray.length; i += cols) {
                const group = childrenArray.slice(i, i + cols);
                wrappedChildren.push(
                    <div key={i} className={cn(gridVariants({ cols, className }))}>
                        {group}
                    </div>
                );
            }

            return wrappedChildren;
        });

        //render all children for SEO purpose
        const [visibleItems, setVisibleItems] = useState<React.ReactNode[]>(itemArray);

        useEffect(() => {
            if (
                typeof window !== 'undefined' &&  // Client-side only code
                animated === true &&
                maxRows < rows
            ) {
                setVisibleItems(itemArray.slice(0, maxRows));
                const interval = setInterval(() => {
                    setItemArray((prevItemArray) => {
                        const [first, ...rest] = prevItemArray;
                        return [...rest, first];
                    });
                }, defaultDuration * 1000 * 3);
                return () => clearInterval(interval);
            }
        }, [itemArray, animated, maxRows, rows]);

        return (
            <m.div
                ref={ref}
                className={cn("relative w-full overflow-hidden", className)}
                variants={cardAppearing}
                {...props}
            >
                <LazyMotion features={domAnimation}>
                    <AnimatePresence initial={false} mode="popLayout">
                        {visibleItems.map((item, index) => {
                            if (React.isValidElement(item)) {
                                const MotionTag = m[item.type as keyof typeof m] || m.div;
                                return (
                                    <MotionTag
                                        key={item.key}
                                        layout
                                        variants={popLayoutVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        {...item.props}
                                    >
                                        {item.props.children}
                                        <div
                                            className='absolute bg-border origin-top-left h-[1px] w-full left-0 -bottom-[1px]'
                                        />
                                    </MotionTag>
                                );
                            }
                            return null;
                        })}
                    </AnimatePresence>
                </LazyMotion>
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none aria-hidden:">
                    {[...Array(cols - 1)].map((_, index) => (
                        <motion.div
                            key={index}
                            className='absolute bg-border origin-top-left'
                            style={{
                                left: `${(100 / cols) * (index + 1)}%`,
                                top: 0,
                                bottom: 0,
                                width: '1px',
                            }}
                            variants={separatorVariantV}
                        />
                    ))}
                    { }
                </div>
            </m.div>
        )
    })
TicTacToeGridLayout.displayName = 'TicTacToeGridLayout'

export { TicTacToeGridLayout }