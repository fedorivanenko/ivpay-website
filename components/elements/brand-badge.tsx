import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Text } from "@/components/ui/text";

type BrandBadgeType = React.HTMLAttributes<HTMLLIElement> & {
  name: string;
};

const BrandBadge = React.forwardRef<HTMLLIElement, BrandBadgeType>(
  ({ name, className, ...props }, forwardRef) => {
    return (
      <li
        ref={forwardRef}
        className={cn("flex flex-col", className)}
        {...props}
      >
        <span className="aspect-square w-24 rounded-lg bg-slate-500" />
        <Text className="mt-2 text-xs uppercase sm:text-sm">{name}</Text>
      </li>
    );
  },
);
BrandBadge.displayName = "BrandBadge";

export default BrandBadge;
