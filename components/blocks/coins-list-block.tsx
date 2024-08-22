import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { TicTacToeGridLayout } from "../layouts/tic-tac-toe-grid-layout";
import { Button } from "@/components/ui/button";

import { CoinItem } from "../elements/coin-item";
import { coinData } from "../data-providers/supported-coins";

export default function CoinsListBlock() {
  return (
    <section id="coins-list-block" className="py-20">
      <Container>
        <Heading
          as="h2"
          size="64"
          className="mb-2 max-w-[12ch] sm:mb-4 sm:max-w-[18ch]"
        >
          Accept and withdraw funds in your preferred currency.
        </Heading>
        <Text size="32" className="col-span-1 max-w-[40ch] sm:col-span-2">
          We support 40+ cryptocurrencies and are constantly adding more.
        </Text>
        <Button
          className="my-4 max-w-min sm:absolute sm:right-0 sm:top-0 sm:my-0 sm:mt-2"
          size="lg"
        >
          Become a partner
        </Button>
        <TicTacToeGridLayout animated={false} className="my-4 max-w-screen-lg">
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
    </section>
  );
}
