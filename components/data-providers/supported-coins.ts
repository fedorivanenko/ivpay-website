/* http://cryptoicons.co/ */

import BTCicon from "@/resources/currencies/btc.svg";
import ETHicon from "@/resources/currencies/eth.svg";
import EURicon from "@/resources/currencies/eur.svg";
import USDTicon from "@/resources/currencies/usdt.svg";
import BNBicon from '@/resources/currencies/bnb.svg'
import XRPcoin from '@/resources/currencies/xrp.svg'
import TRXicon from '@/resources/currencies/trx.svg'
import TONicon from '@/resources/currencies/ton.svg'

//TODO: Create a separate type for codes like in socials-provide.ts
export const coinData: CoinType[] = [
  {
    code: "btc",
    displayName: "Bitcoin",
    networkName: "Bitcoin network",
    icon: BTCicon,
  },
  {
    code: "bnb",
    displayName: "Binance",
    networkName: "Binance network",
    icon: BNBicon,
  },
  {
    code: "eth",
    displayName: "Ethereum",
    networkName: "Ethereum network",
    icon: ETHicon,
  },
  {
    code: "eur",
    displayName: "Euro",
    networkName: "SEPA Bank transfers",
    icon: EURicon,
  },
  {
    code: "usdt",
    displayName: "Tether",
    networkName: "Ethereum, BSC, Polygon and Arbitrum networks",
    icon: USDTicon,
  },
  {
    code: "xrp",
    displayName: "XRP",
    networkName: "XRP Ledger newtork",
    icon: XRPcoin,
  },
  {
    code: "trx",
    displayName: "TRON",
    networkName: "TRON newtork",
    icon: TRXicon,
  },
  {
    code: "ton",
    displayName: "TON",
    networkName: "The open network",
    icon: TONicon,
  },
] as const;

export type CoinType = React.HTMLAttributes<HTMLDivElement> & {
  code: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  displayName?: string;
  networkName?: string;
};
