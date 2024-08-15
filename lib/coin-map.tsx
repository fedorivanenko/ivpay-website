import BTCicon from "@/resources/currencies/btc.svg";
import ETHicon from "@/resources/currencies/eth.svg";
import EURicon from "@/resources/currencies/eur.svg";
import USDTicon from "@/resources/currencies/usdt.svg";

export const iconMap = {
  usdt: USDTicon,
  btc: BTCicon,
  eth: ETHicon,
  eur: EURicon,
} as const;

export type IconCode = keyof typeof iconMap;