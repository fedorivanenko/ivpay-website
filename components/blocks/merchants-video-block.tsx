import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";
import { MotionWrapper } from "../motion/motion-wrapper";
import { cardAppearing } from "../motion/motion_utils";

export default function MerchantVideoBlock() {
  return (
    <section id="merchant-video-block" className="bg-blue-94 py-20 sm:py-40">
      <MotionTriggerWrapper>
      <Container className="bg-blue-shadow-gradient">
        <MotionWrapper variants={cardAppearing}>
        <div className=" overflow-hidden flex flex-1 flex-col rounded-lg border border-background/70 box-border bg-blue-gradient sm:rounded-2xl max-w-[60rem] mx-auto shadow-card-shadow">
          <Heading as="h2" size="64" className="py-4 px-5 text-background sm:py-8 sm:px-10 max-w-[18ch]">
          40+ Merchants use IVPAY every day
          </Heading>
          <div className="w-full aspect-video rounded-t-lg sm:rounded-t-2xl bg-slate-400 overflow-hidden shadow-on-blue-header-sm sm:shadow-on-blue-header-xl">
            
          </div>
        </div>
        </MotionWrapper>
      </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
