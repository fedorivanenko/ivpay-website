import * as React from "react";

import { Container } from "@/components/layouts/container";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Counter } from "../ui/counter";
import RenderImage from "../elements/image";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { Progress } from "@/components/ui/progress";

import TockenUtility from '@/components/data-providers/tocken-utility.mdx'

export type TockenomicsType = {
  amount: number;
  title: string;
};

export const Tockenomics: TockenomicsType[] = [
  { amount: 65, title: "Token sale" },
  { amount: 15, title: "Team" },
  { amount: 10, title: "Cashback & Reward" },
  { amount: 10, title: "Marketing" },
  { amount: 5, title: "DEX Liqudity Pool" },
  { amount: 3, title: "Advisors" },
  { amount: 2, title: "Listings" },
] as const;

export default function EcosystemTockenomicsBlock() {
  const sortedTockenomics = Tockenomics.slice()
    .sort((a, b) => b.amount - a.amount)
    .map((item, index, array) => {
      const maxAmount = array[0].amount;
      return {
        ...item,
        percentage: Math.floor((item.amount / maxAmount) * 100),
      };
    });

  return (
    <section id="tockenomics-block" className="py-20">
      {/*
       */}
      <MotionTriggerWrapper>
        <Container className="flex flex-col space-y-10">
          <div className="mb-2 flex w-full flex-col gap-2.5 lg:mb-5 lg:flex-row lg:justify-between">
            <Heading as="h2" size="64" className="mb-2 lg:mb-0">
              Tokenomics
            </Heading>
            <Text className="max-w-[32ch] text-left lg:text-right">
              $IVPAY token offers a wide range of benefits, providing exclusive advantages for both merchants and users within our ecosystem
            </Text>
          </div>
          {/*
          <MotionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 py-10">
              <TockenUtility/>
            </div>
          </MotionWrapper>
              */}
          <MotionWrapper>
            <div className="relative grid w-full grid-cols-1 overflow-hidden rounded-lg border border-border bg-gradient-to-br from-secondary/80 to-secondary shadow-2xl shadow-accent/20 lg:h-80 lg:grid-cols-3">
              <div className="p-5 sm:p-7.5 lg:aspect-square lg:h-full lg:p-10">
                <Text size="12" className="mb-2">
                  Total supply
                </Text>
                <Text className="text-5xl">$1B</Text>
              </div>
              <div className="col-span-1 flex flex-col p-5 sm:p-7.5 lg:col-span-2 lg:p-10">
                <Text size="12" className="mb-2">
                  Supply on TGE: 2,5% of the total supply
                </Text>
                <Text className="mb-5 text-5xl">
                  $<Counter to={845000} separator="comma" />
                </Text>
                <Text size="12" className="mt-auto lg:mt-0">
                  Platform:
                  <br />
                  Binance smart chain
                </Text>
              </div>
              <div
                aria-hidden
                className="relative bottom-0 right-0 z-0 aspect-8/5 w-full lg:absolute lg:h-full lg:w-auto"
              >
                <RenderImage
                  alt=""
                  src="/bg-tockenomics.png"
                  className="object-right"
                />
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper>
            <div className="grid grid-cols-6 gap-2.5 p-5 lg:p-10">
              {sortedTockenomics.map((item, index) => (
                <React.Fragment key={index}>
                  <Text size="32">
                    <Counter to={item.amount} />%
                  </Text>
                  <Text
                    size="14"
                    className="col-span-2 inline-flex items-center lg:col-span-1"
                  >
                    {item.title}
                  </Text>
                  <Progress
                    value={item.percentage}
                    className="col-span-3 h-full lg:col-span-4"
                  />
                </React.Fragment>
              ))}
            </div>
          </MotionWrapper>
        </Container>
      </MotionTriggerWrapper>
      {/*
       */}
    </section>
  );
}
