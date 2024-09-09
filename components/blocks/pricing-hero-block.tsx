import { Container } from "../layouts/container";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";
import { MotionWrapper } from "../motion/motion-wrapper";
import Image from "next/image";
import { Text } from "../ui/text";

export default function PricingHeroBlock() {
  return (
    <section id="POS-hero-block" className="pb-20">
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
                className="pointer-events-none absolute bottom-0 z-20 h-full w-full origin-left gradient-mask-r-70"
              >
                <MotionWrapper>
                  <Image
                    src="/bg-pricing-hero.png"
                    alt="/"
                    priority
                    fill
                    sizes="100vw"
                    quality={100}
                    className="object-cover object-top opacity-90"
                  />
                </MotionWrapper>
              </div>
              <h1 className="bg-text-gradient z-10 bg-clip-text pt-4 text-center text-[6rem] uppercase leading-none text-transparent sm:text-[9rem] lg:text-[12rem] xl:text-[16rem]">
                Pricing
              </h1>
              <MotionWrapper>
              <div className="rounded-md border border-border/50 m-5 lg:m-10 bg-background/20 py-5 px-5 lg:px-10 backdrop-blur-md text-background xl:rounded-lg shadow-xl shadow-darkshade/10 z-20">
                  <Text size="32" className="text-center">
                  It&apos;s so simple you can laugh at it.
                  </Text>
                </div>
                </MotionWrapper>
            </div>
          </Container>
        </MotionWrapper>
      </MotionTriggerWrapper>
    </section>
  );
}