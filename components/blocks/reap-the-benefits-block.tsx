import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Counter } from "@/components/ui/counter";
import { Separator } from "@/components/ui/separator";

import BrandWall from "@/components/elements/brand-wall";
import { FlagMarquee } from "@/components/elements/flag-marquee";

export default function ReapTheBenfitsBlock() {
  return (
    <section id="reap-the-benefits-block" className="bg-blue-94 py-20">
      <Container>
        <Card className="p-5 sm:p-7.5 xl:p-12">
          {/* Benefits */}
          <div>
            <Heading
              as="h2"
              size="64"
              className="mb-2 max-w-[12ch] sm:mb-5 sm:max-w-[14ch]"
            >
              reap the benefits of crypto payments.
            </Heading>
            <Text size="32" className="max-w-[40ch]">
              The benefits of accepting crypto are clear. More and more businesses from around the world are getting on board each day to claim them.
            </Text>
          </div>
          <div className="my-10 sm:my-16 grid max-w-screen-lg grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <Text className="mb-1 text-5xl sm:mb-1.5 sm:text-6xl xl:text-8xl">
                <Counter to={40} />%
              </Text>
              <Text size="24" className="max-w-[12ch] leading-none lg:leading-none xl:leading-none">
                New customer sales on average
              </Text>
            </div>
            <div>
              <Text className="mb-1 text-5xl sm:mb-1.5 sm:text-6xl xl:text-8xl">
                <Counter to={2} />X
              </Text>
              <Text size="24" className="max-w-[12ch] leading-none lg:leading-none xl:leading-none">
                Higher order value on average
              </Text>
            </div>
            <div>
              <Text className="mb-1 text-5xl sm:mb-1.5 sm:text-6xl xl:text-8xl">
                <Counter to={55} />%
              </Text>
              <Text size='24' className="max-w-[12ch] leading-none lg:leading-none xl:leading-none">
                Reduction in transaction fees
              </Text>
            </div>
          </div>
          <Separator className="my-10 sm:my-20" />
          {/* Companies */}
          <div className="relative mb-10 flex flex-col justify-between sm:mb-10 sm:flex-row">
            <Heading as="h2" size="64" className="mb-2 max-w-[12ch] sm:mb-0">
              crypto payments become part of our world
            </Heading>
            <Text
              size="28"
              className="max-w-[24ch] capitalize sm:max-w-[20ch] sm:text-right"
            >
              Along with individual consumers, companies are adopting crypto as
              well.
            </Text>
          </div>
          {/* Companies list */}
          <BrandWall />
          <Separator className="my-10 sm:my-20" />
          {/* Crypto Growth */}
          <div className="mb-10 grid grid-cols-1 gap-x-7.5 gap-y-7.5 sm:mb-20 sm:grid-cols-3">
            <Text className="text-6xl sm:text-5xl xl:text-[7rem] xl:translate-y-[0.12em]">
              <Counter to={580} />%
            </Text>
            <Text size="24" className="max-w-[21ch] capitalize sm:col-span-2 my-auto">
              growth has been shown in cryptocurrency transactions in the last
              five years alone
            </Text>
            <div className="order-last sm:order-none">
              <FlagMarquee
              className="h-9 py-1 xl:h-12 mb-2"
              />
              <Text>
                Crypto holders have massive buying power and are looking to
                spend at crypto-accepting merchants
              </Text>
            </div>
            <div>
              <Text className="mb-2 text-4xl xl:text-5xl">
                <Counter to={2100000} />
              </Text>
              <Text>
                Transactions a day processes the 3 largest networks alone
              </Text>
            </div>
            <div>
              <Text className="mb-2 text-4xl xl:text-5xl">
                <Counter to={100} />
              </Text>
              <Text>
                Google Search Trends for “Buy with Crypto” shows that interest
                in spending crypto has skyrocketed
              </Text>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
