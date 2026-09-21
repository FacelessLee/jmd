"use client";

import React, { useState } from "react";
import { CardStack } from "@/components/ui/card-stack";
import { DILEMMA_CARDS } from "@/lib/cards-data";
import { DilemmaCard } from "@/lib/types";
import { Flame, ShieldCheck, Heart, Sparkles, BookOpen, MessageSquareQuote } from "lucide-react";

export function DilemmaDeckSection() {
  const [swipes, setSwipes] = useState({ redFlags: 14, growthSpaces: 38 });

  const handleSwipeLeft = (card: DilemmaCard) => {
    setSwipes((prev) => ({ ...prev, redFlags: prev.redFlags + 1 }));
  };

  const handleSwipeRight = (card: DilemmaCard) => {
    setSwipes((prev) => ({ ...prev, growthSpaces: prev.growthSpaces + 1 }));
  };

  return (
    <section
      id="dilemma-simulator"
      className="py-24 md:py-32 bg-[#F3EFEA] border-b border-[#E7E2DA] relative overflow-hidden"
    >
      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-28">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1C1B1B] shadow-sm text-xs font-bold uppercase tracking-wider mb-2 border border-[#E7E2DA]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A60]" />
            <span>Interactive Dilemma Simulator</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1B1B] tracking-tight">
            Swipe Past the Drama.
            <span className="italic font-light block flame-gradient-text">
              Calibrate Your Instincts.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4F4633] leading-relaxed">
            Dating apps conditioned us to swipe on superficial filters. Here, we swipe on emotional maturity: evaluate common relational friction and uncover psychological scripts to handle them like an adult.
          </p>
        </div>

        {/* Layout Grid: Dilemma Deck Left / Instructions & Real-time EQ Scoreboard Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-center">
          {/* Card Stack Interactive Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[500px]">
              <CardStack
                cards={DILEMMA_CARDS}
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
              />
            </div>
          </div>

          {/* Right Column: Interaction Telemetry & Wisdom Codex */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Session Telemetry Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E7E2DA] shadow-md space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E2DA]">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[#68645E] block">
                    Your Deck Telemetry
                  </span>
                  <span className="text-lg font-black text-[#1C1B1B]">
                    Active Calibration Session
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2D6A4F] text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-ping" />
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FFEFEF] border border-[#FF5A60]/20">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#BA1A1A] mb-1">
                    <Flame className="w-4 h-4" />
                    <span>Red Flags Called</span>
                  </div>
                  <div className="text-3xl font-black text-[#BA1A1A]">
                    {swipes.redFlags}
                  </div>
                  <span className="text-[11px] text-[#68645E]">
                    Traps recognized
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#E8F5E9] border border-[#2D6A4F]/20">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#2D6A4F] mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Growth Chosen</span>
                  </div>
                  <div className="text-3xl font-black text-[#2D6A4F]">
                    {swipes.growthSpaces}
                  </div>
                  <span className="text-[11px] text-[#68645E]">
                    High-EQ responses
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#FFA41C] shrink-0 mt-0.5" />
                <div className="text-xs text-[#4F4633] leading-relaxed">
                  <strong className="text-[#1C1B1B] block font-bold mb-0.5">
                    Tinder &amp; Bumble Pro-Tip:
                  </strong>
                  Tap the book icon or flip prompt on any card to reveal the exact psychological script to speak in real life when boundary questions arise.
                </div>
              </div>
            </div>

            {/* Standout Quote Block */}
            <div className="p-7 rounded-3xl bg-[#1C1B1B] text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-[#FF5A60]/20 blur-xl pointer-events-none" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-black uppercase tracking-wider text-[#FFC629] mb-3">
                <Heart className="w-3.5 h-3.5" />
                <span>The Just Mature Mind Standard</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-extrabold italic mb-3 leading-snug">
                “Compatibility isn’t the absence of friction. It is the maturity of your repair protocol.”
              </blockquote>

              <p className="text-xs text-white/75 leading-relaxed">
                Superficial dating culture encourages people to discard matches at the first sign of human nuance. Conscious partnerships celebrate chemistry while safeguarding emotional sovereignty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
