import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Text } from "@/components/ui/text";

type BrandBadgeType = React.HTMLAttributes<HTMLLIElement> & {
    name: string
}

const BrandBadge = React.forwardRef<
  HTMLLIElement,
  BrandBadgeType
>(({ name, className, ...props }, forwardRef) => {
  return (
    <li
      ref={forwardRef}
      className={cn(
        "flex flex-col",
        className,
      )}
      {...props}
    >
        <span className="w-24 aspect-square rounded-lg bg-slate-500"/>
        <Text className="uppercase mt-2 text-xs sm:text-sm">{name}</Text>
    </li>
  );
});

export default BrandBadge
