import { Container } from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { HeroLayout } from "@/components/layouts/hero-layout";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

export default function HomeHeroBlock() {
  return (
    <section id="home-hero-block" className="bg-gradient-to-b from-transparent to-blue-94">
      <MotionTriggerWrapper>
      <HeroLayout
        heading="A simple way to start accepting crypto in your business."
        heroImage={{src:"/hero-pos.png", alt:"Two IVPAY POS machine"}}
        action={
          <>
            <Button size="lg" variant="white">
              Contact Sales
            </Button>
            <Button size="lg" variant="default">
              Get Started
            </Button>
          </>
        }
        text="Our streamlined process makes it simple and hassle-free to get
        started. Say goodbye to complex setups and hello to the world of
        crypto with ease."
      />
      </MotionTriggerWrapper>
    </section>
  );
}