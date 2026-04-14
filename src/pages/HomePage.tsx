import { AboutPreviewSection } from "@/sections/AboutPreviewSection";
import { CommunityCtaSection } from "@/sections/CommunityCtaSection";
import { FieldsOverviewSection } from "@/sections/FieldsOverviewSection";
import { HeroSection } from "@/sections/HeroSection";
import { WhatWeDoSection } from "@/sections/WhatWeDoSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <FieldsOverviewSection />
      <WhatWeDoSection />
      <CommunityCtaSection />
    </>
  );
}
