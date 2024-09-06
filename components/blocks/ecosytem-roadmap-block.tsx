import { Container } from "@/components/layouts/container";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { roadmapList } from "@/components/data-providers/roadmap-provider";
import { MotionWrapper } from "../motion/motion-wrapper";

export default function EcosystemRoadmapBlock() {
  return (
    <section id="roadmap-block" className="py-20">
      {/*
       */}
      <MotionTriggerWrapper>
        <Container>
          <div className="mb-5 flex w-full flex-col gap-2.5 lg:flex-row lg:justify-between">
            <Heading as="h2" size="64" className="mb-2 lg:mb-5">
              Roadmap
            </Heading>
            <Text className="text-left lg:text-right">
              We&apos;re all changing
              <br />
              The new era of cryptopayments
            </Text>
          </div>
          <Accordion type="multiple"
            defaultValue={roadmapList.map(item => item.id)}
          >
            {roadmapList.map((quarter, index) =>
              //TODO: reduce boilerplate with with cn(className)
              index === 0 ? (
                <MotionWrapper
                  key={quarter.id}
                >
                <AccordionItem
                  value={quarter.id}
                  className="p-0"
                >
                  <AccordionTrigger className="relative pr-2">
                    <h3 className="flex h-10 w-32 items-center justify-center rounded-full border border-accent p-2 px-4 text-xl">
                      {quarter.title}
                    </h3>
                    <div
                      aria-hidden
                      className="absolute top-14 ml-16 h-4 w-full border-l border-accent pl-16"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="py-0">
                    <div className="ml-16 grid grid-cols-1 border-l border-accent py-4 pl-16 lg:grid-cols-3">
                      {quarter.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col lg:space-y-2"
                        >
                          <h4 className="text-2xl">
                            {item.title}
                          </h4>
                          <ul className="flex flex-col space-y-2">
                            {item.list.map((listItem, index) => (
                              <li key={index}>
                                <p className="text-lg">{listItem}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                </MotionWrapper>
              ) : (
                <MotionWrapper
                  key={quarter.id}
                >
                <AccordionItem
                  value={quarter.id}
                  className="p-0"
                >
                  <AccordionTrigger className="pr-2">
                    <h3 className="flex h-10 w-32 items-center justify-center rounded-full p-2 px-4 text-xl">
                      {quarter.title}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="ml-32 grid grid-cols-1 lg:grid-cols-3">
                      {quarter.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col lg:space-y-2"
                        >
                          <h4 className="text-2xl">
                            {item.title}
                          </h4>
                          <ul className="flex flex-col space-y-2">
                            {item.list.map((listItem, index) => (
                              <li key={index}>
                                <p className="text-lg">{listItem}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                </MotionWrapper>
              ),
            )}
          </Accordion>
        </Container>
      </MotionTriggerWrapper>
      {/*
       */}
    </section>
  );
}
