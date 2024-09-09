import { CTABlock } from "@/components/blocks/cta-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import POSBenefitsBlock from "@/components/blocks/pos-benefits-block";
import POSHeroBlock from "@/components/blocks/pos-hero-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

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