import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ChemistrySpectrum } from "@/components/landing/chemistry-spectrum";
import { MatchmakingProtocol } from "@/components/landing/matchmaking-protocol";
import { DilemmaDeckSection } from "@/components/landing/dilemma-deck-section";
import { MaturityMetricSection } from "@/components/landing/maturity-metric-section";
import { CorePillarsBento } from "@/components/landing/core-pillars-bento";
import { ComparisonCarousel } from "@/components/landing/comparison-carousel";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { LeadCaptureSection } from "@/components/landing/lead-capture-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCF9F8] text-[#1C1B1B] selection:bg-[#FF5A60]/20 selection:text-[#FF5A60]">
      {/* Sticky Top Navbar with Official Brand Logo & Matchmaking Navigation */}
      <Navbar />

      {/* Hero Section: 6-Intent Segmentation + Interactive Matchmaking Profile Deck */}
      <Hero />

      {/* The Modern Relational Spectrum: 4 Photo-Forward Archetype Cards */}
      <ChemistrySpectrum />

      {/* Curated Matchmaking Architecture & Live Cohort Preview (African & Global Profiles) */}
      <MatchmakingProtocol />

      {/* Interactive Dilemma Simulator with Real-Time Telemetry & Scripts */}
      <DilemmaDeckSection />

      {/* Maturity Metric: 3-Step Interactive Superpower Assessment */}
      <MaturityMetricSection />

      {/* The Four Foundations: Bento Grid with Grounded Principles */}
      <CorePillarsBento />

      {/* Swipe Culture vs. Mature Mind: Direct Contrast Carousel */}
      <ComparisonCarousel />

      {/* Real Outcomes: Authentic Stories & Photography across Lagos, London & NYC */}
      <TestimonialsSection />

      {/* Private Circle & Matchmaking Cohort Application Module */}
      <LeadCaptureSection />

      {/* Warm Minimalist Footer */}
      <Footer />
    </main>
  );
}
