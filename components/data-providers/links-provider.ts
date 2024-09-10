//!!!//TODO: This should be inside of menu-provider, cause EVERY link in the website should be presented in nav menu or footer menu

import type { LinkType } from "../ui/link";

type LinkProviderType = [
    {
        id: string,
        link: LinkType
    }
]

export type LinkIDs = typeof linkProvider[number]['id'];

export function getLinkByID(id: LinkIDs): string | null {
    const foundLink = linkProvider.find(link => link.id === id)?.link;
    return foundLink ? foundLink.url as string : null;
}

export const linkProvider = [
    { id: "IVPAY_LOGIN_URL", link: { url: "/" } },
] as const satisfies LinkProviderType