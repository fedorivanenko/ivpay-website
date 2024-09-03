import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { ProductCard } from "@/components/elements/product-card";
import { ScrollStackedCard } from "@/components/motion/scroll-stacked-cards";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";


//TODO: Make a data-provider for Product.
//TODO: Conneсt data-provider with a menu object
export default function OurProductsBlock() {
  return (
    <section id="our-products-block" className="bg-blue-94 py-40">
      <MotionTriggerWrapper>
      <Container className="relative flex flex-col gap-4">
        <Heading
          as="h2"
          size="64"
          className="mb-0 ml-auto mr-3 max-w-[18ch] text-right sm:mb-5 sm:mr-6"
        >
          Our powerful tools
        </Heading>
        <ScrollStackedCard backgroundColor="bg-blue-94">
          <ProductCard
            badge="Crypto POS"
            heading="Everything you need to accept crypto"
            content="Our Crypto POS machine makes crypto payments accessible for any business."
            cta="Explore POS"
          />
          <ProductCard
            badge="Mobile App"
            heading="Put portable crypto PoS machine in your pocket."
            content="Download a simple and user-friendly app to accept payments in more than 40 cryptocurrencies."
            cta="Explore Mobile App"
          />
          <ProductCard
            badge="E-commerce"
            heading="Create fast and effective crypto e-commerce."
            content="Integrate cryptocurrency payment options seamlessly into your online business with just a few clicks."
            cta="Check Integrations"
          />
          <ProductCard
            badge="Vending Machine"
            heading="Increase sales with smart vending machine."
            content="More than 100 million people want to use crypto assets for daily expenses and purchases, but there was no universal solution for this."
            cta="See Options"
          />
          <ProductCard
            badge="API"
            heading="Integrate crypto payments where you need it."
            content="REST API integration will cover every need of your business."
            cta="Explore API"
          />
        </ScrollStackedCard>
      </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
