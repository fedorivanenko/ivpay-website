"use client";

import { useMediaQuery } from "@/lib/use-media-querry";
import * as React from "react";
import { cn } from "@/lib/utils";

import { Container, containerClassName } from "@/components/layouts/container";
import { MenuDesktop, MenuMobile } from "@/components/elements/menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/elements/logo";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);
  const isMobileQuery = useMediaQuery("(min-width: 768px)");

  React.useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  //TODO: swith MobileMenu / DesktopMenu to dynamic() ???
  //TODO: remove white bg on header and add white bg under the desktopMenu
  //TODO: fix the mobile menu button position 
  //TODO: place logo inside the header
  return (
    <header
      ref={forwardRef}
      {...props}
      className={cn("top-0 z-50 py-4 sm:sticky", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-background/70 backdrop-blur"
      />
      <Container className="flex-row justify-between">
        <span className="lg:w-40 inline-flex h-6 mt-4 sm:mt-0 items-center"><Logo/></span>
        {isMobile === true ? (
          <>
            <MenuDesktop />
            <div className="flex w-40 space-x-2">
              <Link href="/">
                <Button size="sm" variant="white">
                  Log In
                </Button>
              </Link>
              <Button size="sm">Sign Up</Button>
            </div>
          </>
        ) : isMobile === false ? (
          <MenuMobile />
        ) : null}
      </Container>
    </header>
  );
});
Header.displayName = "Header";

export { Header };
