import BrandBadge from "@/components/elements/brand-badge";


////TODO: move data to data provider
export default function BrandWall() {
    return(
        <ul className="flex flex-wrap sm:justify-between gap-y-7.5 gap-x-10 sm:gap-x-14 xl:gap-x-24 sm:gap-y-10 my-10 sm:my-20">
            <BrandBadge name="AT&T"/>
            <BrandBadge name="Microsoft"/>
            <BrandBadge name="Pizza Hut"/>
            <BrandBadge name="Starbucks"/>
            <BrandBadge name="Wikipedia"/>
            <BrandBadge name="Namecheap"/>
            <BrandBadge name="McDonalds"/>
            <BrandBadge name="Twitch"/>
            <BrandBadge name="Virgin"/>
            <BrandBadge name="SL Benfica"/>
            <BrandBadge name="Overstock"/>
            <BrandBadge name="Amazon"/>
        </ul>
    )
}