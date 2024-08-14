import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function HomeHeroBlock() {
  return (
    <section id="home-hero-block">
      <Container>
        <div className="sm:aspect-16/9 relative overflow-hidden my-3 flex aspect-3/4 w-full flex-col items-center justify-between rounded-lg bg-blue-94 p-5 sm:rounded-xl xl:my-8 xl:rounded-2xl xl:p-10">
          <Heading
            as="h1"
            size="72"
            className="z-10 mx-auto flex h-1/3 max-w-[16ch] flex-col justify-center text-center"
          >
            A simple way to start accepting crypto in your business.
          </Heading>
          <div className="absolute bottom-0 -z-0 h-2/3 gradient-mask-b-[rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.2)_85%]">
            <div className="aspect-square h-full bg-slate-400">
              Two POS machine image
            </div>
          </div>
          <div className="z-10 flex w-full justify-between sticky bottom-0">
            <Button size="lg" variant="white">
              Contact Sales
            </Button>
            <Button size="lg" variant="default">
              Get Started
            </Button>
          </div>
        </div>
        <Text size="32" className="mx-3 max-w-screen-md sm:mx-6">
          Our streamlined process makes it simple and hassle-free to get
          started. Say goodbye to complex setups and hello to the world of
          crypto with ease.
        </Text>
      </Container>
    </section>
  );
}
