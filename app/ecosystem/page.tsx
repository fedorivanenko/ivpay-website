import EcosystemHeroBlock from "@/components/blocks/ecosystem-hero-block";
import EcosystemTockenDistributionBlock from "@/components/blocks/ecosystem-tocken-dist-block";
import EcosystemTockenomicsBlock from "@/components/blocks/ecosystem-tockenomics-block";
import EcosystemRoadmapBlock from "@/components/blocks/ecosytem-roadmap-block";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVPAY | Ecosystem",
  description:
    "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
    openGraph: {
      title: "IVPAY | Ecosystem",
      description:
       "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
      type: "website",
      url: "https://ivpay.io/ecosystem",
    },
    twitter: {
      card: 'summary_large_image',
    },
  };

export default function EcosystemPage() {
  return (
    <main className="flex min-h-screen flex-col mt-20">
      <EcosystemHeroBlock />
      <EcosystemRoadmapBlock />
      <EcosystemTockenomicsBlock />
      <EcosystemTockenDistributionBlock />
    </main>
  );
}
