import * as React from "react";

import { Container } from "@/components/layouts/container";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Counter } from "../ui/counter";
import RenderImage from "../elements/image";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { Progress } from "@/components/ui/progress";

export type TockenomicsType = {
  amount: number;
  target: string;
};

export const Tockenomics: TockenomicsType[] = [
  { amount: 65, target: "Tocken sale" },
  { amount: 15, target: "Team" },
  { amount: 10, target: "Cashback & Reward" },
  { amount: 10, target: "Marketing" },
  { amount: 5, target: "DEX Liqudity Pool" },
  { amount: 3, target: "Advisors" },
  { amount: 2, target: "Listings" },
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
            Tockenomics
          </Heading>
          <Text className="max-w-[32ch] text-left lg:text-right">
            IVPAY is a utility token of the IVPay ecosystem. It was created to
            ensure a smooth transfer of value across our ecosystem.
          </Text>
        </div>
        <MotionWrapper>
          <div className="relative grid w-full grid-cols-1 overflow-hidden rounded-lg border border-border bg-secondary shadow-2xl shadow-accent/20 lg:h-80 lg:grid-cols-3">
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
              <Text size="14" className="inline-flex items-center col-span-2 lg:col-span-1">
                {item.target}
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
