import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Container from "../layouts/container";
import { MotionTriggerWrapper } from "../layouts/motionTriggerWrapper";

export default function HomepageHero() {
  return (
    <section className="flex flex-col py-24 bg-gradient-to-b from-background to-soft">
        <Container>
          <Heading type="h1" size="100">
            A simple way to start accepting crypto in your business
          </Heading>
          <p className="mx-auto">IMG</p>
          <div className="flex justify-between mx-40 my-24">
            <Button size="lg" variant="white">Contact Sales</Button>
            <Button size="lg">Get Started<ArrowRightIcon width="24" height="24" /></Button>
          </div>
        </Container>
    </section>
  );
}
