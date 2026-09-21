"use client";

import React, { useState } from "react";
import { CardStack } from "@/components/ui/card-stack";
import { DILEMMA_CARDS } from "@/lib/cards-data";
import { DilemmaCard } from "@/lib/types";
import { Flame, ShieldCheck, Heart, Sparkles, BookOpen } from "lucide-react";

export function DilemmaDeckSection() {
  const [swipes, setSwipes] = useState({ redFlags: 0, growthSpaces: 0 });

  const handleSwipeLeft = (card: DilemmaCard) => {
    setSwipes((prev) => ({ ...prev, redFlags: prev.redFlags + 1 }));
  };

  const handleSwipeRight = (card: DilemmaCard) => {
    setSwipes((prev) => ({ ...prev, growthSpaces: prev.growthSpaces + 1 }));
  };

  return (
    <section
      id="dilemma-deck"
      className="py-24 md:py-32 bg-[#FBF9F5] border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A4B43]/10 text-[#2A4B43] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Dilemma Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121316] tracking-tight">
            Swipe Past the Drama. <br />
            <span className="font-serif italic font-normal text-[#2A4B43]">
              Calibrate Your Instincts.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5B616E] leading-relaxed">
            Dating apps conditioned us to swipe on superficial jawlines and curated bios. Here, we swipe on emotional maturity: evaluate common relational friction points and uncover the communication scripts that resolve them.
          </p>
        </div>

        {/* Layout Grid: Dilemma Deck Left / Instructions & Real-time EQ Scoreboard Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Card Stack Interactive Container */}
          <div className="lg:col-span-7 flex justify-center">
            <CardStack
              cards={DILEMMA_CARDS}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
            />
          </div>

          {/* Right Column: Interaction Telemetry & Wisdom Codex */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Session Telemetry Card */}
            <div className="p-7 rounded-3xl bg-white border border-black/[0.08] shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-black/5">
                <span className="text-xs uppercase font-bold tracking-wider text-[#5B616E]">
                  Your Deck Telemetry
                </span>
                <span className="text-xs font-mono font-semibold text-[#2A4B43]">
                  Active Session
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FF5A5F]/5 border border-[#FF5A5F]/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FF5A5F] mb-1">
                    <Flame className="w-4 h-4" />
                    <span>Red Flags Called</span>
                  </div>
                  <div className="text-3xl font-extrabold text-[#121316]">
                    {swipes.redFlags}
                  </div>
                  <span className="text-[11px] text-neutral-500">
                    Traps recognized
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#2A4B43]/5 border border-[#2A4B43]/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2A4B43] mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Growth Chosen</span>
                  </div>
                  <div className="text-3xl font-extrabold text-[#121316]">
                    {swipes.growthSpaces}
                  </div>
                  <span className="text-[11px] text-neutral-500">
                    High-EQ responses
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-black/5 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#2A4B43] shrink-0 mt-0.5" />
                <div className="text-xs text-[#5B616E] leading-relaxed">
                  <strong className="text-[#121316] block mb-0.5">
                    Pro-Tip for Modern Romance:
                  </strong>
                  Tap the book icon or flip prompt on any card to reveal the exact psychological script to speak in real life.
                </div>
              </div>
            </div>

            {/* Maturity Manifesto Highlights */}
            <div className="p-7 rounded-3xl bg-[#121316] text-white space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF7E40] uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>The Just Mature Mind Standard</span>
              </div>

              <h4 className="text-lg font-bold leading-snug">
                “Compatibility isn’t the absence of friction. It is the maturity of your repair protocol.”
              </h4>

              <p className="text-xs text-neutral-400 leading-relaxed">
                Superficial culture encourages people to discard partners at the first sign of human imperfection. Conscious partnerships cultivate emotional regulation, clear boundaries, and radical honesty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
