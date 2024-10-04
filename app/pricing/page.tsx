import PricingHeroBlock from "@/components/blocks/pricing-hero-block";
import PricingListBlock from "@/components/blocks/pricing-list-block";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVPAY | Pricing",
  description:
    "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
    openGraph: {
      title: "IVPAY | Pricing",
      description:
       "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
      type: "website",
      url: "https://ivpay.io/pricing",
    },
    twitter: {
      card: 'summary_large_image',
    },
  };

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col mt-20">
      <PricingHeroBlock />
      <PricingListBlock />
    </main>
  );
}
