import { HeroLayout } from "@/components/layouts/hero-layout";
import { StackedCardsFan } from "@/components/elements/stacked-cards-fan";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Button } from "@/components/ui/button";

import { productsList } from "@/components/data-providers/products-provider";
import { Icon } from "@/components/elements/icon";
import Link from "next/link";

import AppStoreBadge from '@/resources/app-store-badge-en.svg'
import GoogleStoreBage from '@/resources/google-store-badge-en.svg'
import { MotionWrapper } from "../motion/motion-wrapper";

export default function AppHeroBlock() {
  const appProduct = productsList.find((product) => product.id === "app");

  return (
    <section
      id="POS-hero-block"
      className="bg-gradient-to-b from-transparent to-blue-94 pb-20"
    >
      <MotionTriggerWrapper>
        <HeroLayout
          //TODO: place actual text for APP hero
          heading={
            <>
            {appProduct?.description}
            </>
          }
          heroImage={{ src: "/product-app.png", alt: "IVPAY mobile app" }}
          action={
            <>
              <StackedCardsFan>
                {appProduct?.benefits &&
                  appProduct.benefits.map((item, index) => (
                    <div
                      className="flex min-w-48 items-center gap-2 rounded-sm border border-background/50 bg-background/80 py-2 pl-3 pr-4 text-xs capitalize text-primary shadow-xl shadow-accent/20 sm:min-w-64 sm:rounded-md lg:text-base xl:min-w-72 xl:text-lg"
                      key={index}
                    >
                      <Icon icon={item.icon} />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </div>
                  ))}
              </StackedCardsFan>
             
              <div className="flex space-x-2 xl:space-x-3 ml-auto">
                <MotionWrapper>
                  {/** TODO: MAKE IT VAR */}
                <Link href="https://apps.apple.com/us/app/ivendpay-pos/id1644875364" className="h-9 bg-black lg:h-12 w-auto shadow-xl shadow-accent/40 rounded-sm lg:rounded-md overflow-hidden">
                  <AppStoreBadge className="h-full w-auto"/>
                </Link>
                </MotionWrapper>
                {/* 
                <MotionWrapper>
                <Link href="https://app.ivpay.io/register" className="h-9 bg-black lg:h-12 w-auto shadow-xl shadow-accent/40 rounded-sm sm:rounded-md overflow-hidden">
                  <GoogleStoreBage className="h-full w-auto"/>
                </Link>
                </MotionWrapper>
                */}
              </div>
            </>
          }
          text="Turn your smartphone into a payment terminal — with our app, you're your own bank, ready to accept crypto anytime, anywhere."
        />
      </MotionTriggerWrapper>
    </section>
  );
}
