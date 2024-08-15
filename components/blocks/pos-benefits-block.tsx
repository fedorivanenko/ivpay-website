"use client";

import { BenefitsCard } from "@/components/elements/benefits-card";
import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { HorizontalScroll } from "@/components/motion/horizontal-scroll";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";

export default function POSBenefitsBlock() {
  return (
    <section
      id="pos-benefits-block"
      className="overflow-hidden bg-blue-94 py-20"
    >
      <MotionTriggerWrapper>
        <Container>
          <Heading
            as="h2"
            size="64"
            className="mb-2 ml-auto mr-3 max-w-[12ch] text-right sm:mb-5 sm:mr-6 sm:max-w-[18ch]"
          >
            Everything in One
          </Heading>
          <HorizontalScroll>
            <div className="flex min-w-min gap-5">
              <BenefitsCard
                heading="Crypto Payments"
                content="Simplify your payment process and improve customer experience with our reliable and efficient solution"
                icon={<ArrowDownIcon />}
              />
              <BenefitsCard
                heading="Fast Connection"
                content="Simplify your "
                icon={<ArrowDownIcon />}
              />
              <BenefitsCard
                heading="Incudes Promotion"
                content="Simplify your "
                icon={<ArrowDownIcon />}
              />
              <BenefitsCard
                heading="Use any Printer"
                content="Simplify your "
                icon={<ArrowDownIcon />}
              />
              <BenefitsCard
                heading="Remote Updates"
                content="Simplify your "
                icon={<ArrowDownIcon />}
              />
            </div>
          </HorizontalScroll>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
