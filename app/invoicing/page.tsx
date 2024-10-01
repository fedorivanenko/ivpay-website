import { CTABlock } from "@/components/blocks/cta-block";
import InvocingBenefitsBlock from "@/components/blocks/invocing-benefits-block";
import InvocingHeroBlock from "@/components/blocks/invocing-hero-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import ReapTheBenefitsBlock from "@/components/blocks/reap-the-benefits-block";

export default function InvoicingPage(){
    return (
        <main className="flex flex-col min-h-screen">
            <InvocingHeroBlock/>
            <InvocingBenefitsBlock/>
            <MerchantVideoBlock/>
            <ReapTheBenefitsBlock/>
            <CTABlock/>
        </main>
    )
}