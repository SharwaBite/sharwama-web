import { HeroSection } from "@/components/menu/hero-section";
import { FeaturedMenuSection } from "@/components/menu/featured-menu-section";
import { BestCombosBanner } from "@/components/menu/best-combos-banner";
import { ValuePropsStrip } from "@/components/menu/value-props-strip";

export default function ShopHomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <div className="rounded-[24px] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <FeaturedMenuSection />
          <BestCombosBanner />
          <ValuePropsStrip />
        </div>
      </div>
    </main>
  );
}
