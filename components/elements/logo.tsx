import * as React from "react";
import { cn } from "@/lib/utils";

import LogoFull from '@/resources/logo/logo-full.svg'
import LogoMedium from '@/resources/logo/IVPAY_logo_medium.svg'
import LogoSmall from '@/resources/logo/logo-small.svg'

type LogoProps = React.SVGAttributes<SVGAElement> & {
  size?: "small" | "medium" | "full";
  color?: "color" | "bw"
};

//TODO: PLace logo into container -> less ugly
const Logo = React.forwardRef<SVGElement, LogoProps>(
  ({ className, size = "medium", color = "color", ...props }, forwardRef) => {

    let Logo;

    if (size === "full") {
        Logo = LogoFull;
    } else if (size === "medium") {
        Logo = LogoMedium;
    } else {
        Logo = LogoSmall;
    }

    return <Logo className={cn("h-full w-auto fill-accent ", className)} ref={forwardRef} {...props}/>
   
  },
);
Logo.displayName = "Logo";

export { Logo };
