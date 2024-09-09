// https://simpleicons.org/
// https://nucleoapp.com/free-icons

import YouTubeIcon from '@/resources/social-icons/youtube.svg'
import XIcon from '@/resources/social-icons/x.svg'
import TelegramIcon from '@/resources/social-icons/telegram.svg'
import MediumIcon from '@/resources/social-icons/medium.svg'
import LinkedInIcon from '@/resources/social-icons/linkedin.svg'
import InstagramIcon from '@/resources/social-icons/instagram.svg'

export type SocialNamesType = typeof socialsList[number]['name'];

export type SocialType = {
    name: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    link: string,
}

export const socialsList = [
    { name: 'YouTube' as const, icon: YouTubeIcon, link: "https://www.youtube.com/@ivendpay_company" },
    { name: 'X' as const, icon: XIcon, link: "https://x.com/ivendpay" },
    { name: 'Telegram' as const, icon: TelegramIcon, link: "https://web.telegram.org/" },
    { name: 'Medium' as const, icon: MediumIcon, link: "https://medium.com/@ivendPay" },
    { name: 'LinkedIn' as const, icon: LinkedInIcon, link: "https://www.linkedin.com/company/ivendpay/" },
    { name: 'Instagram' as const, icon: InstagramIcon, link: "https://www.instagram.com/ivendpay_company/" },
] as const;

export const socialNames : SocialNamesType[] = socialsList.map(social => social.name);

export function getSocialByName(name: SocialNamesType): SocialType | undefined {
    return socialsList.find(social => social.name === name);
}