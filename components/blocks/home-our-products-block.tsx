import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { ProductCard } from "@/components/elements/product-card";
import { ScrollStackedCard } from "@/components/motion/scroll-stacked-cards";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";

import { productsList } from "@/components/data-providers/products-provider";

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
            {productsList
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((product) => {
                if (
                  //TODO: fix this shit
                  product.label &&
                  product.description &&
                  product.full_description &&
                  product.cta &&
                  product.img &&
                  product.url
                ) {
                  return (
                    <ProductCard
                      badge={product.label}
                      heading={product.description}
                      content={product.full_description}
                      cta={product.cta}
                      key={product.id}
                      link={product.url}
                      img={product.img}
                    />
                  );
                }
                throw new Error("Product "+ product.label +" has not full description");
              })}
          </ScrollStackedCard>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
