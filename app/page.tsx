import CoinsListBlock from "@/components/blocks/home-coins-list-block";
import EasySafeFastBlock from "@/components/blocks/home-easy-safe-fast-block";
import HomeHeroBlock from "@/components/blocks/home-hero-block";
//import MerchantVideoBlock from "@/components/blocks/merchants-video-block";
import OurProductsBlock from "@/components/blocks/home-our-products-block";
import ReapTheBenfitsBlock from "@/components/blocks/reap-the-benefits-block";
import TogetherWithUsBlock from "@/components/blocks/home-together-with-us-block";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeHeroBlock/>
      <OurProductsBlock/>
      <EasySafeFastBlock/>
      {/*
      <ReapTheBenfitsBlock/>
       */}
      <CoinsListBlock/>
      <TogetherWithUsBlock/>
    </main>
  );
}