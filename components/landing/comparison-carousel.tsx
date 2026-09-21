"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldAlert, CheckCircle2, Split } from "lucide-react";

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
      className="py-24 md:py-32 bg-[#FCF9F8] border-b border-[#E7E2DA] overflow-hidden relative"
    >
      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-28 relative z-10">
        {/* Header with Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEFEF] text-[#BA1A1A] text-xs font-bold uppercase tracking-wider">
              <Split className="w-3.5 h-3.5" />
              <span>Direct Contrast</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1B1B] tracking-tight">
              Swipe Culture vs. Mature Mind
            </h2>

            <p className="text-base text-[#4F4633] leading-relaxed">
              Examine how unconscious dating habits poison connections, and how conscious relational practices build magnetic security.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full bg-white border border-[#E7E2DA] flex items-center justify-center text-[#1C1B1B] hover:border-[#FF5A60] hover:text-[#FF5A60] transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full bg-white border border-[#E7E2DA] flex items-center justify-center text-[#1C1B1B] hover:border-[#FF5A60] hover:text-[#FF5A60] transition-colors shadow-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Scrollable Track */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 scroll-smooth"
        >
          {CONTRASTS.map((item) => (
            <div
              key={item.id}
              className="w-[340px] sm:w-[390px] shrink-0 rounded-3xl bg-white border border-[#E7E2DA] shadow-md p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:shadow-xl transition-all"
            >
              {/* Domain Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E7E2DA]">
                <span className="font-extrabold text-base text-[#1C1B1B]">
                  {item.domain}
                </span>
                <span className="text-xs font-mono font-bold text-[#68645E]">
                  Domain 0{item.id}
                </span>
              </div>

              {/* Red Flag Block */}
              <div className="p-4 rounded-2xl bg-[#FFEFEF] border border-[#FF5A60]/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-[#BA1A1A]">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Red flag habit</span>
                </div>
                <h3 className="text-sm font-bold text-[#1C1B1B]">
                  {item.datingSlop.title}
                </h3>
                <p className="text-xs text-[#4F4633] leading-relaxed">
                  {item.datingSlop.description}
                </p>
              </div>

              {/* Growth Space Block */}
              <div className="p-4 rounded-2xl bg-[#E8F5E9] border border-[#2D6A4F]/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase text-[#2D6A4F]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Just mature mind standard</span>
                </div>
                <h3 className="text-sm font-bold text-[#1C1B1B]">
                  {item.matureShift.title}
                </h3>
                <p className="text-xs text-[#4F4633] leading-relaxed">
                  {item.matureShift.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
