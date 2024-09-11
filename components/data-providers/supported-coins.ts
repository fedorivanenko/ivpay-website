/* http://cryptoicons.co/ */

import BTCicon from "@/resources/currencies/btc.svg";
import ETHicon from "@/resources/currencies/eth.svg";
import EURicon from "@/resources/currencies/eur.svg";
import USDTicon from "@/resources/currencies/usdt.svg";

//TODO: Create a separate type for codes like in socials-provide.ts
export const coinData: CoinType[] = [
  {
    code: "btc",
    displayName: "Bitcoin (BTC)",
    displayCode: "BTC - Bitcoin Network",
    icon: BTCicon,
  },
  {
    code: "eth",
    displayName: "Ethereum (ETH)",
    displayCode: "ETH - Ethereum Network",
    icon: ETHicon,
  },
  {
    code: "eur",
    displayName: "Euro (EUR)",
    displayCode: "SEPA Bank transfers",
    icon: EURicon,
  },
  {
    code: "usdt",
    displayName: "Tether (USDT)",
    displayCode: "ERC-20, TRC-20, BEP-20, Polygon, OKC",
    icon: USDTicon,
  }
] as const;

export type CoinType = React.HTMLAttributes<HTMLDivElement> & {
  code: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  displayName?: string;
  displayCode?: string;
};
