import { CTABlock } from "@/components/blocks/cta-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import POSBenefitsBlock from "@/components/blocks/pos-benefits-block";
import POSHeroBlock from "@/components/blocks/pos-hero-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

import { Metadata } from "next";
import { getProduct, productsList } from "@/components/data-providers/products-provider";

const product = getProduct(productsList, "pos");

export const metadata: Metadata = {
  title: "IVPAY | " + product.label,
  description: product.SEOdescription? product.SEOdescription : product.description,
  openGraph: {
    title: "IVPAY | " + product.label,
    description:
      product.SEOdescription? product.SEOdescription : product.description,
    type: "website",
    url: "https://ivpay.io/pos",
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function POSpage(){
    return (
        <main className="flex flex-col min-h-screen">
            <POSHeroBlock/>
            <POSBenefitsBlock/>
            <MerchantVideoBlock/>
            <ReapTheBenefitsBlock/>
            <CTABlock/>
        </main>
    )
}