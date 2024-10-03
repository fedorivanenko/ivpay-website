import BrandBadge from "@/components/elements/brand-badge";

////TODO: move data to data provider
export default function BrandWall() {
    return(
        <ul className="flex flex-wrap sm:justify-between gap-y-12 gap-x-16 mx-0 sm:mx-12 xl:mx-0 sm:gap-x-12 xl:gap-x-28 sm:gap-y-10 mt-10 sm:mt-20">
            <BrandBadge name="AT&T" icon="AT_T"/>
            <BrandBadge name="Microsoft" icon="Microsoft"/>
            <BrandBadge name="Pizza Hut" icon="PizzaHut"/>
            <BrandBadge name="Starbucks" icon="Starbucks"/>
            <BrandBadge name="Wikipedia" icon="Wikipedia"/>
            <BrandBadge name="Namecheap" icon="Namecheap"/>
            <BrandBadge name="McDonalds" icon="McDonalds"/>
            <BrandBadge name="Twitch" icon="Twitch"/>
            <BrandBadge name="Virgin" icon="Virgin"/>
            <BrandBadge name="SL Benfica" icon="SLBenfica"/>
            <BrandBadge name="Overstock" icon="Overstock"/>
            <BrandBadge name="Amazon" icon="Amazon"/>
            {/*
             */}
        </ul>
    )
}