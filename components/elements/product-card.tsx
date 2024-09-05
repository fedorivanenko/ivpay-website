import * as React from "react";

import { MotionProps } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icon } from "./icon";

type ProductCardProps = MotionProps & {
  badge: string;
  heading: string;
  content: string;
  cta: string;
  img: { src: string };
  link: string;
  className?: string;
};
const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, heading, badge, cta, content, img, link, ...props }, ref) => {
    return (
      <Card
        className={cn(
          "relative mb-32 flex aspect-2/3 flex-col p-5 sm:aspect-[1.66] sm:flex-row sm:p-7.5 lg:aspect-2/1 lg:p-12 xl:aspect-11/10",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="mr-auto mt-4 flex max-w-screen-sm flex-1 flex-col sm:mt-0">
          <Heading as="h3" size="48" className="mb-2.5 max-w-[20ch] lg:mb-5">
            {heading}
          </Heading>
          <Text size="24">{content}</Text>
          <Button
            size="lg"
            variant="default"
            className="mb-2 mt-auto whitespace-nowrap sm:mb-0 sm:max-w-min"
            asChild
          >
            <Link href={link}>
              {cta}
              <Icon icon="ArrowUpRight" />
            </Link>
          </Button>
        </div>
        <div className="relative order-first h-[50%] sm:order-last sm:aspect-square sm:h-full sm:max-w-[50%]">
          <div className="relative mx-auto mb-auto h-full overflow-hidden rounded-md border border-background/80 bg-secondary/80 sm:rounded-xl lg:mb-0 lg:aspect-square lg:h-auto lg:w-full">
            <Badge className="smb:mb-5 absolute left-2.5 top-2.5 z-10 mb-2.5 max-w-min whitespace-nowrap">
              {badge}
            </Badge>
            <Image
              src={img.src}
              alt={badge}
              fill
              quality={75}
              sizes="50vw"
              className="mt-8 object-contain object-top gradient-mask-b-[rgba(0,0,0,1.0)_50%,rgba(0,0,0,0.0)_100%] sm:object-cover"
            />
          </div>
        </div>
      </Card>
    );
  },
);
ProductCard.displayName = "ProductCard";

export { ProductCard };
