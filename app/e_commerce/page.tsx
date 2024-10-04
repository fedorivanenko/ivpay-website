import { CTABlock } from "@/components/blocks/cta-block";
import ECommerceBenefitsBlock from "@/components/blocks/e-commerce-benefits";
import ECommerceHeroBlock from "@/components/blocks/e-commerce-hero-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

import { Metadata } from "next";
import { getProduct, productsList } from "@/components/data-providers/products-provider";

const product = getProduct(productsList, "e-commerce");

export const metadata: Metadata = {
  title: "IVPAY | " + product.label,
  description: product.SEOdescription? product.SEOdescription : product.description,
  openGraph: {
    title: "IVPAY | " + product.label,
    description:
      product.SEOdescription? product.SEOdescription : product.description,
    type: "website",
    url: "https://ivpay.io/e_commerce",
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ECommercePage(){
    return (
    <main className="flex flex-col min-h-screen">
        <ECommerceHeroBlock/>
        <ECommerceBenefitsBlock/>
        <MerchantVideoBlock/>
        <ReapTheBenefitsBlock/>
        <CTABlock/>
    </main>)
}