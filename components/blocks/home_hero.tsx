import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Container from "../layouts/container";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";
import { ParallaxWrapper } from "../motion/parallaxWrapper";
import { Card, CardContent } from "../ui/card";
import { Counter } from "../ui/counter";
import { Text } from "../ui/text";
import { FlagMarquee } from "../elements/flagMarquee";

export default function HomepageHero() {
  return (
    <section className="flex flex-col py-24 bg-gradient-to-b from-background to-soft">
      <MotionTriggerWrapper>
        <Container className="px-5">
          <Heading as="h1" size="100" className="text-center">
              A simple way to start accepting crypto in your business
          </Heading>
          <ParallaxWrapper
            className="flex justify-between mx-5 md:mx-40 my-12 md:my-24"
            >
            <Button size="lg" variant="white">
              Contact Sales
            </Button>
            <Button size="lg">
              Get Started<ArrowRightIcon className="group-hover:translate-x-1 transition-transform h-4 w-4 md:h-6 md:w-6"/>
            </Button>
          </ParallaxWrapper>
          <Card className="p-8 flex">
            <div className="grid grid-cols-3 flex-1">
              <FlagMarquee countries={["eu", "fr", "ua", "ng", "ae", "bs", "at"]}/>
            <CardContent><Text className="text-3xl md:text-3xl"><Counter to={580}/>% Grow Each Year</Text></CardContent>
            </div>
          </Card>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
