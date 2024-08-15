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

export default function EasySafeFastBlock() {
  return (
    <section id="easy-safe-fast-block" className="bg-blue-94 py-20">
      <Container>
        <div className="flex flex-1 flex-col rounded-t-lg bg-blue-600 pb-6 sm:rounded-t-2xl sm:pb-12">
          <Heading as="h2" size="64" className="p-5 text-background sm:p-10">
            Easy Safe Fast Payments
          </Heading>
        </div>
        <div className="-mt-6 flex w-full flex-col gap-2 sm:-mt-12 sm:aspect-square sm:gap-5 bg-blue-gradient">
          <Card className="grid flex-1 grid-cols-1 p-5 sm:grid-flow-col sm:grid-cols-2 sm:p-7.5 xl:p-10">
            <Heading
              as="h3"
              size="48"
              className="mb-5 max-w-[8ch] text-2xl sm:mb-0"
            >
              How do payments work?
            </Heading>
            <Text size='18' className="order-last mt-2.5 text-sm sm:order-none sm:mt-auto">
              Start accepting 40+ cryptocurrencies now
            </Text>
            <div className="row-span-2 aspect-square rounded-md bg-slate-400 sm:aspect-auto sm:rounded-lg">
              video
            </div>
          </Card>
          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:gap-5">
            <Card className="flex aspect-square flex-1 flex-col sm:aspect-auto">
              <div className="flex-1 flex flex-col">
              <InfinityMarque>
                  <BTCicon className="aspect-square flex-1 rounded-full" />
                  <ETHicon className="aspect-square flex-1 rounded-full" />
                  <USDTicon className="aspect-square flex-1 rounded-full" />
                  <EURicon className="aspect-square flex-1 rounded-full" />
                </InfinityMarque>
              </div>
              <div className="p-5 sm:p-7.5 xl:p-10 pt-0 sm:pt-0 xl:pt-0">
                <Heading as="h3" size="32" className="mb-1.5 sm:mb-2">
                  Get money as you prefer
                </Heading>
                <Text size="24">
                  Choose your ticker. Keep crypto or instantly convert to fiat
                  for no volatility
                </Text>
              </div>
            </Card>
            <Card className="flex aspect-square flex-1 flex-col sm:aspect-auto">
              <div className="order-first flex-1 sm:order-last relative">
              <Image
                  src="/e-commerce-cover.png"
                  alt="IvPay POS Machine"
                  fill
                  className="object-cover object-right-bottom sm:object-left-top"
                />
              </div>
              <div className="p-5 sm:p-7.5 xl:p-10 pt-0 sm:pb-0 xl:pb-0">
                <Heading as="h3" size="32" className="mb-1.5 sm:mb-2">
                  We monitoring transactions
                </Heading>
                <Text size="24">
                  Choose your ticker. Keep crypto or instantly convert to fiat
                  for no volatility
                </Text>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
