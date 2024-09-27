import { Container } from "../layouts/container";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

// see styling in @/mdx-components.tsx
import Terms from "@/components/data-providers/terms.mdx";
import { Link } from "../ui/link";
import { Text } from "../ui/text";
import { Separator } from "../ui/separator";
import { MotionWrapper } from "../motion/motion-wrapper";

export default function TermsBlock() {
  return (
    <section id="terms-block" className="py-12">
      {/*
      <MotionTriggerWrapper>
        */}
        <Container className="grid grid-cols-1 sm:grid-cols-3">
        <div className="col-span-2 mr-12 sm:mr-0">
            <Terms />
          </div>
          <div className="relative">
            <div className="top-20 hidden max-w-80 flex-col space-y-2.5 px-5 sm:sticky sm:flex">
              <Text className="text-accent">Terms & Condidions</Text>
              <Separator decorative orientation="horizontal" />
              <MotionWrapper>
                <Link url="/privacy" className="max-w-min whitespace-nowrap">
                  Privacy Policy
                </Link>
              </MotionWrapper>
            </div>
          </div>
        </Container>
        {/*
      </MotionTriggerWrapper>
       */}
    </section>
  );
}
