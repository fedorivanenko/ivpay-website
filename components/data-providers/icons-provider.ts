//https://feathericons.com/
// !!! stroke:2px -> stroke:1.6px
import LogIn from "@/resources/icons/log-in.svg"
import ArrowUpRight from '@/resources/icons/arrow-up-right.svg'
import ChevronDown from '@/resources/icons/chevron-down.svg'
import Menu from '@/resources/icons/menu.svg'
import Close from '@/resources/icons/close.svg'
import Play from '@/resources/icons/play.svg'
import Download from '@/resources/icons/download.svg'
import XCicrcle from '@/resources/icons/x-circle.svg'
import CheckCircle from '@/resources/icons/check-circle.svg'
import Wifi from '@/resources/icons/wifi.svg'


//brands
import Woo from '@/resources/brands/woo.svg'
import PrestaShop from "@/resources/brands/prestashop.svg"
import Shopify from '@/resources/brands/shopify.svg'
import Opencart from '@/resources/brands/opencart.svg'
import WorldLine from '@/resources/brands/worldline.svg'
import Ivenda from '@/resources/brands/ivenda.svg'

import Binance from '@/resources/brands/binance.svg'
import OKX from '@/resources/brands/OKX.svg'
import GateIo from '@/resources/brands/gateio.svg'

export type IconType = {
    icon: keyof typeof IconList;
}

export const IconList = {
    LogIn: LogIn,
    ArrowUpRight: ArrowUpRight,
    ChevronDown: ChevronDown,
    Menu: Menu,
    Close: Close,
    Play: Play,
    Download: Download,
    XCicrcle: XCicrcle,
    CheckCircle: CheckCircle,
    Wifi: Wifi,
    //Brands
    Woo: Woo,
    PrestaShop: PrestaShop,
    Shopify: Shopify,
    Opencart: Opencart,
    WorldLine: WorldLine,
    Ivenda: Ivenda,
    Binance: Binance,
    OKX: OKX,
    GateIo: GateIo,
};
