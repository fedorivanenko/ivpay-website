import * as React from "react";

import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { imageAppearingVariant } from "@/components/motion/motion_utils";

import { HeroImageProps } from "@/components/elements/hero-image";
import HeroImage from "@/components/elements/hero-image";

export type HeroLayoutType = React.HTMLAttributes<HTMLDivElement> & {
  heading: React.ReactNode;
  action?: React.ReactNode;
  heroImage: HeroImageProps;
  text: React.ReactNode;
};

const HeroLayout = React.forwardRef<HTMLDivElement, HeroLayoutType>(
  ({ heading, action, heroImage, text, ...props }, forwardedRef) => {
    return (
      <Container ref={forwardedRef} {...props}>
        <div className="relative my-3 flex aspect-3/4 w-full flex-col items-center justify-between overflow-hidden p-5 sm:aspect-16/9 xl:my-8 xl:p-10">
          <MotionWrapper variants={imageAppearingVariant}>
            <div
              aria-hidden
              className="absolute inset-0 z-0 rounded-lg border-b border-l border-r border-background/50 bg-hero-gradient sm:rounded-xl xl:rounded-2xl"
            />
          </MotionWrapper>
          <Heading
            as="h1"
            size="72"
            className="z-10 mx-auto flex h-1/3 max-w-[20ch] flex-col justify-center text-center"
          >
            {heading}
          </Heading>
          <MotionWrapper>
            <div className="absolute bottom-0 -z-0 h-[60%] gradient-mask-b-[rgba(0,0,0,1.0)_60%,rgba(0,0,0,0.2)_85%]">
              <HeroImage src={heroImage.src} alt={heroImage.alt} />
            </div>
          </MotionWrapper>
          <div className="z-10 flex w-full justify-between">{action}</div>
        </div>
        <Text size="28" className="mx-3 max-w-screen-md sm:mx-6">
          {text}
        </Text>
      </Container>
    );
  },
);

HeroLayout.displayName = "HeroLayout";

export { HeroLayout };
