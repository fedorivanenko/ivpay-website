/* http://cryptoicons.co/ */

import BTCicon from "@/resources/currencies/btc.svg";
import ETHicon from "@/resources/currencies/eth.svg";
import EURicon from "@/resources/currencies/eur.svg";
import USDTicon from "@/resources/currencies/usdt.svg";

//TODO: Create a separate type for codes like in socials-provide.ts
export const coinData: CoinType[] = [
  {
    code: "btc",
    displayName: "Bitcoin",
    icon: BTCicon,
  },
  {
    code: "eth",
    displayCode: "Ethereum",
    icon: ETHicon,
  },
  {
    code: "eur",
    displayName: "Euro",
    icon: EURicon,
  },
  {
    code: "usdt",
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
