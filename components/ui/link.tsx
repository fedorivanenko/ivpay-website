import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "@/components/elements/icon";

import { IncomingMessage } from 'http';
import { NextApiRequest } from 'next';
import { parse } from 'url';

const isInternalLink = (link: string, req?: IncomingMessage | NextApiRequest): boolean => {
  try {
    const currentHost = req ? req.headers.host : null;
    const parsedLink = parse(link);
    
    // If the link doesn't have a hostname, it's internal
    if (!parsedLink.hostname) {
      return true;
    }

    // Compare the hostnames
    return parsedLink.hostname === currentHost;
  } catch (e) {
    console.error("Error parsing URL:", e);
    return false;
  }
};

export type LinkType = {
  url?: string;
  disable?: boolean;
};

type LinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  LinkType & {
    children: React.ReactNode;
  } & VariantProps<typeof InlineLinkVariants>;

const InlineLinkVariants = cva("group relative", {
  variants: {
    variant: {
      default: "",
      disable: "pointer-events-none text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/**
 * @param url string;
 * @param disable boolean;
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { url = "", disable = true, children, className, ...props },
    forwardRef,
  ) => {
    const variant = disable ? "default" : "disable";

    const isCurrentInternalLink = isInternalLink(url)

    return (
      <a
        href={disable ? url : undefined}
        target={isCurrentInternalLink? "_self" : "_blank"}
        aria-disabled={!disable}
        ref={forwardRef}
        {...props}
        className={cn(InlineLinkVariants({ variant, className }))}
      >
            {children}
            {isCurrentInternalLink ? null : (
              <Icon icon="ArrowUpRight" className="origin-top-right h-4 w-4 lg:h-4 lg:w-4 scale-90" />
            )}
            {disable ? (
            <span className="absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full w-0"/>
            ) : null}
      </a>
    );
  },
);
Link.displayName = "Link";

export { Link };