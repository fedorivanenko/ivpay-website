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
  ({ code, displayCode, displayName, ...props }, forwardedRef) => {
    const IconComponent = getCoinIcon(code);

    return (
      <div
        ref={forwardedRef}
        className="flex aspect-square w-full flex-col overflow-hidden rounded-md border border-background/50 bg-background/90 p-2.5 shadow-card-shadow sm:rounded-lg sm:p-5 sm:pb-4 lg:aspect-8/5"
        {...props}
      >
        <div className="relative aspect-3/4 sm:aspect-square w-8 sm:w-10 sm:-translate-x-1 sm:-translate-y-1 xl:w-12">
          {IconComponent ? (
            <IconComponent />
          ) : (
            <div className="aspect-square h-full rounded-full bg-secondary" />
          )}
        </div>
        <Text className="mt-auto text-xs uppercase leading-none sm:text-base sm:leading-none">
          {displayName && displayName !== "" ? displayName : code}
        </Text>
        <Text className="mt-1 hidden max-w-[24ch] text-[0.625rem] uppercase leading-tight lg:block">
          {displayCode && displayCode !== "" ? displayCode : code}
        </Text>
      </div>
    );
  },
);
CoinItem.displayName = "CoinItem";

export { CoinItem };
