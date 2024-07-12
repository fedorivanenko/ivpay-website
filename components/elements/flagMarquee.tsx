import * as React from 'react'
import { StepMarqueeWrapper, StepMarqueeWrapperProps } from '../motion/stepMarqueeWrapper'
import { CircleFlag } from 'react-circle-flags'

type FlagMarquee = StepMarqueeWrapperProps & {
    countries: string[]
}

const FlagMarquee = React.forwardRef<HTMLUListElement, FlagMarquee>(({ countries, ...props }, ref) => {
    return (
        <StepMarqueeWrapper
            ref={ref}
            {...props}
        >
            {countries.map((country, index) => (
                <CircleFlag key={index} countryCode={country} className="h-6 w-6 md:h-8 md:w-8" />
            ))
            }
        </StepMarqueeWrapper>
    )
})
FlagMarquee.displayName = 'FlagMarquee'

export { FlagMarquee }