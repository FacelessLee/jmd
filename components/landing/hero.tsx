"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CardStack } from "@/components/ui/card-stack";
import { DILEMMA_CARDS } from "@/lib/cards-data";
import { INTENTS, INTENT_KEYS, IntentKey } from "@/lib/intents";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
} from "lucide-react";

export function Hero() {
  const [selectedIntent, setSelectedIntent] = useState<IntentKey>("serious_relationship");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("jmm_intent") as IntentKey;
    if (saved && INTENTS[saved]) {
      setSelectedIntent(saved);
    }
  }, []);

  const handleSelectIntent = (key: IntentKey) => {
    setSelectedIntent(key);
    if (typeof window !== "undefined") {
      localStorage.setItem("jmm_intent", key);
      window.dispatchEvent(new CustomEvent("intent_change", { detail: key }));
    }
  };

  const activeConfig = INTENTS[selectedIntent];

  const scrollToJoin = () => {
    document.getElementById("join-circle")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#100C12]">
      {/* Background Ambience & Micro-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E243340_1px,transparent_1px),linear-gradient(to_bottom,#2E243340_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Warm Ambient Gradient Shimmers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,90,122,0.06)_0%,rgba(255,179,107,0.03)_50%,transparent_80%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Strategic Brand Spine Badge (Universal Across All 6 Intents) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A141D] border border-[#2E2433] shadow-sm text-xs font-semibold text-[#F5EFE8]">
            <span className="flex h-2 w-2 rounded-full bg-[#FF5A7A] animate-pulse" />
            <span className="text-[#B8AEB6]">The Golden Rule:</span>
            <span className="text-[#F5EFE8] font-medium italic">
              “Whatever you’re here for — clarity and conduct are the sexiest things in the room.”
            </span>
          </div>
        </motion.div>

        {/* 6-Intent Segmentation Chip Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center mb-10"
        >
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B8AEB6] mb-3">
            Select what you&apos;re here for:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
            {INTENT_KEYS.map((key) => {
              const intent = INTENTS[key];
              const isSelected = selectedIntent === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSelectIntent(key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#FF5A7A] text-[#100C12] shadow-md shadow-[#FF5A7A]/30 scale-[1.03]"
                      : "bg-[#1A141D] text-[#B8AEB6] border border-[#2E2433] hover:text-[#F5EFE8] hover:border-[#FF5A7A]/40 hover:bg-[#241C29]"
                  }`}
                >
                  {intent.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Main Hero Split Grid: Left = Dynamic Intent Content / Right = Live Swipe Deck Above the Fold */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Dynamic Intent-Tailored Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIntent}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5 w-full"
              >
                {/* Active Mode Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241C29] border border-[#2E2433] text-xs font-semibold text-[#FFB36B]">
                  <span>Segment: {activeConfig.label}</span>
                </div>

                {/* Verbatim Tailored Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[#F5EFE8] tracking-tight leading-[1.12]">
                  {activeConfig.headline}
                </h1>

                {/* Verbatim Tailored Subline */}
                <p className="text-base sm:text-lg text-[#B8AEB6] leading-relaxed max-w-xl">
                  {activeConfig.subline}
                </p>

                {/* Strategic Rationale Callout */}
                <div className="p-3.5 rounded-2xl bg-[#1A141D] border border-[#2E2433] flex items-start gap-3 text-xs text-[#B8AEB6]">
                  <Info className="w-4 h-4 text-[#FFB36B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5EFE8] block mb-0.5">
                      Why this standard works:
                    </strong>
                    {activeConfig.whyItWorks}
                  </div>
                </div>

                {/* Tailored Intent CTA with Magnetic Cursor Pull */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <MagneticButton
                    variant="primary"
                    strength={8}
                    onClick={scrollToJoin}
                    className="px-8 py-4 text-sm uppercase tracking-wider font-bold shadow-xl shadow-[#FF5A7A]/25"
                  >
                    <Sparkles className="w-4 h-4" />
                    {activeConfig.cta}
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>

                  <a
                    href="#dilemma-deck"
                    className="px-5 py-3.5 text-xs font-semibold text-[#B8AEB6] hover:text-[#F5EFE8] transition-colors"
                  >
                    Swipe live scenarios →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Grounded Credibility Strip (Zero Fake Percentages) */}
            <div className="pt-6 border-t border-[#2E2433] w-full flex flex-wrap items-center gap-8 text-xs font-medium text-[#B8AEB6]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#100C12] bg-[#241C29] text-[#F5EFE8] text-[11px] font-bold flex items-center justify-center border border-[#2E2433]">
                    ER
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#100C12] bg-[#FF5A7A] text-[#100C12] text-[11px] font-bold flex items-center justify-center">
                    MK
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#100C12] bg-[#FFB36B] text-[#100C12] text-[11px] font-bold flex items-center justify-center">
                    SL
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[#F5EFE8] text-sm">8,400+ Active Members</div>
                  <span>Vetted adults ages 25–60</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#FFB36B] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Explicit Mutual Respect</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Swipe Deck Live Above the Fold */}
          <div
            id="dilemma-deck"
            className="lg:col-span-6 relative flex flex-col justify-center items-center pt-4 lg:pt-0"
          >
            <div className="w-full max-w-[420px] relative">
              {/* Subtle Ambient Radial Highlight behind deck */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,122,0.12)_0%,rgba(255,179,107,0.05)_50%,transparent_75%)] blur-2xl pointer-events-none" />

              {/* Directly Render the Interactive Card Stack Above the Fold */}
              <CardStack cards={DILEMMA_CARDS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
