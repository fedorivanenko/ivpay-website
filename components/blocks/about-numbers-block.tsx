import { Container } from "@/components/layouts/container";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Counter } from "@/components/ui/counter";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";

import { countryData } from "@/components/data-providers/supported-countries";
import { cardAppearing } from "@/components/motion/motion_utils";

//TODO: make a layout from it
export default function AboutNumbersBlock() {
  return (
    <section id="about-numbers-block" className="py-20">
      {/**
       */}
      <MotionTriggerWrapper>
        <Container>
          <div className="flex w-full flex-col gap-5 pl-5 lg:h-40 lg:flex-row lg:pl-10">
            <MotionWrapper variants={cardAppearing}>
              <div className="flex w-full flex-row items-center justify-between py-4 lg:flex-col lg:items-start">
                <Text className="text-4xl">
                  <Counter to={400} />+
                </Text>
                <Text size="18">Active Merchants</Text>
              </div>
            </MotionWrapper>
            <Separator
              decorative
              orientation="vertical"
              className="hidden lg:block"
            />
            <Separator
              decorative
              orientation="horizontal"
              className="block lg:hidden"
            />
            <MotionWrapper variants={cardAppearing}>
              <div className="flex w-full flex-row items-center justify-between py-4 lg:flex-col lg:items-start">
                <Text className="text-4xl">
                  <Counter to={10000} />+
                </Text>
                <Text size="18">Happy buyers</Text>
              </div>
            </MotionWrapper>
            <Separator
              decorative
              orientation="vertical"
              className="hidden lg:block"
            />
            <Separator
              decorative
              orientation="horizontal"
              className="block lg:hidden"
            />
            <MotionWrapper variants={cardAppearing}>
              <div className="flex w-full flex-row items-center justify-between py-4 lg:flex-col lg:items-start">
                <Text className="text-4xl">
                  <Counter to={countryData.length} />
                </Text>
                <Text size="18">Countries</Text>
              </div>
            </MotionWrapper>
            <Separator
              decorative
              orientation="vertical"
              className="hidden lg:block"
            />
            <Separator
              decorative
              orientation="horizontal"
              className="block lg:hidden"
            />
            <MotionWrapper variants={cardAppearing}>
              <div className="flex w-full flex-row items-center justify-between py-4 lg:flex-col lg:items-start">
                <Text className="text-4xl">
                  <Counter to={100} />+
                </Text>
                <Text size="18">Payment Terminals</Text>
              </div>
            </MotionWrapper>
          </div>
        </Container>
      </MotionTriggerWrapper>
      {/**
       *
       */}
    </section>
  );
}
