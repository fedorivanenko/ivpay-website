import * as React from "react";

import { Text } from "@/components/ui/text";

import { coinData, CoinType } from "../data-providers/supported-coins";

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
        className="shadow-card-shadow flex aspect-square w-full flex-col overflow-hidden rounded-md border border-background/50 bg-background/90 p-2.5 sm:pb-4 lg:aspect-8/5 sm:rounded-lg sm:p-5"
        {...props}
      >
        <div className="relative aspect-square w-8 sm:w-10 xl:w-12 sm:-translate-x-1 sm:-translate-y-1">
          {IconComponent ? (
            <IconComponent />
          ) : (
            <div className="aspect-square h-full rounded-full bg-secondary" />
          )}
        </div>
        <Text className="mt-auto text-xs uppercase leading-none sm:text-base sm:leading-none">
          {displayName && displayName !== "" ? displayName : code}
        </Text>
        <Text className="hidden text-[0.625rem] uppercase lg:block max-w-[24ch] mt-0.5 leading-tight">
          {displayCode && displayCode !== "" ? displayCode : code}
        </Text>
      </div>
    );
  },
);
CoinItem.displayName = "CoinItem";

export { CoinItem };
