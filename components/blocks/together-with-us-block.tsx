import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

import { CircleFlag } from "react-circle-flags";

export default function TogetherWithUsBlock() {
  return (
    <section id="together-with-us-block" className="bg-background py-20">
      <Container>
        <div className="mx-2 mb-2 w-full sm:mx-7.5 sm:mb-5 xl:mx-10">
          <Heading as="h2" size="64" className="mb-2 sm:mb-4">
            Together with Us
          </Heading>
          <Text size="32" className="max-w-[40ch]">
            IVPAY already operates in more than 400 locations in Great Britain,
            India, Germany, Spain, Portugal, and Brazil. More countries will
            come in 2025.
          </Text>
        </div>
        <div className="relative flex aspect-3/4 w-full flex-col items-center py-8 sm:aspect-square">
          <div className="aspect-square w-3/4 rounded-full bg-blue-500 gradient-mask-b-[rgba(0,0,0,1.0)_20%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.5)_70%,rgba(0,0,0,0.2)_100%] sm:w-2/3" />
          <div className="absolute bottom-10 flex flex-col items-center gap-2 sm:gap-4">
            <Text className="max-w-[8ch] text-center text-2xl capitalize leading-tighten sm:text-4xl xl:text-6xl">
              Become the part of IVPAY
            </Text>
            <Button size="lg">Get started</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

{
  /* 

            <Text size="32" className="max-w-[40ch]">
            IVPAY already operates in more than 400 locations in 
            <span className="inline-flex items-baseline whitespace-nowrap mx-1"><CircleFlag countryCode='gb' className="h-[1em] translate-y-[0.15em] mr-1 aspect-square inline-block" />Great Britain,</span>
            <span className="inline-flex items-baseline whitespace-nowrap mr-1"><CircleFlag countryCode='in' className="h-[1em] translate-y-[0.15em] mr-1 aspect-square inline-block" />India,</span>
            <span className="inline-flex items-baseline whitespace-nowrap mr-1"><CircleFlag countryCode='de' className="h-[1em] translate-y-[0.15em] mr-1 aspect-square inline-block" />Germany,</span>
            <span className="inline-flex items-baseline whitespace-nowrap mr-1"><CircleFlag countryCode='es' className="h-[1em] translate-y-[0.15em] mr-1 aspect-square inline-block" />Spain,</span>
            <span className="inline-flex items-baseline whitespace-nowrap mr-1"><CircleFlag countryCode='pt' className="h-[1em] translate-y-[0.15em] mr-1 aspect-square inline-block" />Portugal,</span>
            and
            <span className="inline-flex items-baseline whitespace-nowrap mr-1"><CircleFlag countryCode='br' className="h-[1em] translate-y-[0.15em] mr-1 aspect-square inline-block" />Brazil.</span> 
             <br/>More countries will come in 2025.
          </Text>

*/
}
