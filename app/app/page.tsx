import APPBenefitsBlock from "@/components/blocks/app-benefits-block";
import AppHeroBlock from "@/components/blocks/app-hero-block";
import {CTABlock} from "@/components/blocks/cta-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

import { Metadata } from "next";
import { getProduct, productsList } from "@/components/data-providers/products-provider";

const product = getProduct(productsList, "app");

export const metadata: Metadata = {
  title: "IVPAY | " + product.label,
  description: product.SEOdescription? product.SEOdescription : product.description,
  openGraph: {
    title: "IVPAY | " + product.label,
    description:
      product.SEOdescription? product.SEOdescription : product.description,
    type: "website",
    url: "https://ivpay.io/app",
  },
  twitter: {
    card: 'summary_large_image',
  },
};


export default function AppPage(){
    return (
    <main className="flex flex-col min-h-screen">
        <AppHeroBlock/>
        <APPBenefitsBlock/>
        <MerchantVideoBlock/>
        <ReapTheBenefitsBlock/>
        <CTABlock/>
    </main>)
}