import * as React from "react";
import { Card } from "@/components/ui/card";

import { DivProps } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { IconType } from "@/components/data-providers/icons-provider";
import { Icon } from "@/components/elements/icon";

type BenefitsCard = DivProps & {
  heading: string;
  content: string;
  icon?: IconType['icon'];
};

const BenefitsCard = React.forwardRef<HTMLDivElement, BenefitsCard>(
  ({ heading, content, icon, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        {...props}
        className="flex aspect-3/4 h-[20rem] flex-col p-5 sm:h-[24rem] sm:p-7.5 xl:h-[26rem]"
      >
        <div aria-hidden className="box-border flex aspect-square w-12 items-center justify-center rounded-lg border border-background/50 bg-accent text-background shadow-xl shadow-accent/30 sm:w-16">
          {icon && <Icon icon={icon} className="h-8 w-8 lg:h-8 lg:w-8"/>}
        </div>
        <Heading as="h3" size="32" className="mb-3 mt-auto max-w-[9ch] sm:mb-4">
          {heading}
        </Heading>
        <Text size="16" className="text-sm sm:text-base aspect-2/1">
          {content}
        </Text>
      </Card>
    );
  },
);
BenefitsCard.displayName = "BenefitsCard";

export { BenefitsCard };
