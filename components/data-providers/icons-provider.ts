//https://feathericons.com/
// !!! stroke:2px -> stroke:1.6px
import ArrowUpRight from '@/resources/icons/arrow-up-right.svg'
import CheckCircle from '@/resources/icons/check-circle.svg'
import ChevronDown from '@/resources/icons/chevron-down.svg'
import Close from '@/resources/icons/close.svg'
import Contactless from '@/resources/icons/contactless.svg'
import Download from '@/resources/icons/download.svg'
import FastForward from '@/resources/icons/fast-forward.svg'
import LogIn from "@/resources/icons/log-in.svg"
import Menu from '@/resources/icons/menu.svg'
import Percent from '@/resources/icons/percent.svg'
import Play from '@/resources/icons/play.svg'
import Smartphone from '@/resources/icons/smartphone.svg'
import Wifi from '@/resources/icons/wifi.svg'
import XCicrcle from '@/resources/icons/x-circle.svg'


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
    ArrowUpRight: ArrowUpRight,
    CheckCircle: CheckCircle,
    ChevronDown: ChevronDown,
    Close: Close,
    Contactless: Contactless,
    Download: Download,
    FastForward: FastForward,
    LogIn: LogIn,
    Menu: Menu,
    Percent: Percent,
    Play: Play,
    Smartphone: Smartphone,
    Wifi: Wifi,
    XCicrcle: XCicrcle,
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
