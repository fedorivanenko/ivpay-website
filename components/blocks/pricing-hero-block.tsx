import { Container } from "../layouts/container";
import { HeroLayout } from "../layouts/hero-layout";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

export default function PricingHeroBlock() {
    return (
        <section id="POS-hero-block" className="pb-20">
            <MotionTriggerWrapper>
            <Container>
                Pricing Hero
            </Container>
            </MotionTriggerWrapper>
            </section>
    )
}