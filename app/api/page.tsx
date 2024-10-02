import APIBenefitsBlock from "@/components/blocks/api-benefits-block";
import APIHeroBlock from "@/components/blocks/api-hero-block";
import {CTABlock} from "@/components/blocks/cta-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

import { Metadata } from "next";
import { getProduct, productsList } from "@/components/data-providers/products-provider";

const product = getProduct(productsList, "api");

export const metadata: Metadata = {
  title: "IVPAY | " + product.label,
  description: product.SEOdescription? product.SEOdescription : product.description,
  openGraph: {
    title: "IVPAY | " + product.label,
    description:
      product.SEOdescription? product.SEOdescription : product.description,
    type: "website",
    url: "https://ivpay.io/api",
  },
  twitter: {
    card: 'summary_large_image',
  },
};

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
  