/* http://cryptoicons.co/ */

//TODO: call the fs and to all other things automaticly

import BTCicon from "@/resources/currencies/btc.svg";
import ETHicon from "@/resources/currencies/eth.svg";
import EURicon from "@/resources/currencies/eur.svg";
import USDTicon from "@/resources/currencies/usdt.svg";

export const coinData: CoinType[] = [
    { 
      code: "eth", 
      displayCode: "Etherium", 
      icon: ETHicon 
    },
    { 
      code: "btc",
      displayName: "Bitcoin",
      icon: BTCicon 
    },
    { 
      code: "eur", 
      displayName: "Euro", 
      icon: EURicon 
    },
    { 
      code: "usdt", 
      displayCode: "ERC-20, TRC-20, BEP-20, Polygon, OKC", 
      icon: USDTicon 
    },
    { 
      code: "usdt", 
      displayName: "The open network", 
      displayCode: "ERC-20, TRC-20, BEP-20, Polygon, OKC", 
      icon: USDTicon 
    }
  ] as const;

export type CoinType = React.HTMLAttributes<HTMLDivElement> & {
    code: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>
    displayName?: string;
    displayCode?: string;
  };