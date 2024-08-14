import * as React from "react";

import Image from "next/image";

import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card, CardHeader } from "@/components/ui/card";
import { InfinityMarque } from "@/components/elements/infinity-marquee";

import BTCicon from "@/currencies/btc.svg";
import ETHicon from "@/currencies/eth.svg";
import EURicon from "@/currencies/eur.svg";
import USDTicon from "@/currencies/usdt.svg";

import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";

export default function EasySafeFastBlock() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-blue-94 pt-10">
      <Container className="">
        {/* Blue Container */}
        <div className="pb-25 relative flex min-h-screen w-full flex-col gap-10 overflow-hidden rounded-t-xl bg-blue-70 bg-blue-60-94-radial-gradient p-7.5 pt-10 text-background shadow-2xl shadow-blue-60 lg:gap-10 lg:p-15 lg:pb-40 lg:pt-16">
          {/* Heading Container */}
          <div className="flex flex-col gap-2.5 lg:gap-5">
            <Heading as="h2" size="72" className="sm:whitespace-nowrap">
              Easy. Safe. Fast.
            </Heading>
            <Text className="text-base lg:text-lg">
              Our streamlined process makes it simple and hassle-free to get
              started. <br className="hidden sm:block" />
              Say goodbye to complex setups and hello to the world of crypto
              with ease.
            </Text>
          </div>
          {/* Card Container */}
          <div className="grid grid-cols-1 gap-5 sm:aspect-3/4 sm:grid-cols-2 lg:aspect-square">
            {/* Card 01 */}
            <Card className="grid grid-cols-1 gap-2.5 p-4 sm:col-span-2 sm:aspect-auto sm:grid-cols-2 sm:p-7.5">
              <Heading
                as="h3"
                size="72"
                className="mb-5 max-w-[10ch] text-3.5xl sm:mb-0"
              >
                How do payments work?
              </Heading>
              <div className="row-span-2 aspect-4/3 rounded-sm bg-slate-600 sm:aspect-auto lg:rounded-md" />
              <Text className="mt-auto text-xs sm:text-xs lg:text-base">
                Start accepting 1500+ different cryptocurrencies now
              </Text>
            </Card>
            {/* Card 02 */}
            <Card className="flex flex-col">
              <CardHeader className="sm:pb-7.5 sm:pt-2.5">
                <Heading as="h3" size="48" className="max-w-[10ch]">
                  What about the payouts?
                </Heading>
                <Text className="sm:pt-2 sm:text-sm lg:text-base">
                  Choose your ticker. Get money as you prefer.
                  <br />
                  You can keep crypto or instantly convert to fiat for no
                  volatility.
                </Text>
              </CardHeader>
              <div className="flex aspect-4/3 flex-col sm:order-first sm:aspect-auto sm:flex-1">
                <InfinityMarque>
                  <BTCicon className="aspect-square flex-1 rounded-full" />
                  <ETHicon className="aspect-square flex-1 rounded-full" />
                  <USDTicon className="aspect-square flex-1 rounded-full" />
                  <EURicon className="aspect-square flex-1 rounded-full" />
                </InfinityMarque>
              </div>
            </Card>
            {/* Card 03 */}
            <Card className="flex flex-col">
              <CardHeader>
                <Heading as="h3" size="48">
                  we monitoring transactions
                </Heading>
                <Text className="sm:pt-2 sm:text-sm lg:text-base">
                  Choose your ticker. Get money as you prefer.
                  <br />
                  You can keep crypto or instantly convert to fiat for no
                  volatility.
                </Text>
              </CardHeader>
              <div className="relative aspect-4/3 sm:aspect-auto sm:flex-1">
                <Image
                  src="/e-commerce-cover.png"
                  alt="IvPay POS Machine"
                  fill
                  className="object-cover object-right-bottom"
                />
              </div>
            </Card>
          </div>
        </div>
      </Container>
      <div
        aria-hidden
        className="absolute bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-blue-94 xl:h-60"
      />
    </section>
  );
}
