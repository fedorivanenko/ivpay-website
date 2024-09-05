import APPBenefitsBlock from "@/components/blocks/app-benefits-block";
import AppHeroBlock from "@/components/blocks/app-hero-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

export default function AppPage(){
    return (
    <main className="flex flex-col min-h-screen">
        <AppHeroBlock/>
        <APPBenefitsBlock/>
        <MerchantVideoBlock/>
        <ReapTheBenefitsBlock className="bg-soft-gradient-reverse"/>
    </main>)
}