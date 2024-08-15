import CoinsListBlock from "@/components/blocks/coins-list-block";
import EasySafeFastBlock from "@/components/blocks/easy-safe-fast-block";
import HomeHeroBlock from "@/components/blocks/home-hero-block";
import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import OurProductsBlock from "@/components/blocks/our-products-block";
import ReapTheBenfitsBlock from "@/components/blocks/reap-the-benefits-block";
import TogetherWithUsBlock from "@/components/blocks/together-with-us-block";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeHeroBlock/>
      <OurProductsBlock/>
      <EasySafeFastBlock/>
      <ReapTheBenfitsBlock/>
      <CoinsListBlock/>
      <MerchantVideoBlock/>
      <TogetherWithUsBlock/>
    </main>
  );
}
