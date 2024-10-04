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
                className="pointer-events-none absolute inset-0 z-0 border-b border-l border-r border-background/50 bg-darkshade-gradient"
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
              <h1 className="z-20 bg-text-gradient bg-clip-text pt-4 text-center text-[4rem] uppercase leading-none text-transparent sm:text-[6rem] lg:text-[10rem] xl:text-[12rem]">
                Ecosystem
              </h1>

              <div className="z-20 flex w-full flex-col gap-5 p-5 text-background lg:grid-cols-3">
                <div className="rounded-md border border-border/50 bg-background/20 p-5 shadow-xl shadow-darkshade/20 backdrop-blur-md xl:rounded-lg">
                  <div className="flex justify-between">
                    <Text className="ml-2">$IVPAY Contract (BEP-20)</Text>
                    <Text className="group relative whitespace-nowrap">
                      <Link href="https://bscscan.com/address/0xDE5BDcbd4d7dFa86E527fEF9971bd6Ca6A76eefB">
                        Check{" "}
                        <Icon
                          icon="ArrowUpRight"
                          className="h-4 w-4 origin-top-right scale-90 lg:h-4 lg:w-4"
                        />
                      </Link>
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 ease-in-out group-hover:w-full" />
                    </Text>
                  </div>
                  <Text
                    size="32"
                    className="group relative mt-2 break-all text-2xl"
                  >
                    0xDE5BDcbd4d7dFa86E527fEF9971bd6Ca6A76eefB
                  </Text>
                </div>
                <div className="flex flex-col rounded-md border border-border/50 bg-background/20 p-5 shadow-xl shadow-darkshade/20 backdrop-blur-md lg:flex-row xl:rounded-lg">
                  <Text className="ml-2">$IVPAY Markets</Text>
                  <div className="mt-4 flex flex-wrap gap-5 lg:ml-auto">
                    <Link href="https://www.gate.io/trade/IVPAY_USDT">
                      <Icon
                        icon="GateIo"
                        className="aspect-square h-12 rounded-md shadow-lg shadow-accent/20"
                      />
                    </Link>
                    <Link href="https://www.mexc.com/exchange/IVPAY_USDT">
                      <Icon
                        icon="MEXC"
                        className="aspect-square h-12 rounded-md shadow-lg shadow-accent/20"
                      />
                    </Link>
                    <Link href="https://www.bitget.com/spot/IVPAYUSDT">
                      <Icon
                        icon="Bitget"
                        className="aspect-square h-12 rounded-md bg-white shadow-lg shadow-accent/20"
                      />
                    </Link>
                    <Link href="https://bingx.com/en-us/spot/IVPAYUSDT">
                      <Icon
                        icon="BingX"
                        className="aspect-square h-12 rounded-md shadow-lg shadow-accent/20"
                      />
                    </Link>
                    <Link href="https://whitebit.com/trade/IVPAY_USDT">
                      <Icon
                        icon="WhiteBit"
                        className="aspect-square h-12 rounded-md shadow-lg shadow-accent/20"
                      />
                    </Link>
                    <Link href="https://pancakeswap.finance/info/v3/tokens/0xde5bdcbd4d7dfa86e527fef9971bd6ca6a76eefb">
                      <Icon
                        icon="Cake"
                        className="aspect-square h-12 rounded-md shadow-lg shadow-accent/20"
                      />
                    </Link>
                    <Link href="https://changelly.com/exchange/ivpay">
                      <Icon
                        icon="Changelly"
                        className="aspect-square h-12 rounded-md shadow-lg shadow-accent/20"
                      />
                    </Link>
                  </div>
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
