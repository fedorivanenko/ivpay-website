import * as React from "react";
import { LinkType } from "@/components/ui/link";
import { cn } from "@/lib/utils";

/**!!!! THIS IS NEXTJS NOT CUSTOM LINK */
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
} from "../ui/drawer";
import { Icon } from "./icon";
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

export type MenuItemType = {
  id: string;
  label: string;
  description?: string;
  order: number;
} & LinkType;

export type MenuHeaderType = MenuItemType & { children?: MenuItemType[] };

export type MenuType = MenuHeaderType[];

//TODO: Move menu structure to data-provider
export const menu: MenuType = [
  {
    id: "products",
    label: "Products",
    order: 1,
    children: [
      {
        id: "pos",
        label: "Terminal POS",
        url: "/pos",
        order: 1,
        description: "Everything you need to start accepting crypto payments",
      },
      { id: "app", label: "Mobile App POS", url: "/app", order: 2 },
      { id: "invoicing", label: "Invoicing", url: "/invoicing", order: 3 },
      { id: "vending", label: "Vending Machine", url: "/vending", order: 4 },
      {
        id: "e-commerce",
        label: "E-Commerce plugin",
        url: "/e_commerce",
        order: 5,
      },
      { id: "api", label: "API", url: "/api", order: 6 },
    ],
  },
  {
    id: "use_cases",
    label: "Use Cases",
    order: 2,
    children: [
      { id: "digital", label: "Digital", url: "/", order: 1 },
      { id: "e_commerce", label: "E-Commerce Stores", url: "/", order: 2 },
      { id: "freelancers", label: "Freelancers", url: "/", order: 3 },
      { id: "restaraunts", label: "Restaraunts", url: "/pos", order: 4 },
      { id: "retail", label: "Retail stores", url: "/pos", order: 5 },
    ],
  },
  {
    id: "company",
    label: "Company",
    order: 3,
    children: [
      { id: "about", label: "About us", url: "/", order: 1 },
      { id: "investors", label: "Investors", url: "/", order: 2 },
      { id: "press", label: "Press", url: "/", order: 3 },
      { id: "privacy", label: "Privacy policy", url: "/", order: 4 },
      { id: "terms", label: "Terms of use", url: "/", order: 5 },
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
        url: "https://calendly.com",
        order: 1,
      },
      { id: "developers", label: "Developers", url: "/", order: 2 },
      { id: "faq", label: "FAQ", url: "/", order: 3 },
      { id: "support", label: "Support", url: "/", order: 4 },
      { id: "contact", label: "Contact us", url: "/", order: 5 },
    ],
  },
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
        "relative w-48 rounded-[8px] p-4 pt-2.5 text-sm transition hover:bg-secondary/70",
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
    <NavigationMenu className={className} ref={forwardedRef} {...props}>
      <NavigationMenuList>
        {menuProp
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((menuHeader: MenuHeaderType) => (
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
                        .map((menuItem: MenuItemType) => (
                          <Link href={menuItem.url || "/"} key={menuItem.id}>
                            <MenuDesktopItem>
                              {/* TODO: Fix fonts weights */}
                              <p className="font-bold">{menuItem.label}</p>
                              {menuItem.description &&
                              <p className="mt-1 text-xs text-foreground/80">
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
        "relative w-full rounded-[8px] py-2 px-4 text-sm transition hover:bg-secondary/70",
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
        className={cn("fixed right-6 top-6 z-50", className)}
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
              <DrawerClose
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "mt-2 mr-2 ml-auto",
                )}
              >
                <Icon icon="Close" />
              </DrawerClose>
              <ScrollArea className="flex-1">
              <Accordion type="single" collapsible defaultValue={menuProp.find((menuHeader) => menuHeader.order === 1)?.id}>
                {menuProp
                  .slice()
                  .sort((a, b) => a.order - b.order)
                  .map((menuHeader) => (
                    <AccordionItem value={menuHeader.id} key={menuHeader.id}>
                      <AccordionTrigger>{menuHeader.label}</AccordionTrigger>
                      <AccordionContent>
                        {menuHeader.children && !menuHeader.url ? (
                          /* TODO: Make menu.tsx easy to read */
                          /** Menu Items */
                          <ul className="flex flex-col space-y-1">
                            {menuHeader.children
                              .slice()
                              .sort((a, b) => a.order - b.order)
                              .map((menuItem) => (
                                /* TODO: FIX @Next/Link and CustomLink  */
                                <Link
                                  key={menuItem.id}
                                  href={menuItem.url ? menuItem.url : "/"}
                                >
                                  <MenuMobileItem>
                                  <p className="font-bold">{menuItem.label}</p>
                              {menuItem.description &&
                              <p className="mt-1 text-xs text-foreground/80 max-w-[24ch]">
                                {menuItem.description}
                              </p>}
                                  </MenuMobileItem>
                                </Link>
                              ))}
                          </ul>
                        ) : null}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
              </ScrollArea>
              {/** LOGIN / LOGOUT */}
              <div className="mx-auto flex w-full flex-col space-y-4 pb-12 p-8 mt-auto">
                <Link
                  href="/"
                  className="w-full"
                  /**!!!! THIS IS NEXTJS NOT CUSTOM LINK */
                >
                  <Button className="w-full" variant="white" size="lg">
                    Log In
                  </Button>
                </Link>
                <Link
                  href="/"
                  className="w-full"
                  /**!!!! THIS IS NEXTJS NOT CUSTOM LINK */
                >
                  <Button className="w-full" size="lg">
                    Sign Up
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