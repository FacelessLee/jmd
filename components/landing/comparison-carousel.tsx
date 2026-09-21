"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";

interface ContrastItem {
  id: number;
  domain: string;
  datingSlop: {
    title: string;
    description: string;
  };
  matureShift: {
    title: string;
    description: string;
  };
}

const CONTRASTS: ContrastItem[] = [
  {
    id: 1,
    domain: "Conflict & Disagreement",
    datingSlop: {
      title: "Scorekeeping & Cold Shoulders",
      description: "Withholding affection for days, keeping tally of historical faults, and waiting for the other person to break down first.",
    },
    matureShift: {
      title: "Active De-escalation & Safe Pausing",
      description: "Taking 20 minutes to regulate breathing, then returning with curiosity: 'I want to understand your hurt before defending myself.'",
    },
  },
  {
    id: 2,
    domain: "Arrangements & Boundaries",
    datingSlop: {
      title: "Ambiguity & Breadcrumbing",
      description: "Refusing to define mutual expectations to keep options open, leaving the other partner in chronic emotional vertigo.",
    },
    matureShift: {
      title: "Explicit Mutual Arrangements",
      description: "Direct clarity on emotional availability, commitments, financial or lifestyle arrangements, and reciprocal respect.",
    },
  },
  {
    id: 3,
    domain: "Attraction & Pacing",
    datingSlop: {
      title: "Love-Bombing Velocity",
      description: "Rushing into manufactured soulmate fantasies within 72 hours, then abruptly pulling away when human flaws appear.",
    },
    matureShift: {
      title: "Slow, Devoted Calibration",
      description: "Enjoying intense chemistry while discovering character, values, and stress responses over weeks and months of intentional shared time.",
    },
  },
  {
    id: 4,
    domain: "Vulnerability & Needs",
    datingSlop: {
      title: "Passive-Aggressive Testing",
      description: "Dropping subtle hints and getting furious when your partner fails to read your unspoken thoughts.",
    },
    matureShift: {
      title: "Articulate Directness",
      description: "Asking for exactly what would make you feel cherished, without demanding or apologetic shame.",
    },
  },
];

export function ComparisonCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contrast-carousel"
      className="py-20 md:py-32 bg-[#100C12] border-t border-[#2E2433] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header with Navigation Controls and Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A7A]">
              Direct Contrast
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5EFE8] tracking-tight">
              Swipe Culture vs. Mature Mind
            </h2>
            <p className="text-base text-[#B8AEB6]">
              Examine how unconscious habits poison connections, and how conscious relational practices create enduring safety.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              aria-label="Previous contrast card"
              className="w-11 h-11 rounded-full bg-[#1A141D] border border-[#2E2433] flex items-center justify-center text-[#F5EFE8] hover:border-[#FF5A7A]/50 hover:bg-[#241C29] transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next contrast card"
              className="w-11 h-11 rounded-full bg-[#1A141D] border border-[#2E2433] flex items-center justify-center text-[#F5EFE8] hover:border-[#FF5A7A]/50 hover:bg-[#241C29] transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Draggable & Scrollable Carousel */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CONTRASTS.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="min-w-[320px] sm:min-w-[390px] rounded-3xl bg-[#1A141D] border border-[#2E2433] p-7 shadow-lg shadow-black/40 flex flex-col justify-between snap-start space-y-6 shrink-0"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#241C29] border border-[#2E2433] text-[#F5EFE8] mb-4">
                  {item.domain}
                </span>

                {/* The Red Flag Section (Sentence Case) */}
                <div className="p-4 rounded-2xl bg-[#241C29] border border-[#E5484D]/30 space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E5484D]">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Red flag habit</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F5EFE8]">
                    {item.datingSlop.title}
                  </h4>
                  <p className="text-xs text-[#B8AEB6] leading-relaxed">
                    {item.datingSlop.description}
                  </p>
                </div>

                {/* The Mature Shift Section (Sentence Case) */}
                <div className="p-4 rounded-2xl bg-[#100C12] border border-[#FFB36B]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFB36B]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Mature mind standard</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F5EFE8]">
                    {item.matureShift.title}
                  </h4>
                  <p className="text-xs text-[#B8AEB6] leading-relaxed">
                    {item.matureShift.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#2E2433] flex items-center justify-between text-[11px] font-mono text-[#7E747E]">
                <span>Domain 0{item.id}</span>
                <span>Relational integrity</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
