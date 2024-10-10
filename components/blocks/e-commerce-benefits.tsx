import { Container } from "@/components/layouts/container";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Heading } from "@/components/ui/heading";
import { HorizontalScroll } from "@/components/motion/horizontal-scroll";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/elements/icon";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function ECommerceBenefitsBlock() {
  return (
    <section
      id="e-commerce-benefits-block"
      className="overflow-hidden bg-blue-94 py-20"
    >
      <MotionTriggerWrapper>
        <Container>
          <Heading
            as="h2"
            size="64"
            className="mb-5 ml-auto mr-3 max-w-[12ch] text-right sm:mr-6 sm:max-w-none lg:mb-8"
          >
            Ready for your online store
          </Heading>
          <Card>
            <div className="flex items-center p-5 sm:p-7.5 xl:p-10 gap-4">
              <div
                aria-hidden
                className="box-border text-2xl flex aspect-square w-9 items-center justify-center rounded-sm sm:rounded-md border border-background/50 bg-accent p-2 text-background shadow-xl shadow-accent/30 sm:w-12"
              >
                <Icon icon="Woo" />
              </div>
              <Heading as="h2" size="32">
                WooCommerce
              </Heading>
              <Button
                  asChild
                  variant={"default"}
                  className="ml-auto max-w-min whitespace-nowrap"
                >
                  <Link href="https://wordpress.org/plugins/ivpay-payments/">
                    Download <Icon icon="Download" />
                  </Link>
                </Button>
            </div>
            <Separator decorative orientation="horizontal" />
            <div className="flex items-center p-5 sm:p-7.5 xl:p-10 gap-4">
              <div
                aria-hidden
                className="box-border text-2xl flex aspect-square w-9 items-center justify-center rounded-sm sm:rounded-md border border-background/50 bg-accent p-2 text-background shadow-xl shadow-accent/30 sm:w-12"
              >
                <Icon icon="OpenCart" />
              </div>
              <Heading as="h2" size="32">
                OpenCart
              </Heading>
              <Button
                  asChild
                  variant={"default"}
                  
                  className="ml-auto max-w-min whitespace-nowrap"
                >
                  <Link href="https://www.opencart.com/index.php?route=marketplace/extension&filter_search=ivpay">
                    Download <Icon icon="Download" />
                  </Link>
                </Button>
            </div>
            <Separator decorative orientation="horizontal" />
            <div className="flex items-center p-5 sm:p-7.5 xl:p-10 gap-4">
              <div
                aria-hidden
                className="box-border text-2xl  flex aspect-square w-9 items-center justify-center rounded-sm sm:rounded-md border border-background/50 bg-accent p-2 text-background shadow-xl shadow-accent/30 sm:w-12"
              >
                <Icon icon="PrestaShop" />
              </div>
              <Heading as="h2" size="32">
                PrestaShop
              </Heading>
              <Button
                  variant={"disabled"}
                  
                  className="ml-auto max-w-min whitespace-nowrap"
                >
                    Coming Soon
                </Button>
            </div>
            <Separator decorative orientation="horizontal" />
            <div className="flex items-center p-5 sm:p-7.5 xl:p-10 gap-4">
              <div
                aria-hidden
                className="box-border text-2xl  flex aspect-square w-9 items-center justify-center rounded-sm sm:rounded-md border border-background/50 bg-accent p-2 text-background shadow-xl shadow-accent/30 sm:w-12"
              >
                <Icon icon="Shopify" />
              </div>
              <Heading as="h2" size="32">
                Shopify
              </Heading>
              <Button
                  variant={"disabled"}
                  
                  className="ml-auto max-w-min whitespace-nowrap"
                >
                    Coming Soon
                </Button>
            </div>
          </Card>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
