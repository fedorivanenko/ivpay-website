import { CTABlock } from "@/components/blocks/cta-block";
import ECommerceBenefitsBlock from "@/components/blocks/e-commerce-benefits";
import ECommerceHeroBlock from "@/components/blocks/e-commerce-hero-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

export default function ECommercePage(){
    return (
    <main className="flex flex-col min-h-screen">
        <ECommerceHeroBlock/>
        <ECommerceBenefitsBlock/>
        <MerchantVideoBlock/>
        <ReapTheBenefitsBlock/>
        <CTABlock/>
    </main>)
}