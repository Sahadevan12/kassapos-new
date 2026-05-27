import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { MarqueeTicker } from "@/components/home/MarqueeTicker";
import { FeaturesCloud } from "@/components/home/FeaturesCloud";
import { ClientsSection } from "@/components/home/ClientsSection";
import { SeeInActionSection } from "@/components/home/SeeInActionSection";
import { GifShowcaseSection } from "@/components/home/GifShowcaseSection";
import { ScrollStorySection } from "@/components/home/ScrollStorySection";
import { BentoFeatures } from "@/components/home/BentoFeatures";
import { IndustrySection } from "@/components/home/IndustrySection";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VideoTestimonialsSection } from "@/components/home/VideoTestimonialsSection";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { FAQSection } from "@/components/home/FAQSection";
import { FooterCTA } from "@/components/home/FooterCTA";
// import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <MarqueeTicker />
      <FeaturesCloud />
      <ClientsSection />
      <SeeInActionSection />
      <GifShowcaseSection />
      {/* <ScrollStorySection /> */}
      <BentoFeatures />
      <IndustrySection />
      <DashboardPreview />
      <TestimonialsSection />
      <VideoTestimonialsSection />
      <PricingTeaser />
      <FAQSection />
      <FooterCTA />
      {/* <ClosingCTA /> */}
    </>
  );
}
