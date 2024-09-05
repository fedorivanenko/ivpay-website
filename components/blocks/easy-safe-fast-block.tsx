import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import Image from "next/image";

import { InfinityMarque } from "@/components/elements/infinity-marquee";

//see the data-providers/supported-coins.ts
import BTCicon from "@/resources/currencies/btc.svg";
import ETHicon from "@/resources/currencies/eth.svg";
import EURicon from "@/resources/currencies/eur.svg";
import USDTicon from "@/resources/currencies/usdt.svg";

import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { cardAppearing } from "@/components/motion/motion_utils";
import { PopUpVideoPlayer } from "@/components/elements/video-palyer";

import { coinData } from "@/components/data-providers/supported-coins";

export default function EasySafeFastBlock() {
  return (
    <section id="easy-safe-fast-block" className="bg-blue-94 py-20">
      {/**
       */}
      <Container>
       <MotionTriggerWrapper>
        <MotionWrapper variants={cardAppearing}>
          <div className="flex flex-1 flex-col">
            <Heading
              variants={cardAppearing}
              as="h2"
              size="64"
              className="box-border rounded-t-lg border border-background/60 bg-blue-gradient px-5 pb-20 pt-5 text-background shadow-lg shadow-accent/50 sm:rounded-t-2xl sm:px-10 sm:pb-28 lg:pb-32 lg:pt-10"
            >
              Easy. Safe. Fast.
            </Heading>
            <div className="z-10 -mt-16 flex w-full flex-col gap-5 bg-blue-shadow-gradient shadow-on-blue-header-sm sm:-mt-24 sm:aspect-square sm:shadow-on-blue-header-xl">
              <Card className="grid flex-1 grid-cols-1 p-5 backdrop-blur-xl sm:aspect-2/1 sm:grid-flow-col sm:grid-cols-2 sm:p-7.5 lg:aspect-auto xl:p-10">
                <Heading
                  as="h3"
                  size="48"
                  className="mb-5 max-w-[8ch] text-2xl sm:mb-0"
                >
                  How do payments work?
                </Heading>
                <Text
                  size="18"
                  className="order-last mt-2.5 max-w-[24ch] text-sm sm:order-none sm:mt-auto"
                >
                  Start accepting{" "}
                  <span className="whitespace-nowrap">
                    &nbsp;{Math.floor(coinData.length / 10) * 10}
                  </span>
                  + cryptocurrencies now
                </Text>

                <div className="row-span-2 aspect-square overflow-hidden rounded-md sm:aspect-auto sm:rounded-lg">
                  <PopUpVideoPlayer
                  //TODO: place correct link
                    //url="https://www.youtube.com/watch?v=-p_F0t7b80M" //this is the correct one
                    url="https://www.youtube.com/watch?v=m2JRghbgeYw"
                    title="How do payment work"
                    description="See how IVPAY system process payments"
                    thumbnail={{ src: "/payment-video-thumb.png" }}
                  />
                </div>
              </Card>
              <div className="flex flex-1 flex-col gap-5 lg:flex-row">
                <Card className="flex aspect-square flex-1 flex-col lg:aspect-auto">
                  <div className="flex flex-1 flex-col">
                    <InfinityMarque>
                      {/*see the data-providers/supported-coins.ts*/}
                      <BTCicon className="aspect-square flex-1 rounded-full" />
                      <ETHicon className="aspect-square flex-1 rounded-full" />
                      <USDTicon className="aspect-square flex-1 rounded-full" />
                      <EURicon className="aspect-square flex-1 rounded-full" />
                    </InfinityMarque>
                  </div>
                  <div className="p-5 pt-0 sm:p-7.5 sm:pt-0 xl:p-10 xl:pt-0">
                    <Heading as="h3" size="32" className="mb-1.5 sm:mb-2">
                      Get paid your way
                    </Heading>
                    <Text size="24" className="max-w-[28ch]">
                      Pick your preferred currency. Keep it in crypto or
                      instantly convert it to fiat.
                    </Text>
                  </div>
                </Card>
                <Card className="flex aspect-square flex-1 flex-col sm:aspect-auto">
                  <div className="relative order-first flex-1 sm:order-last">
                    <Image
                      src="/e-commerce-cover.png"
                      alt="IvPay POS Machine"
                      fill
                      quality={75}
                      sizes="50vw"
                      className="object-cover object-right-bottom sm:object-left-top"
                    />
                  </div>
                  <div className="p-5 pt-0 sm:p-7.5 xl:p-10">
                    <Heading as="h3" size="32" className="my-1.5 sm:mb-2">
                      We do all the hard work
                    </Heading>
                    <Text size="24" className="max-w-[28ch]">
                      We will convert all crypto to the currency of your choice
                      and show you all the necessary info.
                    </Text>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </MotionTriggerWrapper>
      </Container>
      {/*
         */}
    </section>
  );
}
