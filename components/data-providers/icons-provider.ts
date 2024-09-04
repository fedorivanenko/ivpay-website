//https://feathericons.com/

import LogIn from "@/resources/icons/log-in.svg"
import ArrowUpRight from '@/resources/icons/arrow-up-right.svg'
import ChevronDown from '@/resources/icons/chevron-down.svg'
import Menu from '@/resources/icons/menu.svg'
import Close from '@/resources/icons/close.svg'
import Play from '@/resources/icons/play.svg'


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
};
