import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Container } from "@/components/layouts/container";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/elements/icon";
import Link from "next/link";
import { MotionWrapper } from "../motion/motion-wrapper";

export default function AboutHeroBlock() {
  return (
    <section
      id="about-hero-block"
    >
      {/**
       *
       */}
      <MotionTriggerWrapper>
        <MotionWrapper>
          <Container>
            <div className="relative flex aspect-3/4 w-full flex-col items-center justify-between overflow-hidden rounded-lg border border-border shadow-2xl shadow-accent/60 sm:aspect-4/3 lg:aspect-2/1 lg:rounded-xl xl:rounded-2xl">
              <div
                aria-hidden
                className="bg-darkshade-gradient pointer-events-none absolute inset-0 z-0 border-b border-l border-r border-background/50"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 z-10 h-3/4 w-full origin-left gradient-mask-l-70"
              >
                <MotionWrapper>
                  <Image
                    src="/bg-about-hero.png"
                    alt="/"
                    priority
                    fill
                    sizes="100vw"
                    quality={100}
                    className="object-cover object-top opacity-95"
                  />
                </MotionWrapper>
              </div>
              <Heading
                size="72"
                className="z-20 normal-case bg-gradient-to-b from-black/30 from-70% to-transparent p-16 xl:p-24 text-center text-background lg:p-20"
              >
                We&apos;re on a mission to make instant crypto transactions easy
                and accessible for everyone
              </Heading>
              <Button
                asChild
                size="lg"
                variant='white'
                className="z-20 mb-10 border border-border/20 shadow-accent/60 sm:mb-5 lg:mb-10"
              >
                <Link href="/">
                  Try it now
                  <Icon icon="ArrowUpRight" />
                </Link>
              </Button>
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
