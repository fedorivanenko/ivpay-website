import * as React from "react";

import { iconMap, IconCode } from "@/lib/coin-map";
import { Text } from "@/components/ui/text";

export type CoinItemType = React.HTMLAttributes<HTMLDivElement> & {
  displayName?: string;
  displayCode?: string;
  code: IconCode;
};

const CoinItem = React.forwardRef<HTMLDivElement, CoinItemType>(
  ({ code, displayCode, displayName, ...props }, forwardedRef) => {
    const IconComponent = iconMap[code];

    return (
      <div ref={forwardedRef} className="w-full aspect-square sm:aspect-auto overflow-hidden p-2.5 sm:p-5 flex flex-col" {...props}>
        <div className="mb-1.5 sm:mb-3 aspect-square w-8 sm:w-10 xl:w-12 relative">
          {IconComponent ? (
            <IconComponent />
          ) : (
            <div className="aspect-square h-full rounded-full bg-secondary" />
          )}
        </div>
        <Text className="mb-0.5 sm:mb-1 text-xs uppercase sm:text-base mt-auto">
          {displayName && displayName !== "" ? displayName : code}
        </Text>
        <Text className="hidden sm:block text-[0.625rem] uppercase">
          {displayCode && displayCode !== "" ? displayCode : code}
        </Text>
      </div>
    );
  },
);
CoinItem.displayName = "CoinItem";

export { CoinItem };
