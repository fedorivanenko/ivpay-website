import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Counter } from "@/components/ui/counter";
import { Separator } from "@/components/ui/separator";

import BrandWall from "@/components/elements/brand-wall";
import { FlagMarquee } from "@/components/elements/flag-marquee";

import { cn } from "@/lib/utils";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";

const ReapTheBenefitsBlock: React.FC<React.HTMLAttributes<HTMLElement>> = ({className}) => {
  return (
    <section id="reap-the-benefits-block" className={cn("bg-blue-94 py-20", className)}>
      <MotionTriggerWrapper>
      <Container>
        <Card className="py-5 pb-10 sm:pb-12 xl:pb-20 sm:pt-7.5 xl:pt-12">
          {/* Benefits */}
          {/*
          <div className="px-7.5 xl:px-12">
            <div>
              <Heading
                as="h2"
                size="64"
                className="mb-2 max-w-[12ch] sm:mb-5 sm:max-w-[14ch]"
              >
                Recap the benefits of crypto payments.
              </Heading>
              <Text size="32" className="max-w-[40ch]">
                Unlock the advantages of cryptocurrency payments and join the growing number of businesses worldwide benefiting from these perks daily.
              </Text>
            </div>
            <div className="my-10 grid max-w-screen-lg grid-cols-1 gap-5 sm:my-16 sm:grid-cols-3">
              <div>
                <Text className="mb-1 text-5xl sm:mb-1.5 sm:text-6xl xl:text-8xl">
                  <Counter to={40} />%
                </Text>
                <Text
                  size="24"
                  className="max-w-[12ch] leading-none lg:leading-none xl:leading-none"
                >
                  New customer sales on average
                </Text>
              </div>
              <div>
                <Text className="mb-1 text-5xl sm:mb-1.5 sm:text-6xl xl:text-8xl">
                  <Counter to={2} />X
                </Text>
                <Text
                  size="24"
                  className="max-w-[12ch] leading-none lg:leading-none xl:leading-none"
                >
                  Higher order value on average
                </Text>
              </div>
              <div>
                <Text className="mb-1 text-5xl sm:mb-1.5 sm:text-6xl xl:text-8xl">
                  <Counter to={55} />%
                </Text>
                <Text
                  size="24"
                  className="max-w-[12ch] leading-none lg:leading-none xl:leading-none"
                >
                  Reduction in transaction fees
                </Text>
              </div>
            </div>
          </div>
          <Separator className="my-10 sm:my-20" />
           */}
          
          {/* Companies */}
          <div className="px-7.5 xl:px-12">
            <div className="relative flex flex-col justify-between sm:flex-row">
              <Heading as="h2" size="64" className="mb-2 max-w-[12ch] sm:mb-0">
                Crypto Payments Are Here To Stay
              </Heading>
              <Text
                size="28"
                className="max-w-[28ch] capitalize sm:max-w-[20ch] sm:text-right"
              >
                They Trust Crypto.<br/>When Will You?
              </Text>
            </div>
            {/* Companies list */}
            <BrandWall />
          </div>
          {/* Crypto Growth */}
          {/*
          <Separator className="my-10 sm:my-20" />
          <div className="mb-12 flex flex-col space-y-7.5 px-7.5 lg:mb-20 lg:space-y-12 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <Text className="mb-2 whitespace-nowrap text-7xl lg:mb-0 lg:translate-y-2 lg:text-[6rem]">
                <Counter to={580} />%
              </Text>
              <Text size="24" className="max-w-[32ch]">
                Growth has been shown in cryptocurrency transactions in the last
                five years alone
              </Text>
            </div>
            <div className="grid grid-cols-1 space-y-7.5 lg:grid-cols-3 lg:space-y-0">
              <div>
                <FlagMarquee className="mb-2 h-12 py-1" />
                <Text className="max-w-[32ch]">
                  Crypto holders have significant buying power and are eager to
                  spend at crypto-friendly merchants.
                </Text>
              </div>
              <div>
                <Text className="mb-2 text-4xl lg:text-5xl">
                  <Counter to={2100000} />
                </Text>
                <Text className="max-w-[32ch]">
                  Transactions a day processes the 3 largest networks alone
                </Text>
              </div>
              <div>
                <Text className="mb-2 text-4xl xl:text-5xl">
                  <Counter to={100} />
                </Text>
                <Text className="max-w-[32ch]">
                  Google Search Trends for “Buy with Crypto” shows that interest
                  in spending crypto has skyrocketed
                </Text>
              </div>
            </div>
          </div>
           */}
        </Card>
      </Container>
      </MotionTriggerWrapper>
    </section>
  );
}

export default ReapTheBenefitsBlock