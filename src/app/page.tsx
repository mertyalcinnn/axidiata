import HeroSection from "@/components/home/HeroSection";
import CollectionIntro from "@/components/home/CollectionIntro";
import { JewelrySpirit } from "@/components/sections/JewelrySpirit";
import { GoldCollection } from "@/components/sections/GoldCollection";
import { DivinityCollection } from "@/components/sections/DivinityCollection";
import { MissionSection } from "@/components/sections/MissionSection";
import { BrandStory } from "@/components/sections/BrandStory";
import { SubscribeSection } from "@/components/sections/SubscribeSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CollectionIntro />
      <JewelrySpirit />
      <GoldCollection />
      <DivinityCollection />
      <MissionSection />

      <BrandStory />

      <SubscribeSection />
    </main>
  );
}
