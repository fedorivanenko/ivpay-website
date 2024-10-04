import * as React from "react";

import {
  CountryType,
  countryData,
} from "@/components/data-providers/supported-countries";
import { Text } from "@/components/ui/text";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { staggerChildren } from "@/components/motion/motion_utils";
import { Badge } from "@/components/ui/badge";

type CountriesListType = React.HTMLAttributes<HTMLDivElement>;

type CountryItemType = React.HTMLAttributes<HTMLDivElement> & CountryType;

const getCountryIcon = (code: string) => {
  const country = countryData.find((c) => c.code === code);
  return country ? country.icon : null;
};

const CountryItem = React.forwardRef<HTMLDivElement, CountryItemType>(
  ({ countryName, code, icon, ...props }, forwardedRef) => {
    const IconComponent = getCountryIcon(code);

    return (
      <MotionWrapper>
      <div
        ref={forwardedRef}
        className="flex aspect-square w-28 sm:w-40 flex-col items-start justify-between rounded-lg bg-secondary p-2.5 sm:p-5 pb-3 sm:pb-4 shadow-inner shadow-accent/5"
        {...props}
      >
        {IconComponent ? (
          <span className="mb-2 border-4 border-background/50 aspect-square h-12 sm:h-14 shadow-lg shadow-accent/15 rounded-full">
          <IconComponent
            /* help SVG to scale */
            viewBox="0 0 512 512"
            />
            </span>
        ) : null}
        <Badge>{countryName}</Badge>
      </div>
      </MotionWrapper>
    );
  },
);
CountryItem.displayName = "CountryItem";

/** List of supported countries */
const CountriesList = React.forwardRef<HTMLDivElement, CountriesListType>(
  ({ ...props }, forwardedRef) => {
    return (
      <>
      <MotionWrapper variants={staggerChildren}>
        <div
          ref={forwardedRef}
          className="my-2.5 sm:my-5 flex w-full flex-wrap gap-2.5 sm:gap-5 max-w-screen-sm xl:max-w-max -translate-x-2.5"
          {...props}
        >
          {countryData.map((country, index) => (
            <CountryItem
              key={index}
              countryName={country.countryName}
              code={country.code}
              icon={country.icon}
            />
          ))}
        </div>
        </MotionWrapper>
        <Text size="16" className="text-sm text-muted-foreground">
        More countries to join in&nbsp;
          <span className="whitespace-nowrap">2025</span>
        </Text>
        </>
    );
  },
);
CountriesList.displayName = "CountriesList";

export { CountryItem, CountriesList };
