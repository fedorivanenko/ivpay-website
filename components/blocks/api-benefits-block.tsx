"use client";

import { BenefitsCard } from "@/components/elements/benefits-card";
import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { HorizontalScroll } from "@/components/motion/horizontal-scroll";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";

import {
  getProduct,
  productsList,
} from "@/components/data-providers/products-provider";

//TODO: Make a Benefits layout
export default function APIBenefitsBlock() {

  const apiProduct = getProduct(productsList, "api");
  if (apiProduct.benefits === undefined) return null;
  else
    return (
      <section
        id="api-benefits-block"
        className="overflow-hidden bg-blue-94 py-20"
      >
        <MotionTriggerWrapper>
          <Container className="bg-blue-shadow-gradient">
            <Heading
              as="h2"
              size="64"
              className="mb-5 ml-auto mr-3 text-right sm:mr-6"
            >
              Customize quickly and easily
            </Heading>
            <HorizontalScroll>
              <div className="flex min-w-min gap-5">
                {apiProduct.benefits.map((benefit) => (
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
