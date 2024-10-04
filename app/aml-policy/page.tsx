import AMLBlock from "@/components/blocks/aml-block";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVPAY | Anti-Money Laundering (AML) Policy",
  description:
    "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
  openGraph: {
    title: "IVPAY | Anti-Money Laundering (AML) Policy",
    description:
      "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
    type: "website",
    url: "https://ivpay.io/aml-policy",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col  mt-20">
      <AMLBlock />
    </main>
  );
}
