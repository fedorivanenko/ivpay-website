import APPBenefitsBlock from "@/components/blocks/app-benefits-block";
import AppHeroBlock from "@/components/blocks/app-hero-block";
import CTABlock from "@/components/blocks/cta-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

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