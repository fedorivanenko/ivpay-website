import PricingHeroBlock from "@/components/blocks/pricing-hero-block";
import PricingListBlock from "@/components/blocks/pricing-list-block";

export default function PricingPage() {
  return(
  <main className="flex min-h-screen flex-col">
    <PricingHeroBlock/>
    <PricingListBlock/>
  </main>)
}
