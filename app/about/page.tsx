import AboutHeroBlock from "@/components/blocks/about-hero-block";
import AboutNumbersBlock from "@/components/blocks/about-numbers-block";
import AboutPartnersBlock from "@/components/blocks/about-patners";
import AboultStoryBlock from "@/components/blocks/about-story-block";
import AboutTeamBlock from "@/components/blocks/about-team-block";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVPAY | About",
  description:
    "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
  openGraph: {
    title: "IVPAY | About",
    description:
      "Learn about IVPAY, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
    type: "website",
    url: "https://ivpay.io/about",
  },
  twitter: {
    card: 'summary_large_image',
  },
};


export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <AboutHeroBlock/>
            <AboultStoryBlock/>
            {/*
            <AboutNumbersBlock/>
            <AboutTeamBlock/>
             */}
            <AboutPartnersBlock/>
        </main>
      );
    }