import APIBenefitsBlock from "@/components/blocks/api-benefits-block";
import APIHeroBlock from "@/components/blocks/api-hero-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

export default function APIPage() {
    return (
      <main className="flex flex-col min-h-screen">
        <APIHeroBlock/>
        <APIBenefitsBlock/>
        <ReapTheBenefitsBlock className="bg-soft-gradient-reverse"/>
      </main>
    );
  }
  