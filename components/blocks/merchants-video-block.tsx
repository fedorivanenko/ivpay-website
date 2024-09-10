import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { cardAppearing } from "@/components/motion/motion_utils";
import { PopUpVideoPlayer } from "@/components/elements/video-palyer";

export default function MerchantVideoBlock() {
  return (
    <section id="merchant-video-block" className="bg-blue-94 py-20 sm:py-40">
      <MotionTriggerWrapper>
        <Container className="bg-blue-shadow-gradient">
          <MotionWrapper variants={cardAppearing}>
            <div className="mx-auto box-border flex max-w-[60rem] flex-1 flex-col overflow-hidden rounded-lg border border-background/70 bg-blue-gradient shadow-card-shadow sm:rounded-2xl">
              <Heading
                as="h2"
                size="64"
                className="max-w-[18ch] px-5 py-4 text-background sm:px-10 sm:py-8"
              >
                400+ Merchants use IVPAY every day
              </Heading>
              <div className="aspect-video w-full overflow-hidden rounded-t-lg shadow-on-blue-header-sm sm:rounded-t-2xl sm:shadow-on-blue-header-xl">
                <PopUpVideoPlayer
                  url="https://www.youtube.com/watch?v=-p_F0t7b80M"
                  title="How to use IVPAY"
                  description="See how merchants use IVPAY"
                  thumbnail={{ src: "/merchan-video-thumb.png" }}
                />
              </div>
            </div>
          </MotionWrapper>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
