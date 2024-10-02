import { CTABlock } from "@/components/blocks/cta-block";
import InvocingBenefitsBlock from "@/components/blocks/invocing-benefits-block";
import InvocingHeroBlock from "@/components/blocks/invocing-hero-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

import { Metadata } from "next";
import { getProduct, productsList } from "@/components/data-providers/products-provider";

const product = getProduct(productsList, "invoicing");

export const metadata: Metadata = {
  title: "IVPAY | " + product.label,
  description: product.SEOdescription? product.SEOdescription : product.description,
  openGraph: {
    title: "IVPAY | " + product.label,
    description:
      product.SEOdescription? product.SEOdescription : product.description,
    type: "website",
    url: "https://ivpay.io/invocing",
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function InvoicingPage(){
    return (
        <main className="flex flex-col min-h-screen">
            <InvocingHeroBlock/>
            <InvocingBenefitsBlock/>
            <MerchantVideoBlock/>
            <ReapTheBenefitsBlock/>
            <CTABlock/>
        </main>
    )
}