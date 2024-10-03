import * as React from "react";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import { IconType } from "@/components/data-providers/icons-provider";
import { Icon } from "./icon";

type BrandBadgeType = React.HTMLAttributes<HTMLLIElement> & {
  name: string;
  icon: IconType['icon']
};

const BrandBadge = React.forwardRef<HTMLLIElement, BrandBadgeType>(
  ({ name, icon, className, ...props }, forwardRef) => {
    return (
      <li
        ref={forwardRef}
        className={cn("flex flex-col", className)}
        {...props}
      >
        <div className="aspect-square w-20 xl:w-24 rounded-lg bg-background relative overflow-hidden shadow-lg" >
        <Icon icon={icon} className="h-full w-full"/>
        </div>
        <Text className="mt-2 sm:mt-3 text-xs uppercase sm:text-sm">{name}</Text>
      </li>
    );
  },
);
BrandBadge.displayName = "BrandBadge";

export default BrandBadge;
