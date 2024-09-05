import * as React from "react";

import { cn } from "@/lib/utils";

import { Container, containerClassName } from "@/components/layouts/container";
import { SubscriptionForm } from "@/components/elements/subscription-form";
import { menu, MenuItemType, MenuType } from "@/components/elements/menu";

import { SocialIconList } from "@/components/elements/social-icon";
import {
  socialNames,
  SocialNamesType,
} from "@/components/data-providers/socials-provider";

import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { staggerChildren } from "@/components/motion/motion_utils";

import { Separator } from "@/components/ui/separator";
import { Link } from "@/components/ui/link";
import { Logo } from "@/components/elements/logo";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

export type FooterProp = React.HTMLAttributes<HTMLDivElement> & {
  footerProp?: FooterType;
};

type FooterType = {
  footerMenu: MenuType;
  address: string;
  socials: SocialNamesType;
};

const footer = {
  footerMenu: menu,
  address: "Av. Duque de Loulé 12, 1050-093 Lisbon",
  socials: socialNames,
};

type FooterMenuType = React.HTMLAttributes<HTMLUListElement> & {
  footerMenuProp: MenuType;
};

//TODO: Move it to Menu component
const FooterMenu = React.forwardRef<HTMLUListElement, FooterMenuType>(
  ({ className, footerMenuProp, ...props }, forwardRef) => {
    return (
      <MotionWrapper variants={staggerChildren}>
        <ul
          ref={forwardRef}
          {...props}
          className={cn(
            "flex flex-col space-y-7.5 capitalize lg:flex-row lg:space-x-20 lg:space-y-0",
            className,
          )}
        >
          {footerMenuProp
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((menuHeader) => (
              /** Menu Header */
              <MotionWrapper key={menuHeader.id}>
                <li className="text-sm">
                  {menuHeader.url ? (
                    <Link url={menuHeader.url} disable={menuHeader.disable}>
                      {menuHeader.label}
                    </Link>
                  ) : (
                    <p className="uppercase">{menuHeader.label}</p>
                  )}
                  {menuHeader.children && !menuHeader.url ? (
                    /** Menu Items */
                    <ul className="mt-2.5 flex flex-col space-y-1 lg:mt-4 lg:space-y-1.5">
                      {menuHeader.children
                        .slice()
                        .sort((a, b) => a.order - b.order)
                        .map((menuItem) => (
                          <li key={menuItem.id}>
                            <Link url={menuItem.url} disable={menuItem.disable}>
                              {menuItem.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  ) : null}
                </li>
              </MotionWrapper>
            ))}
        </ul>
      </MotionWrapper>
    );
  },
);
FooterMenu.displayName = "FooterMenu";

const Footer = React.forwardRef<HTMLDivElement, FooterProp>(
  ({ footerProp = footer, className, ...props }, forwardedRef) => {
    return (
      <footer ref={forwardedRef} {...props} className={cn("w-full", className)}>
        {/**
        <MotionTriggerWrapper>
         */}
          <Separator decorative orientation="horizontal" />
          <Container className="mx-0 mb-0 grid max-w-none gap-5 px-0 py-7.5 sm:mx-auto sm:grid-cols-3 sm:px-2 lg:mb-20">
            {/** Footer Menu */}
            <FooterMenu
              footerMenuProp={footer.footerMenu}
              className="mx-auto w-full max-w-md px-2 sm:mx-0 sm:max-w-none sm:px-0 lg:col-span-2"
            />
            <Separator
              decorative
              orientation="horizontal"
              className="sm:hidden"
            />
            {/** Form & Scoials */}
            <MotionWrapper
              asDiv
              variants={staggerChildren}
              className="mx-auto flex w-full max-w-md flex-col space-y-2 px-2 sm:col-span-2 sm:mx-0 sm:max-w-none sm:px-0 lg:col-span-1"
            >
              <MotionWrapper asDiv className="flex w-full">
                {/* FORM */}
                <SubscriptionForm />
              </MotionWrapper>
              <MotionWrapper>
                <SocialIconList socialsList={footer.socials} />
              </MotionWrapper>
              <MotionWrapper>
                <p className="pt-2 text-xs text-muted-foreground sm:text-sm lg:pb-5 lg:pt-5">
                  {footerProp.address}
                </p>
              </MotionWrapper>
            </MotionWrapper>
          </Container>
          {/** Logo and Terms */}
          <Separator decorative orientation="horizontal" />
          <MotionWrapper>
            <Container className="relative flex flex-row justify-between py-2.5 text-xs">
              <Logo className="h-4 w-auto"/>
              <p className="text-xs uppercase text-muted-foreground">
                All rights reserved. ivendpay © 2024
              </p>
            </Container>
          </MotionWrapper>
          {/**
        </MotionTriggerWrapper>
           */}
      </footer>
    );
  },
);
Footer.displayName = "Footer";

export { Footer };
