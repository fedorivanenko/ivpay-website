import EcosystemHeroBlock from "@/components/blocks/ecosystem-hero-block";
import EcosystemTockenDistributionBlock from "@/components/blocks/ecosystem-tocken-dist-block";
import EcosystemTockenomicsBlock from "@/components/blocks/ecosystem-tockenomics-block";
import EcosystemRoadmapBlock from "@/components/blocks/ecosytem-roadmap-block";

export default function EcosystemPage(){
    return (
        <main className="flex flex-col min-h-screen">
            <EcosystemHeroBlock/>
            <EcosystemRoadmapBlock/>
            <EcosystemTockenomicsBlock/>
            <EcosystemTockenDistributionBlock/>
        </main>
    )
}