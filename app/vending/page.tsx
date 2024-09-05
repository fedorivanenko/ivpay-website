import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";
import VendingHeroBlock from "@/components/blocks/vending-hero-block";
import VendingPartnersBlock from "@/components/blocks/vending-partners-block";
import VendingVideoBlock from "@/components/blocks/vending-video-block";

export default function VendingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <VendingHeroBlock />
      <VendingPartnersBlock/>
      <VendingVideoBlock />
      <ReapTheBenefitsBlock className="bg-soft-gradient-reverse" />
    </main>
  );
}
