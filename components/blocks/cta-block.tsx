import { Container } from "@/components/layouts/container";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/elements/icon";
import { MotionWrapper } from "../motion/motion-wrapper";

import { cn } from "@/lib/utils";

const CTABlock: React.FC<React.HTMLAttributes<HTMLElement>> = ({className}) => {
  return (
    <section
      id="POS-hero-block"
      className={cn("bg-soft-gradient-reverse pb-0 pt-20", className)}
    >
      <MotionTriggerWrapper>
        <Container>
          <div className="relative flex aspect-11/10 flex-col justify-center">
            <Card
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 gradient-mask-b-0"
            />
            <Text className="leading-tighten z-10 mb-10 text-center text-3xl capitalize sm:text-4xl xl:text-6xl">
              Become
              <br aria-hidden />a part of
              <br aria-hidden />
              IVPAY
            </Text>
            <Button
              size="xl"
              asChild
              className="z-10 mx-auto max-w-min whitespace-nowrap"
            >
              <Link href="https://app.ivendpay.com/register">
                Get started <Icon icon="ArrowUpRight" />
              </Link>
            </Button>
          </div>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}

export { CTABlock }