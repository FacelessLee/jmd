import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { DilemmaDeckSection } from "@/components/landing/dilemma-deck-section";
import { MaturityMetricSection } from "@/components/landing/maturity-metric-section";
import { CorePillarsBento } from "@/components/landing/core-pillars-bento";
import { ComparisonCarousel } from "@/components/landing/comparison-carousel";
import { LeadCaptureSection } from "@/components/landing/lead-capture-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF9F5] selection:bg-[#FF5A5F] selection:text-white">
      {/* Sticky Dynamic Navbar */}
      <Navbar />

      {/* Hero Section with 3D Card Stack Preview and Magnetic CTAs */}
      <Hero />

      {/* The Dilemma Deck: Bumble / Tinder Card Swipe Mechanics */}
      <DilemmaDeckSection />

      {/* The Maturity Metric: Gamified 3-Prompt Superpower Assessment */}
      <MaturityMetricSection />

      {/* Core Foundations: LazyInterface Mouse-Tracking Bento Grid */}
      <CorePillarsBento />

      {/* Red Flag vs. Growth Space Horizontal Momentum Carousel */}
      <ComparisonCarousel />

      {/* High-Conversion Lead Capture & Circle Membership */}
      <LeadCaptureSection />

      {/* Editorial Obsidian Footer */}
      <Footer />
    </main>
  );
}
