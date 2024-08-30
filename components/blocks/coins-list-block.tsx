import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { TicTacToeGridLayout } from "../layouts/tic-tac-toe-grid-layout";
import { Button } from "@/components/ui/button";

import { CoinItem } from "@/components/elements/coin-item";
import { coinData } from "@/components/data-providers/supported-coins";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";

export default function CoinsListBlock() {
  return (
    <section id="coins-list-block" className="bg-soft-gradient py-20">
      <MotionTriggerWrapper>
        <Container className="bg-white-shadow-gradient">
          <Heading
            as="h2"
            size="64"
            className="mb-2.5 max-w-[12ch] sm:max-w-[18ch] lg:mb-5"
          >
            Accept and withdraw funds in your preferred currency.
          </Heading>
          <Text
            size="32"
            className="col-span-1 mb-2.5 max-w-[26ch] sm:col-span-2 lg:mb-5"
          >
            We support over
            <span className="whitespace-nowrap">
              &nbsp;{Math.floor(coinData.length / 10) * 10}&nbsp;
            </span>
            cryptocurrencies and constantly add new ones.
          </Text>
          <Button
            className="order-last my-4 max-w-min pl-4 sm:absolute sm:right-0 sm:top-0 sm:my-0 sm:mt-2 lg:pl-5"
            size="lg"
          >
            Become a partner
          </Button>
          <TicTacToeGridLayout animated={true} className="my-4 max-w-screen-lg">
            {coinData.map((item, index) => (
              <CoinItem
                key={index}
                code={item.code}
                displayCode={item.displayCode}
                displayName={item.displayName}
              />
            ))}
          </TicTacToeGridLayout>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
