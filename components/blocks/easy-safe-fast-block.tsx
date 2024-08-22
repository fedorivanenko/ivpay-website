import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import Image from "next/image";

import { InfinityMarque } from "@/components/elements/infinity-marquee";

import BTCicon from "@/resources/currencies/btc.svg";
import ETHicon from "@/resources/currencies/eth.svg";
import EURicon from "@/resources/currencies/eur.svg";
import USDTicon from "@/resources/currencies/usdt.svg";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { cardAppearing } from "@/components/motion/motion_utils";

export default function EasySafeFastBlock() {
  return (
    <section id="easy-safe-fast-block" className="bg-blue-94 py-20">
      
      <Container>
          <MotionWrapper variants={cardAppearing}>
            <div className="flex flex-1 flex-col">
              <Heading
                variants={cardAppearing}
                as="h2"
                size="64"
                className="rounded-t-lg border border-background/60 shadow-lg shadow-accent/50 box-border bg-blue-gradient px-5 pb-20 pt-5 text-background sm:rounded-t-2xl sm:px-10 sm:pb-32 sm:pt-10"
              >
                Easy Safe Fast Payments
              </Heading>
              <div className="-mt-16 z-10 flex w-full flex-col gap-2 bg-blue-shadow-gradient sm:-mt-24 sm:aspect-square sm:gap-5 shadow-on-blue-header-sm sm:shadow-on-blue-header-xl">
                <Card className="grid flex-1 grid-cols-1 p-5 sm:grid-flow-col sm:grid-cols-2 sm:p-7.5 xl:p-10 backdrop-blur-xl">
                  <Heading
                    as="h3"
                    size="48"
                    className="mb-5 max-w-[8ch] text-2xl sm:mb-0"
                  >
                    How do payments work?
                  </Heading>
                  <Text
                    size="18"
                    className="order-last mt-2.5 text-sm sm:order-none sm:mt-auto"
                  >
                    Start accepting 40+ cryptocurrencies now
                  </Text>
                  <div className="row-span-2 aspect-square rounded-md bg-slate-400 sm:aspect-auto sm:rounded-lg">
                    video
                  </div>
                </Card>
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:gap-5">
                  <Card className="flex aspect-square flex-1 flex-col sm:aspect-auto">
                    <div className="flex flex-1 flex-col">
                      <InfinityMarque>
                        <BTCicon className="aspect-square flex-1 rounded-full" />
                        <ETHicon className="aspect-square flex-1 rounded-full" />
                        <USDTicon className="aspect-square flex-1 rounded-full" />
                        <EURicon className="aspect-square flex-1 rounded-full" />
                      </InfinityMarque>
                    </div>
                    <div className="p-5 pt-0 sm:p-7.5 sm:pt-0 xl:p-10 xl:pt-0">
                      <Heading as="h3" size="32" className="mb-1.5 sm:mb-2">
                        Get money as you prefer
                      </Heading>
                      <Text size="24">
                        Choose your ticker. Keep crypto or instantly convert to
                        fiat for no volatility
                      </Text>
                    </div>
                  </Card>
                  <Card className="flex aspect-square flex-1 flex-col sm:aspect-auto">
                    <div className="relative order-first flex-1 sm:order-last">
                      <Image
                        src="/e-commerce-cover.png"
                        alt="IvPay POS Machine"
                        fill
                        className="object-cover object-right-bottom sm:object-left-top"
                      />
                    </div>
                    <div className="p-5 pt-0 sm:p-7.5 xl:p-10 ">
                      <Heading as="h3" size="32" className="my-1.5 sm:mb-2">
                        We monitoring transactions
                      </Heading>
                      <Text size="24">
                        Choose your ticker. Keep crypto or instantly convert to
                        fiat for no volatility
                      </Text>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </Container>
    </section>
  );
}
