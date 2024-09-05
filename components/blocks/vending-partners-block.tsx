import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Card } from "@/components/ui/card";
import Image from "next/image";

//see the icons-provider.ts
import WorldLine from "@/resources/brands/worldline.svg";
import Ivenda from "@/resources/brands/ivenda.svg";

export default function VendingPartnersBlock() {
  return (
    <section id="merchant-video-block" className="bg-blue-94 py-20 sm:py-40">
      <MotionTriggerWrapper>
        <Container>
          <Heading
            as="h2"
            size="64"
            className="mb-5 ml-auto mr-3 max-w-[24h] text-right sm:mr-6 sm:max-w-none"
          >
            We have integration with the most popular companies in the world
          </Heading>
          <div className="grdi-cols-1 grid w-full gap-5 lg:grid-cols-3">
            <Card className="flex aspect-8/5 items-center justify-center">
              <span className="sr-only">Wordline</span>
              <WorldLine className="h-9 w-auto" />
            </Card>
            <Card className="flex aspect-8/5 items-center justify-center">
              <span className="sr-only">iVenda</span>
              <Ivenda className="h-16 w-auto" />
            </Card>
            <Card className="flex aspect-8/5 items-center justify-center">
              <span className="sr-only">Oveser</span>
              <div className="h-20">
                <Image
                  src="/oveser.png"
                  alt="Oveser"
                  width={168}
                  height={68}
                  className="h-full w-auto"
                />
              </div>
            </Card>
          </div>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
