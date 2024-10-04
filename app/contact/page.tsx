import { CTABlock } from "@/components/blocks/cta-block";
import GetInTouchBlock from "@/components/blocks/get-in-touch-block";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVPAY | Contact Us",
  description:
    "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
    openGraph: {
      title: "IVPAY | Contact Us",
      description:
        "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
      type: "website",
      url: "https://ivpay.io/contact",
    },
    twitter: {
      card: 'summary_large_image',
    },
  };

export default function ContactPage() {
  return (
    <main className="flex flex-col mt-20">
      <GetInTouchBlock />
    </main>
  );
}
