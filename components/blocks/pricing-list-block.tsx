import { Container } from "../layouts/container";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

export default function PricingListBlock(){
    return(
        <section id="POS-hero-block" className="py-20">
        <MotionTriggerWrapper>
        <Container>
            Pricing List
        </Container>
        </MotionTriggerWrapper>
        </section>
    )
}