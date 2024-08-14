import * as React from "react";

import { MotionProps } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardImageWrapper,
} from "../ui/card";
import { cn } from "@/lib/utils";

import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import { Badge } from "../ui/badge";

type ProductCardProps = MotionProps & {
  badge: string;
  heading: string;
  content: string;
  cta: string;
  img?: { src: string; alt: string };
  link?: string;
  className?: string;
};
const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, heading, badge, cta, content, img, link, ...props }, ref) => {
    return (
      <Card
        className={cn(
          "sm:aspect-11/10 flex aspect-3/4 flex-col sm:flex-row relative",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-10">
          <div>
            <Badge className="mb-3 sm:mb-6 absolute top-5 sm:top-auto sm:relative">
                {badge}
            </Badge>
            <Heading as="h3" size="48" className="mb-1.5 max-w-[20ch] xl:max-w-[14ch] sm:mb-4">
              {heading}
            </Heading>
            <Text size="28">{content}</Text>
          </div>
          <div>
            <Button size="lg" variant="default">
              {cta}
            </Button>
          </div>
        </div>
        <div className="order-first h-1/2 bg-slate-500 gradient-mask-b-[rgba(0,0,0,1.0)_50%,rgba(0,0,0,0.5)_100%] sm:order-last sm:aspect-square sm:h-full sm:max-w-[50%]">
          <div className="mx-auto aspect-square h-full bg-slate-700">
            Picture
          </div>
        </div>
      </Card>
    );
  },
);
ProductCard.displayName = "ProductCard";

export { ProductCard };
