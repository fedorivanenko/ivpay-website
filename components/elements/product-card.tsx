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
          "relative mb-20 flex aspect-3/4 flex-col sm:aspect-2/1 sm:flex-row xl:aspect-11/10",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex flex-1 flex-col justify-between p-5 pb-7.5 lg:pb-10 sm:p-7.5 lg:p-10">
          <div>
            <Badge className="absolute top-5 mb-3 sm:relative sm:top-auto sm:mb-6 z-10">
              {badge}
            </Badge>
            <Heading
              as="h3"
              size="48"
              className="mb-2.5 sm:mb-4 max-w-[20ch] xl:max-w-[14ch]"
            >
              {heading}
            </Heading>
            <Text size="28">{content}</Text>
          </div>
          <div>
            <Button size="lg" variant="default" asChild>
              <Link href={link}>{cta}</Link>
            </Button>
          </div>
        </div>
        <div className="order-first h-[60%] pt-15 sm:pt-10 gradient-mask-b-[rgba(0,0,0,1.0)_50%,rgba(0,0,0,0.0)_100%] sm:order-last sm:aspect-square sm:h-full sm:max-w-[50%]">
          <div className="relative mx-auto aspect-square h-full">
            <Image
              src={img.src}
              alt={badge}
              fill
              quality={75}
              sizes="50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </Card>
    );
  },
);
ProductCard.displayName = "ProductCard";

export { ProductCard };
