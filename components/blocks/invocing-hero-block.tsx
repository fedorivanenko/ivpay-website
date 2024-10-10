import { HeroLayout } from "@/components/layouts/hero-layout";
import { StackedCardsFan } from "@/components/elements/stacked-cards-fan";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Button } from "@/components/ui/button";

import { productsList } from "@/components/data-providers/products-provider";
import { Icon } from "@/components/elements/icon";
import Link from "next/link";

export default function InvocingHeroBlock() {
  const product = productsList.find((product) => product.id === "invoicing");

  return (
    <section
      id="POS-hero-block"
      className="bg-gradient-to-b from-transparent to-blue-94 pb-20"
    >
      <MotionTriggerWrapper>
        <HeroLayout
          heading={
            <>
              Generate and send invoices in real-time
            </>
          }
          heroImage={{ src: "/product-invoicing.png", alt: "IVPAY invoicing solution" }}
          action={
            <>
              <StackedCardsFan>
                {product?.benefits &&
                  product.benefits.map((item, index) => (
                    <div
                      className="flex min-w-48 items-center gap-2 rounded-sm border border-background/50 bg-background/80 py-2 pl-3 pr-4 text-xs capitalize text-primary shadow-xl shadow-accent/20 sm:min-w-64 sm:rounded-md lg:text-base xl:min-w-72 xl:text-lg"
                      key={index}
                    >
                      <Icon icon={item.icon} />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </div>
                  ))}
              </StackedCardsFan>
              <Button asChild size="lg" variant="default">
                <Link href="https://app.ivpay.io/register">
                  Get Started
                </Link>
              </Button>
            </>
          }
          text={product?.full_description}
        />
      </MotionTriggerWrapper>
    </section>
  );
}
