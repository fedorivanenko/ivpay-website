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
              The all-in-one solution
              <br />
              to accept digital currencies
              <br />
              in your business.
            </>
          }
          heroImage={{ src: "/hero-pos.png", alt: "Two IVPAY POS machine" }}
          action={
            <>
              <Button asChild size="lg" variant="white">
                {/* TODO: Fix the link */}
                <Link href="https://app.ivendpay.com/register">
                  Contact Sales
                </Link>
              </Button>
              <Button asChild size="lg" variant="default">
                <Link href="https://app.ivendpay.com/register">
                  Get Started <Icon icon="ArrowUpRight" />
                </Link>
              </Button>
            </>
          }
          text={
            <>
              Our process makes it simple and hassle-free to start
              accept digital currencies. Say goodbye to complex setups and
              hello to the world of crypto with ease.
            </>
          }
        />
      </MotionTriggerWrapper>
    </section>
  );
}
