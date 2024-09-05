import { BenefitsCard } from "@/components/elements/benefits-card";
import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { HorizontalScroll } from "@/components/motion/horizontal-scroll";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";

import {
  getProduct,
  productsList,
} from "@/components/data-providers/products-provider";

export default function VendingBenefitsBlock() {
  const vendingProductBenefits = getProduct(productsList, "vending").benefits;
  if (vendingProductBenefits === undefined) return null;

  else
    return (
      <section
        id="vending-benefits-block"
        className="overflow-hidden bg-blue-94 py-20"
      >
        <MotionTriggerWrapper>
          <Container className="bg-blue-shadow-gradient">
            <Heading
              as="h2"
              size="64"
              className="mb-5 ml-auto mr-3 max-w-[12ch] text-right sm:mr-6 sm:max-w-[18ch]"
            >
              transform it into a real pos
            </Heading>
            <HorizontalScroll>
              <div className="flex min-w-min gap-5">
                {vendingProductBenefits.map((benefit) => (
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
