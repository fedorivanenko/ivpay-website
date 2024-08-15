import * as React from "react";
import { Card } from "@/components/ui/card";

import { DivProps } from "@/components/ui/card";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";

type BenefitsCard = DivProps & {
    heading: string
    content: string
    icon?: React.ReactNode
}

const BenefitsCard = React.forwardRef<HTMLDivElement, BenefitsCard>(
  ({ heading, content, icon, ...props }, ref) => {
    return <Card 
    ref={ref} 
    {...props}
    className="p-5 sm:p-7.5 h-[20rem] sm:h-[24rem] xl:h-[28rem] aspect-3/4 flex flex-col"
    >
     <div className="bg-accent rounded-md aspect-square w-12 sm:w-16 flex items-center justify-center text-background shadow-accent/30 shadow-xl">{icon}</div>
     <Heading as='h3' size='32' className="mt-auto mb-2 sm:mb-3 max-w-[9ch] ">{heading}</Heading>
     <Text size='16' className="aspect-2/1 xl:aspect-[2.66]">{content}</Text>
    </Card>;
  },
);
BenefitsCard.displayName = "BenefitsCard";

export { BenefitsCard }
