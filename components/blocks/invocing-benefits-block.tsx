"use client";

import { BenefitsCard } from "@/components/elements/benefits-card";
import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { HorizontalScroll } from "@/components/motion/horizontal-scroll";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";

import { productsList } from "@/components/data-providers/products-provider";

export default function InvocingBenefitsBlock() {
  
  const posProduct = productsList.find((product) => product.id === "invoicing");

  return (
    <section
      id="pos-benefits-block"
      className="overflow-hidden bg-blue-94 py-20"
    >
      <MotionTriggerWrapper>
        <Container className="bg-blue-shadow-gradient">
          <Heading
            as="h2"
            size="64"
            className="ml-auto mr-3 max-w-[12ch] text-right mb-5 sm:mr-6 sm:max-w-[18ch]"
          >
            All the benefits
          </Heading>
          <HorizontalScroll>
            <div className="flex min-w-min gap-5">
              {posProduct?.benefits &&
                posProduct.benefits.map((benefit) => (
                  <BenefitsCard
                    key={benefit.id}
                    icon={benefit.icon}
                    heading={benefit.label}
                    content={benefit.description}
                  />
                ))}
            </div>
          </HorizontalScroll>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
