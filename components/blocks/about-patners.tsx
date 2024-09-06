import { Container } from "@/components/layouts/container";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

import { cardAppearing } from "@/components/motion/motion_utils";

import Binance from '@/resources/brands/binance.svg'
import OKX from '@/resources/brands/OKX.svg'
import GateIo from '@/resources/brands/gateio.svg'

//TODO: make a layout from it
export default function AboutPartnersBlock() {
  return (
    <section id="about-partners-block" className="py-20">
      {/**
       */}
       <MotionTriggerWrapper>
        <Container>
        <Heading
            as="h2"
            size="64"
            className="mb-5 ml-auto text-right"
          >
            Key Partners
          </Heading>
          <div className="flex w-full flex-col gap-5 pl-5 lg:h-40 lg:flex-row lg:pl-10">
            <MotionWrapper variants={cardAppearing}>
              <div className="flex w-full flex-col items-center justify-center py-4">
                <span className="sr-only">Binance</span>
                <div className="h-12">
                  <Binance className="h-full w-auto"/>
                </div>
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
              <div className="flex w-full flex-col items-center justify-center py-4">
                <span className="sr-only">OKX</span>
                <div className="h-24 mx-auto">
                  <OKX className="h-full w-auto"/>
                </div>
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
              <div className="flex w-full flex-col items-center justify-center py-4">
                <span className="sr-only">Gate.io</span>
                <div className="h-16">
                  <GateIo className="h-full w-auto"/>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </Container>
        </MotionTriggerWrapper>
      {/**
       */}
    </section>
  );
}
