import { HeroLayout } from "@/components/layouts/hero-layout";
import { StackedCardsFan } from "@/components/elements/stacked-cards-fan";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Button } from "@/components/ui/button";

export default function POSHeroBlock() {

const benefits = ['one', 'two', 'three', 'four', 'five']

  return (
    <section id="POS-hero-block" className="pb-20 bg-gradient-to-b from-transparent to-blue-94">
      <MotionTriggerWrapper>
        <HeroLayout
          heading="Everything you need to accept crypto"
          heroImage={{ src: "/product-pos.png", alt: "IVPAY POS machine" }}
          action={
            <>
            <StackedCardsFan>
              {benefits.map((item, index) => 
                <div 
                className="bg-background/80 text-primary capitalize shadow-xl shadow-accent/20 border border-background/50 px-4 py-2 rounded-sm sm:rounded-md text-xs lg:text-base xl:text-lg min-w-32 sm:min-w-40 xl:min-w-48"
                key={index}>{item}
                </div>
              )}
            </StackedCardsFan>
            <Button size="lg" variant="default">
              Get Started
            </Button>
              </>
          }
          text="Our Crypto POS machine combines everything you need to start accepting cryptocurrency making crypto payments accessible for any business."
        />
      </MotionTriggerWrapper>
    </section>
  );
}
