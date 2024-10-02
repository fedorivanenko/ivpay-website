import {CTABlock} from "@/components/blocks/cta-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";
import VendingHeroBlock from "@/components/blocks/vending-hero-block";
import VendingPartnersBlock from "@/components/blocks/vending-partners-block";
import VendingVideoBlock from "@/components/blocks/vending-video-block";

import { Metadata } from "next";
import { getProduct, productsList } from "@/components/data-providers/products-provider";

const product = getProduct(productsList, "vending");

export const metadata: Metadata = {
  title: "IVPAY | " + product.label,
  description: product.SEOdescription? product.SEOdescription : product.description,
  openGraph: {
    title: "IVPAY | " + product.label,
    description:
      product.SEOdescription? product.SEOdescription : product.description,
    type: "website",
    url: "https://ivpay.io/vending",
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function VendingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <VendingHeroBlock />
      <VendingPartnersBlock/>
      <VendingVideoBlock />
      <ReapTheBenefitsBlock/>
      <CTABlock/>
    </main>
  );
}
