import POSBenefitsBlock from "@/components/blocks/pos-benefits-block";
import POSHeroBlock from "@/components/blocks/pos-hero-block";

export default function POSpage(){
    return (
        <main className="flex flex-col min-h-screen">
            <POSHeroBlock/>
            <POSBenefitsBlock/>
        </main>
    )
}