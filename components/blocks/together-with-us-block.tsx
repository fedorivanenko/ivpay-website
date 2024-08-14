import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TogetherWithUsBlock() {
  return (
    <section id="together-with-us-block" className="bg-gradient-to-b from-blue-94 to-background py-20">
      <Container>
        <div className="flex flex-1 flex-col rounded-t-lg bg-blue-600 pb-6 sm:rounded-t-2xl sm:pb-12">
          <Heading as="h2" size="64" className="p-5 text-background sm:p-10">
            Together with Us
          </Heading>
        </div>
        <Card className="-mt-6 flex flex-col p-5 sm:-mt-12 sm:aspect-square sm:p-7.5 xl:p-10">
          <div className="mx-2 mb-2 w-full sm:mx-7.5 sm:mb-5 xl:mx-10">
            <Text size="32" className="max-w-[40ch]">
              IVPAY already operates in more than 400 locations in Great
              Britain. India, Germany, Spain, Portugal, and Brazil. More
              countries will come in 2025.
            </Text>
          </div>
          <div className="flex aspect-3/4 w-full flex-col items-center sm:aspect-square relative py-8">
            <div className="aspect-square rounded-full bg-blue-500 gradient-mask-b-[rgba(0,0,0,1.0)_20%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.5)_70%,rgba(0,0,0,0.2)_100%] w-3/4 sm:w-2/3" />
            <div className="flex flex-col items-center gap-2 sm:gap-4 absolute bottom-10">
              <Text className="text-center text-2xl capitalize sm:text-4xl xl:text-6xl leading-tighten">
                Become
                <br />
                the part
                <br />
                of IVPAY
              </Text>
              <Button size='lg'>Get started</Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
