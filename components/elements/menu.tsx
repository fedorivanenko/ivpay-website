import * as React from "react";
import { LinkType } from "@/components/ui/link";
import { cn } from "@/lib/utils";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Icon } from "@/components/elements/icon";
import { Button, buttonVariants } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "../ui/scroll-area";

type MenuProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> & {
  menuProp?: MenuType;
};

export type Benefit = {
  id: string;
  icon: IconType["icon"];
  label: string;
  description: string;
};

//TODO: Add a Product Type
export type MenuItemType = {
  id: string;
  label: string;
  order: number;
  description?: string;
  full_description?: string;
  cta?: string;
  img?: {src: string} 
  benefits?: Benefit[],
  only?: "footerOnly" | "menuOnly"
} & LinkType;

export type MenuHeaderType = MenuItemType & { children?: MenuItemType[] };

export type MenuType = MenuHeaderType[];

import { productsList } from "@/components/data-providers/products-provider";
import { IconType } from "@/components/data-providers/icons-provider";
import { Separator } from "../ui/separator";
import { Logo } from "./logo";

//TODO: Move menu structure to data-provider
export const menu: MenuType = [
  {
    id: "products",
    label: "Products",
    order: 1,
    children: [...productsList],
  },
  /** 
   * 
  {
    id: "use_cases",
    label: "Use Cases",
    order: 2,
    children: [
      //TODO: add description
      { id: "digital", label: "Digital Nomads", url: "/", order: 1 },
      { id: "e_commerce", label: "E-Commerce Stores", url: "/", order: 2 },
      { id: "freelancers", label: "Freelancers", url: "/", order: 3 },
      { id: "restaraunts", label: "Restaurants", url: "/", order: 4 },
      { id: "retail", label: "Retail stores", url: "/", order: 5 },
    ],
  },
  */
  {
    id: "company",
    label: "Company",
    order: 3,
    children: [
      {
        id: "about",
        label: "About us",
        description: "See our mission and our team",
        url: "/about",
        order: 1,
      },
      { id: "ecosystem", label: "Ecosystem", url: "/ecosystem", description:"We're all changing the new era of cryptopayments", order: 2 },
      //{ id: "press", label: "Press", url: "/", order: 3 },
      { id: "privacy", label: "Privacy policy", url: "/privacy", order: 4 },
      { id: "terms", label: "Terms of use", url: "/terms", order: 5 },
    ],
  },
  {
    id: "help",
    label: "Help",
    order: 4,
    children: [
      {
        id: "demo",
        label: "Schedule a demo",
        url: "https://calendly.com/fredpay",
        description: "Arrange a meeting with our sales team",
        order: 1,
      },
      { id: "developers", label: "Developers", description:"Get details of API and more", url: "https://ivendpay.stoplight.io/docs/ivendpay-api/55671bfa13c1a-ivend-pay-api", order: 2 },
      { id: "faq", label: "FAQ", description: "Frequently asked questions", url: "https://help.ivendpay.com/en/collections/2-getting-started", order: 3 },
      { id: "support", label: "Support", description:"Find answers to your questions", url: "https://help.ivendpay.com/", order: 4 },
      { id: "contact", label: "Contact us", description: "Leave your contact and we will get back to you.", url: "/contact", order: 5 },
    ],
  },
  { id: "pricing", label: "Pricing", order: 5, url: "/pricing", only: 'menuOnly' },
];

const MenuDesktopItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ children, className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      {...props}
      className={cn(
        "relative w-54 rounded-[8px] p-4 pt-2.5 text-sm transition hover:bg-accent hover:shadow-lg hover:shadow-accent/40 hover:text-background",
        className,
      )}
    >
      {children}
    </li>
  );
});
MenuDesktopItem.displayName = "MenuDesktopItem";

const MenuDesktop = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  MenuProps
>(({ menuProp = menu, className, ...props }, forwardedRef) => {
  return (
    <NavigationMenu className={cn(" pointer-events-auto p-2",className)} ref={forwardedRef} {...props}>
      <div aria-hidden className="border border-border bg-background/90 backdrop-blur pointer-events-none absolute inset-0 rounded-sm z-0 shadow-xl shadow-accent/15"/>
      <NavigationMenuList>
        {menuProp
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((menuHeader: MenuHeaderType) => 
            menuHeader.only !== "footerOnly" && (
            <NavigationMenuItem key={menuHeader.id}>
              {menuHeader.children ? (
                <>
                  <NavigationMenuTrigger>
                    {menuHeader.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[640px] grid-cols-3 gap-2 p-3">
                      {menuHeader.children
                        .slice()
                        .sort((a, b) => a.order - b.order)
                        .map((menuItem: MenuItemType) => 
                          menuItem.only !== "footerOnly" && (
                          <Link href={menuItem.url || "/"} key={menuItem.id}>
                            <MenuDesktopItem>
                              <p>{menuItem.label}</p>
                              {menuItem.description &&
                              <p className="mt-1 text-xs opacity-90">
                                {menuItem.description}
                              </p>}
                            </MenuDesktopItem>
                          </Link>
                        ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link
                  /**!!!! THIS IS NEXTJS NOT CUSTOM LINK */
                  href={menuHeader.url ? menuHeader.url : ""}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {menuHeader.label}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
});
MenuDesktop.displayName = "MenuDesktop";

const MenuMobileItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ children, className, ...props }, ref) => {
  return (
    <li
      className={cn(
        "relative w-full rounded-[8px] py-2 pb-2.5 px-4 text-sm hover:bg-accent group hover:shadow-lg hover:shadow-accent/40",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </li>
  );
});
MenuMobileItem.displayName = "MenuMobileItem";

const MenuMobile = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ menuProp = menu, className, ...props }, forwardedRef) => {
  
    return (
      <div
        className={cn("pointer-events-auto", className)}
        ref={forwardedRef}
        {...props}
      >
        <Drawer direction="right">
          <DrawerTrigger
            className={cn(buttonVariants({ variant: "default", size: "icon" }))}
          >
            <Icon icon="Menu" />
          </DrawerTrigger>
          <DrawerContent className="">
            <div className="flex h-full flex-col rounded-sm bg-background">
              <div className="flex">
                <DrawerClose className="ml-5 mt-5 h-6" asChild>
                  <Link href="/">
                    <Logo />
                  </Link>
                </DrawerClose>
                <DrawerClose
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "ml-auto mr-2 mt-2",
                  )}
                >
                  <Icon icon="Close" />
                </DrawerClose>
              </div>
              <ScrollArea className="flex-1">
                {/*TODO: add nav and ul */}
                <Accordion
                  type="single"
                  collapsible
                  // defaultValue={  menuProp.find((menuHeader) => menuHeader.order === 1)?.id}
                >
                  {menuProp
                    .slice()
                    .sort((a, b) => a.order - b.order)
                    .map((menuHeader) =>
                      menuHeader.only !== "footerOnly" && (
                      menuHeader.children && !menuHeader.url ? (
                        <AccordionItem
                          value={menuHeader.id}
                          key={menuHeader.id}
                          className="px-0"
                        >
                          <AccordionTrigger className="px-4 hover:bg-accent hover:text-background hover:shadow-lg hover:shadow-accent/40">
                            {menuHeader.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            {/* Menu Items */}
                            <ul className="flex flex-col space-y-1 px-4">
                              {menuHeader.children
                                .slice()
                                .sort((a, b) => a.order - b.order)
                                .map((menuItem) => 
                                  menuItem.only !== "footerOnly" && (
                                  <DrawerClose asChild key={menuItem.id}>
                                    <Link
                                      href={menuItem.url ? menuItem.url : "/"}
                                    >
                                      <MenuMobileItem>
                                        <p className="group-hover:text-background">
                                          {menuItem.label}
                                        </p>
                                        {menuItem.description && (
                                          <p className="mt-1 max-w-[20ch] text-xs text-foreground/70 group-hover:text-background/80">
                                            {menuItem.description}
                                          </p>
                                        )}
                                      </MenuMobileItem>
                                    </Link>
                                  </DrawerClose>
                                ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <React.Fragment key={menuHeader.id}>
                          <DrawerClose asChild>
                            <Link href={menuHeader.url ? menuHeader.url : "/"}>
                              <li className="group relative w-full list-none p-4 hover:bg-accent hover:shadow-lg hover:shadow-accent/40">
                                <p className="group-hover:text-background">
                                  {menuHeader.label}
                                </p>
                                {menuHeader.description && (
                                  <p className="mt-1 max-w-[20ch] text-xs text-foreground/70 group-hover:text-background/80">
                                    {menuHeader.description}
                                  </p>
                                )}
                              </li>
                            </Link>
                          </DrawerClose>
                          <Separator decorative orientation="horizontal" />
                        </React.Fragment>
                      ))
                    )}
                </Accordion>
              </ScrollArea>
              {/** LOGIN / LOGOUT */}
              <div className="mx-auto mt-auto flex w-full flex-col space-y-4 p-8 pb-12">
                <Link href="/" className="w-full">
                  <Button className="w-full" variant="white" size="lg">
                    Log In
                    <Icon icon="LogIn" />
                  </Button>
                </Link>
                <Link href="/" className="w-full">
                  <Button className="w-full" size="lg">
                    Sign Up
                    <Icon icon="ArrowUpRight" />
                  </Button>
                </Link>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
);
MenuMobile.displayName = "MenuMobile";

export { MenuDesktop, MenuMobile };