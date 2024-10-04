import { Container } from "@/components/layouts/container";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { cardAppearing } from "@/components/motion/motion_utils";
import { PopUpVideoPlayer } from "@/components/elements/video-palyer";

export default function VendingVideoBlock() {
  return (
    <section id="vending-video-block" className="bg-blue-94 py-20 sm:py-40">
      <MotionTriggerWrapper>
        <Container className="bg-blue-shadow-gradient">
          <MotionWrapper variants={cardAppearing}>
              <div className="aspect-video w-full mx-auto overflow-hidden rounded-lg max-w-screen-lg sm:rounded-2xl shadow-2xl shadow-accent/40">
                <PopUpVideoPlayer
                  //url="https://www.youtube.com/watch?v=o_T7irLRaQI"
                  url="https://www.youtube.com/watch?v=8u55Ni_STG0"
                  title="How our vendings work"
                  description="See how use IVPAY vending machine"
                  thumbnail={{ src: "/vending-video-thumb.png" }}
                />
              </div>
          </MotionWrapper>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
