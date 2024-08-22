import dynamic from "next/dynamic";

import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

/** Render a Globe. Not supported SSR -> Client side only */
const CountriesGlobe = dynamic(
  () => import("@/components/elements/countries-globe.jsx"),
  {
    ssr: false,
  },
);

import { CountriesList } from "../elements/country-list";
import { countryData } from "../data-providers/supported-countries";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

export default function TogetherWithUsBlock() {
  return (
    <section id="together-with-us-block" className="py-20">
      <Container>
        <div className="mx-2 mb-2 w-full sm:mx-7.5 sm:mb-5 xl:mx-10">
          <Heading as="h2" size="64" className="mb-2 lg:mb-4">
            Together with Us
          </Heading>
          <Text size="32" className="max-w-[24ch]">
            IVPAY already operates in more than 400 locations in
            <span className="whitespace-nowrap">
              {countryData.length}&nbsp;
            </span>
            countries.
          </Text>
          <CountriesList />
        </div>
        <div className="relative flex w-full flex-col items-center">
          <div className="mx-auto aspect-square w-full max-w-screen-md gradient-mask-b-[rgba(0,0,0,1.0)_25%,rgba(0,0,0,0)_85%]">
            <CountriesGlobe />
          </div>
          <div className="absolute bottom-0 flex w-full flex-col items-center gap-2 sm:gap-4">
            <Text className="leading-tighten max-w-[8ch] text-center text-2xl capitalize sm:text-4xl xl:text-6xl">
              &nbsp;Become the part of IVPAY
            </Text>
            <Button size="lg">Get started</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
