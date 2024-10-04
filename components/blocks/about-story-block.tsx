import { Container } from "../layouts/container";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

import About from '@/components/data-providers/about.mdx'

export default function AboultStoryBlock() {
    return (
      <section id="terms-block" className="py-12">
        {/*
         */}
        <MotionTriggerWrapper>
          <Container>
            <div className="max-w-screen-md">
              <About/>
            </div>
          </Container>
        </MotionTriggerWrapper>
        {/*
         */}
      </section>
    );
  }
  