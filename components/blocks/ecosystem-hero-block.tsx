import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Container } from "@/components/layouts/container";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/elements/icon";
import Link from "next/link";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { Text } from "@/components/ui/text";
import { Counter } from "@/components/ui/counter";

//TODO: make a layout from it
export default function EcosystemHeroBlock() {
  return (
    <section id="ecosystem-hero-block">
      {/**
       */}
      <MotionTriggerWrapper>
        <MotionWrapper>
          <Container>
            <div className="relative flex aspect-3/4 w-full flex-col items-center justify-between overflow-hidden rounded-lg border border-border shadow-2xl shadow-accent/60 sm:aspect-square lg:aspect-2/1 lg:rounded-xl xl:rounded-2xl">
              <div
                aria-hidden
                className="bg-darkshade-gradient pointer-events-none absolute inset-0 z-0 border-b border-l border-r border-background/50"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 z-10 h-3/4 w-full origin-left gradient-mask-r-70"
              >
                <MotionWrapper>
                  <Image
                    src="/bg-ecosystem-hero.png"
                    alt="/"
                    priority
                    fill
                    sizes="100vw"
                    quality={100}
                    className="object-cover object-top opacity-95"
                  />
                </MotionWrapper>
              </div>
              <h1 className="bg-text-gradient z-20 bg-clip-text pt-4 text-center text-[4rem] uppercase leading-none text-transparent sm:text-[6rem] lg:text-[10rem] xl:text-[12rem]">
                Ecosystem
              </h1>
              <div className="z-20 grid w-full grid-cols-1 gap-4 p-5 text-background sm:gap-5 lg:grid-cols-3">
                <div className="rounded-md border border-border/50 bg-background/20 p-5 backdrop-blur-md lg:aspect-11/10 xl:rounded-lg shadow-xl shadow-darkshade/20">
                  <Text>Current circulating supply</Text>
                  <Text size="32" className="text-2xl">
                    <Counter to={651731810} separator="comma" />
                    <span className="ml-2 origin-top-left scale-50 text-background/70">
                      UTK
                    </span>
                  </Text>
                </div>
                <div className="rounded-md border border-border/50 bg-background/20 p-5 backdrop-blur-md lg:aspect-11/10 xl:rounded-lg shadow-xl shadow-darkshade/20">
                  <Text>Reward & Cashback</Text>
                  <Text size="32" className="text-2xl">
                    <Counter to={225000000} separator="comma" />
                    <span className="ml-2 origin-top-left scale-50 text-background/70">
                      UTK
                    </span>
                  </Text>
                </div>
                <div className="rounded-md border border-border/50 bg-background/20 p-5 backdrop-blur-md lg:aspect-11/10 xl:rounded-lg shadow-xl shadow-darkshade/20">
                  <Text>Reserve Pool</Text>
                  <Text size="32" className="text-2xl">
                    <Counter to={123268190} separator="comma" />
                    <span className="ml-2 origin-top-left scale-50 text-background/70">
                      UTK
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </Container>
        </MotionWrapper>
      </MotionTriggerWrapper>
      {/**
       *
       */}
    </section>
  );
}
