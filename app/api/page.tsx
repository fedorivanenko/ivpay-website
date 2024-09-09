import APIBenefitsBlock from "@/components/blocks/api-benefits-block";
import APIHeroBlock from "@/components/blocks/api-hero-block";
import {CTABlock} from "@/components/blocks/cta-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

export default function APIPage() {
    return (
      <main className="flex flex-col min-h-screen">
        <APIHeroBlock/>
        <APIBenefitsBlock/>
        <ReapTheBenefitsBlock/>
        <CTABlock/>
      </main>
    );
  }
  