import HomepageHero from "@/components/blocks/home_hero";
import ProductCards from "@/components/blocks/product_cards";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomepageHero/>
      <ProductCards/>
      <div className="h-[100dvh] bg-soft"/>
    </main>
  );
}
