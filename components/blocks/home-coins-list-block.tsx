import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { TicTacToeGridLayout } from "../layouts/tic-tac-toe-grid-layout";
import { Button } from "@/components/ui/button";

import { CoinItem } from "@/components/elements/coin-item";
import { coinData } from "@/components/data-providers/supported-coins";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";

import Link from "next/link";
import { Icon } from "@/components/elements/icon";

export default function CoinsListBlock() {
  return (
    <section id="coins-list-block" className="bg-soft-gradient-reverse py-20">
      <MotionTriggerWrapper>
        <Container className="bg-white-shadow-gradient">
          <Heading
            as="h2"
            size="64"
            className="mb-2.5 max-w-[12ch] sm:max-w-[18ch] lg:mb-5"
          >
            Accept and withdraw funds in your preferred currency.
          </Heading>
          <Text size="32" className="col-span-1 mb-1.5 sm:col-span-2 lg:mb-2.5">
            Choose your payment options: accept only stablecoins, stick to the
            major cryptocurrencies, or open up to all available options in our
            system.
          </Text>
          <Text size="32" className="col-span-1 mb-2.5 sm:col-span-2 lg:mb-5">
            We support over 40 cryptocurrencies and constantly add new ones.
            {/*
            <span className="whitespace-nowrap">
              &nbsp;{Math.floor(coinData.length / 10) * 10}&nbsp;
            </span>
            */}
          </Text>
            {/*
          <Button
            asChild
            className="order-last my-4 max-w-min px-4 sm:absolute sm:right-0 sm:top-0 sm:my-0 sm:mt-2 lg:pl-5"
            size="lg"
          >
            <Link href="/contact">Suggest a new coin <Icon icon="Plus"/></Link>
          </Button>
             */}
          <TicTacToeGridLayout animated={true} className="my-4 max-w-screen-lg">
            {coinData.map((item, index) => (
              <CoinItem
                key={index}
                code={item.code}
                networkName={item.networkName}
                displayName={item.displayName}
              />
            ))}
          </TicTacToeGridLayout>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
