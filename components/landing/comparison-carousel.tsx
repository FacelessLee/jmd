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
      description: "Enjoying intense chemistry while discovering character, values, and stress responses over months of intentional shared time.",
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
      containerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contrast-carousel"
      className="py-24 md:py-32 bg-white border-t border-black/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A5F]">
              Direct Contrast
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Swipe Culture vs. Mature Mind
            </h2>
            <p className="text-base text-[#5B616E]">
              Examine how unconscious habits poison connections, and how conscious relational practices create enduring safety.
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              aria-label="Previous card"
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-[#121316] hover:bg-neutral-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next card"
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-[#121316] hover:bg-neutral-100 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

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
              className="min-w-[320px] sm:min-w-[380px] rounded-3xl bg-[#FBF9F5] border border-black/[0.08] p-7 shadow-sm flex flex-col justify-between snap-start space-y-6 shrink-0"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white border border-black/5 text-[#121316] mb-4">
                  {item.domain}
                </span>

                {/* The Red Flag Section */}
                <div className="p-4 rounded-2xl bg-white border border-[#FF5A5F]/20 space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FF5A5F]">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Red Flag Habit</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#121316]">
                    {item.datingSlop.title}
                  </h4>
                  <p className="text-xs text-[#5B616E] leading-relaxed">
                    {item.datingSlop.description}
                  </p>
                </div>

                {/* The Mature Shift Section */}
                <div className="p-4 rounded-2xl bg-[#2A4B43] text-white space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FF7E40]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Just Mature Mind Standard</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {item.matureShift.title}
                  </h4>
                  <p className="text-xs text-emerald-50 leading-relaxed">
                    {item.matureShift.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Domain 0{item.id}</span>
                <span>Relational Integrity</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
