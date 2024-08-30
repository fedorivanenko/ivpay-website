import * as React from "react";
import {
  StepMarqueeWrapper,
  StepMarqueeWrapperProps,
} from "@/components/motion/stepMarqueeWrapper";

import { countryData } from "@/components/data-providers/supported-countries";

//TODO:Optimize it

const getCountryIcon = (code: string) => {
  const country = countryData.find((c) => c.code === code);
  return country ? country.icon : null;
};

const FlagMarquee = React.forwardRef<HTMLUListElement, StepMarqueeWrapperProps>(
  ({ ...props }, ref) => {
    return (
      <StepMarqueeWrapper ref={ref} length={4} {...props}>
        {countryData.map((country, index) => {
          const IconComponent = getCountryIcon(country.code);
          return IconComponent ? (
            <div key={index} className="aspect-square h-full">
              <IconComponent viewBox="0 0 512 512" />
            </div>
          ) : null;
        })}
      </StepMarqueeWrapper>
    );
  },
);
FlagMarquee.displayName = "FlagMarquee";

export { FlagMarquee };
