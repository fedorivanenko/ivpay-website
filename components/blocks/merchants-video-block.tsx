import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";

export default function MerchantVideoBlock() {
  return (
    <section id="merchant-video-block" className="bg-blue-94 py-20 sm:py-40">
      <Container>
        <div className="flex flex-1 flex-col rounded-lg bg-blue-600 sm:rounded-2xl max-w-[60rem] mx-auto">
          <Heading as="h2" size="64" className="p-5 text-background sm:p-10 max-w-[18ch]">
          40+ Merchants use IVPAY every day
          </Heading>
          <div className="w-full aspect-video rounded-lg sm:rounded-2xl bg-slate-400">
            video
          </div>
        </div>
      </Container>
    </section>
  );
}
