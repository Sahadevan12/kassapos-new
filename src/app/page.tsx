import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { MarqueeTicker } from "@/components/home/MarqueeTicker";
import { FounderStrip } from "@/components/home/FounderStrip";
import { FeaturesCloud } from "@/components/home/FeaturesCloud";
import { OurJourneySection } from "@/components/home/OurJourneySection";
import { ScrollStorySection } from "@/components/home/ScrollStorySection";
import { BentoFeatures } from "@/components/home/BentoFeatures";
import { IndustrySection } from "@/components/home/IndustrySection";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <MarqueeTicker />
      <FounderStrip />
      <FeaturesCloud />
      <OurJourneySection />
      {/* <ScrollStorySection /> */}
      <BentoFeatures />
      <IndustrySection />
      <DashboardPreview />
      <TestimonialsSection />
      <PricingTeaser />
      <ClosingCTA />
    </>
  );
}
