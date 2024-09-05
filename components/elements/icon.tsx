import * as React from 'react'

import { IconType, IconList } from '@/components/data-providers/icons-provider'
import { cn } from '@/lib/utils'

type IconItem = React.SVGProps<SVGSVGElement> & IconType

/** Custom icon placer. Needed because react-feather-icon and radix-ui-icon blow up bundle size as fkg frog  */
const Icon = React.forwardRef<React.SVGProps<SVGSVGElement>, IconItem>(({icon, className, ...props}, forwardedRef) => {
    const IconComponent = IconList[icon];
    return <IconComponent ref={forwardedRef} {...props} className={cn("h-[1.2em] aspect-square inline-block", className)}/>
})
Icon.displayName = 'Icon'

export { Icon }