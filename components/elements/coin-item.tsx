import * as React from "react";

import { Text } from "@/components/ui/text";

import {
  coinData,
  CoinType,
} from "@/components/data-providers/supported-coins";

const getCoinIcon = (code: string) => {
  const coin = coinData.find((c) => c.code === code);
  return coin ? coin.icon : null;
};

const CoinItem = React.forwardRef<HTMLDivElement, CoinType>(
  ({ code, networkName, displayName, ...props }, forwardedRef) => {
    const IconComponent = getCoinIcon(code);

    return (
      <div
        ref={forwardedRef}
        //className="flex aspect-square w-full flex-col overflow-hidden rounded-md border border-background/50 bg-background/90 p-2.5 shadow-card-shadow sm:rounded-lg sm:p-5 sm:pb-4 lg:aspect-8/5"
        className="flex aspect-square w-full flex-col justify-between overflow-hidden p-2.5 sm:p-5 sm:pb-4 lg:aspect-8/5 lg:mb-2"
        {...props}
      >
        <div className="relative aspect-3/4 w-8 sm:aspect-square sm:w-10 sm:-translate-x-1 sm:-translate-y-1 xl:w-12">
          {IconComponent ? (
            <IconComponent />
          ) : (
            <div className="aspect-square h-full rounded-full bg-secondary" />
          )}
        </div>
        <div className="flex flex-col space-y-0.5">
          <div className="mt-auto flex flex-col lg:flex-row lg:space-x-1 uppercase max-w-min">
            {displayName && displayName !== "" ? <Text className="text-xs sm:text-base">{displayName}</Text> : null}
            <Text className="text-xs items-center translate-y-[0.05em]">{code}</Text>
          </div>
          {networkName && networkName !== "" ? <Text className="hidden max-w-[24ch] text-[0.625rem] uppercase leading-tight lg:block">{networkName}</Text>:null}
        </div>
      </div>
    );
  },
);
CoinItem.displayName = "CoinItem";

export { CoinItem };
