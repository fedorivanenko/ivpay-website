import { Container } from "../layouts/container";

import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";
import { MotionWrapper } from "../motion/motion-wrapper";

// see styling in @/mdx-components.tsx
import Privacy from "@/components/data-providers/privacy.mdx";

import { Link } from "../ui/link";
import { Text } from "../ui/text";
import { Separator } from "../ui/separator";

export default function PrivacyBlock() {
  return (
    <section id="privacy-block" className="py-20">
      {/*
       */}
      <MotionTriggerWrapper>
        <Container className="grid grid-cols-1 sm:grid-cols-3">
          <div className="col-span-2 mr-12 sm:mr-0">
            <Privacy />
          </div>
          <div className="relative">
            <div className="top-20 hidden max-w-80 flex-col space-y-2.5 px-5 sm:sticky sm:flex">
              <Text className="text-accent">Privacy Policy</Text>
              <Separator decorative orientation="horizontal" />
              <MotionWrapper>
                <Link url="/terms" className="max-w-min whitespace-nowrap">
                  Terms & Condidions
                </Link>
              </MotionWrapper>
            </div>
          </div>
        </Container>
      </MotionTriggerWrapper>
      {/*
       */}
    </section>
  );
}
