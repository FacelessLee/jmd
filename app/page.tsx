import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { CorePillarsBento } from "@/components/landing/core-pillars-bento";
import { MaturityMetricSection } from "@/components/landing/maturity-metric-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ComparisonCarousel } from "@/components/landing/comparison-carousel";
import { LeadCaptureSection } from "@/components/landing/lead-capture-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#100C12] text-[#F5EFE8] selection:bg-[#FF5A7A] selection:text-[#100C12]">
      {/* Dynamic Sticky Navbar with Top Scroll Progress */}
      <Navbar />

      {/* Hero Section: 6-Intent Segmentation + Interactive Swipe Deck Above the Fold */}
      <Hero />

      {/* The Four Foundations: Bento Grid with Mouse-Tracking Spotlight Borders */}
      <CorePillarsBento />

      {/* The Maturity Metric: Interactive Gauge & Superpower Assessment */}
      <MaturityMetricSection />

      {/* Real Outcomes: Real-Style Testimonials Across Diverse Intents */}
      <TestimonialsSection />

      {/* Red Flag vs. Growth Space Horizontal Momentum Carousel */}
      <ComparisonCarousel />

      {/* High-Conversion Lead Capture Tailored to Selected Intent */}
      <LeadCaptureSection />

      {/* Dark Aubergine Footer */}
      <Footer />
    </main>
  );
}
