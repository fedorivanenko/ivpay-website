import * as React from "react";
import { Card } from "@/components/ui/card";

import { DivProps } from "@/components/ui/card";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";

type BenefitsCard = DivProps & {
  heading: string;
  content: string;
  icon?: React.ReactNode;
};

const BenefitsCard = React.forwardRef<HTMLDivElement, BenefitsCard>(
  ({ heading, content, icon, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        {...props}
        className="flex aspect-3/4 h-[20rem] flex-col p-5 sm:h-[24rem] sm:p-7.5 xl:h-[26rem]"
      >
        <div className="box-border flex aspect-square w-12 items-center justify-center rounded-lg border border-background/50 bg-accent text-background shadow-xl shadow-accent/30 sm:w-16">
          {icon}
        </div>
        <Heading as="h3" size="32" className="mb-2 mt-auto max-w-[9ch] sm:mb-3">
          {heading}
        </Heading>
        <Text size="16" className="aspect-2/1">
          {content}
        </Text>
      </Card>
    );
  },
);
BenefitsCard.displayName = "BenefitsCard";

export { BenefitsCard };
