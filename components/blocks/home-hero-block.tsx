import { Container } from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { HeroLayout } from "@/components/layouts/hero-layout";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Icon } from "@/components/elements/icon";
import Link from "next/link";

export default function HomeHeroBlock() {
  return (
    <section
      id="home-hero-block"
      className="bg-gradient-to-b from-transparent to-blue-94"
    >
      <MotionTriggerWrapper>
        <HeroLayout
          heading={
            <>
              Digital Currency Solutions 
              <br />
              for Every Business Need
            </>
          }
          heroImage={{ src: "/hero-pos.png", alt: "Two IVPAY POS machines" }}
          action={
            <>
              <Button asChild size="lg" variant="white">
                <Link href="https://calendly.com/ivpay/discovery">
                  Schedule a demo <Icon icon="ArrowUpRight" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="default">
                <Link href="https://app.ivpay.io/register">
                  Get Started <Icon icon="ArrowUpRight" />
                </Link>
              </Button>
            </>
          }
          text={
            <>
              Our terminals are just the beginning. We offer a complete set of tools for integrating digital currencies, including payment gateways, analytics, and custom solutions, to simplify crypto payments for businesses of all sizes.
            </>
          }
        />
      </MotionTriggerWrapper>
    </section>
  );
}
