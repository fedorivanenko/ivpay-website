import { HeroLayout } from "@/components/layouts/hero-layout";
import { StackedCardsFan } from "@/components/elements/stacked-cards-fan";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Button } from "@/components/ui/button";

import { products } from "@/components/data-providers/products-provider";
import { Icon } from "@/components/elements/icon";
import Link from "next/link";

export default function POSHeroBlock() {
  const posProduct = products.find((product) => product.id === "pos");

  return (
    <section
      id="POS-hero-block"
      className="bg-gradient-to-b from-transparent to-blue-94 pb-20"
    >
      <MotionTriggerWrapper>
        <HeroLayout
          heading={
            <>
              Get more customers
              <br />
              at your store with our
              <br /> Payment Terminal
            </>
          }
          heroImage={{ src: "/product-pos.png", alt: "IVPAY POS machine" }}
          action={
            <>
              <StackedCardsFan>
                {posProduct?.benefits &&
                  posProduct.benefits.map((item, index) => (
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
                <Link href="https://app.ivendpay.com/register">
                  Get Started
                </Link>
              </Button>
            </>
          }
          text="Our Payment Terminal is a device that enables NFC and QRcode crypto payment compatible with all crypto wallets, you don't even need to understand it."
        />
      </MotionTriggerWrapper>
    </section>
  );
}
