import AboutHeroBlock from "@/components/blocks/about-hero-block";
import AboutNumbersBlock from "@/components/blocks/about-numbers-block";
import AboutPartnersBlock from "@/components/blocks/about-patners";
import AboultStoryBlock from "@/components/blocks/about-story-block";
import AboutTeamBlock from "@/components/blocks/about-team-block";

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