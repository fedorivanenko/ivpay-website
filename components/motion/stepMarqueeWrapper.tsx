'use client'

import * as React from 'react'

import { useEffect, useState } from 'react'
import { m, motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'

import { cn } from "@/lib/utils"

type StepMarqueeWrapperProps = HTMLMotionProps<'ul'> & {
    length?: number
    children?: React.ReactNode
}

const StepMarqueeWrapper = React.forwardRef<
    HTMLUListElement,
    StepMarqueeWrapperProps
>(({ children, className, length = 4, ...props }, ref) => {

    const [itemArray, setItemArray] = useState<React.ReactNode[]>(() => React.Children.toArray(children));
    const [visibleItems, setVisibleItems] = useState<React.ReactNode[]>([]);


    useEffect(() => {
        setVisibleItems(itemArray.slice(0, length));

        const interval = setInterval(() => {
            setItemArray((prevItemArray) => {
                const [first, ...rest] = prevItemArray;
                return [...rest, first];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [itemArray, length]);

    const itemVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.25,
            }
        }
    };

    return (
        <motion.ul
            ref={ref}
            className={cn("flex gap-2", className)}
            {...props}
            layout
        >
            <AnimatePresence initial={false} mode="popLayout">
                {visibleItems.map((item, index) => {
                    if (React.isValidElement(item)) {
                        const MotionTag = motion[item.type as keyof typeof motion] || motion.div;
                        return (
                            <MotionTag
                                key={item.key}
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                {...item.props}
                            >
                                {item.props.children}
                            </MotionTag>
                        );
                    }
                    return null;
                })}
            </AnimatePresence>
        </motion.ul>
    )
})

StepMarqueeWrapper.displayName = "StepMarqueeWrapper"

export { StepMarqueeWrapper }
export type { StepMarqueeWrapperProps }