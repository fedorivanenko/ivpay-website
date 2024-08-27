'use client'

import * as React from 'react'
import { motion as m, MotionProps } from 'framer-motion'
import { contentAppearing } from '@/components/motion/motion_utils'

type MotionWrapperProps = MotionProps & {
  children: React.ReactElement
}

/**
 * Wraps a single child element with Framer Motion capabilities.
 * 
 * <MotionWrapper animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
 *   <YourComponent />
 * </MotionWrapper>
 * 
 * Note: The child must be a valid React element. Strings, numbers, or other non-element nodes will cause an error.
 */

const MotionWrapper = React.forwardRef<HTMLElement, MotionWrapperProps>(
  ({ children, variants = contentAppearing, ...motionProps }, ref) => {
    React.Children.only(children)
    if (React.isValidElement(children)) {
      const MotionComponent = m(children.type)
      return <MotionComponent
        variants={variants}
        {...children.props} {...motionProps} ref={ref} />
    }
    throw new Error('MotionWrapper only accepts a single React element as a child')
  }
)
MotionWrapper.displayName = 'MotionWrapper'

export { MotionWrapper }