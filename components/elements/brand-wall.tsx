import BrandBadge from "@/components/elements/brand-badge";

////TODO: move data to data provider
export default function BrandWall() {
    return(
        <ul className="flex flex-wrap sm:justify-between gap-y-7.5 gap-x-10 sm:gap-x-14 xl:gap-x-24 sm:gap-y-10 my-10 sm:my-20">
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