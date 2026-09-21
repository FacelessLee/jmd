"use client";

import React, { useState } from "react";
import { BentoCard } from "@/components/ui/bento-card";
import {
  BrainCircuit,
  MessageSquareQuote,
  RefreshCw,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function CorePillarsBento() {
  const [activeTabPillar3, setActiveTabPillar3] = useState<"old" | "new">("new");

  return (
    <section
      id="core-pillars"
      className="py-24 md:py-32 bg-[#FBF9F5] border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A4B43]/10 text-[#2A4B43] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Four Foundations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121316] tracking-tight">
            Engineered for Emotional Integrity. <br />
            <span className="font-serif italic font-normal text-[#2A4B43]">
              Not Algorithmic Addiction.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5B616E] leading-relaxed">
            Every layer of Just Mature Mind is built around relational sovereignty, intentional communication, and mutual arrangements.
          </p>
        </div>

        {/* Asymmetrical Bento Grid with LazyInterface Cursor Tracking & Border Shaders */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Pillar 1: Emotional Self-Mastery (Span 7 - Large Feature) */}
          <BentoCard
            className="md:col-span-7"
            badge="Foundation 01"
            title="Emotional Self-Mastery"
            subtitle="Knowing your somatic triggers before making them someone else's emergency."
          >
            <div className="space-y-4 mt-2">
              <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-black/5 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#5B616E] uppercase tracking-wider">
                    The 90-Second Neurochemical Rule
                  </span>
                  <span className="text-[#2A4B43] font-mono font-bold">
                    Regulated State
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#121316] leading-relaxed">
                  A somatic trigger lasts 90 seconds in blood chemistry. Everything after that is mental storytelling. Mature partners hold space for the body to settle before uttering a single sentence.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-white text-[11px] font-semibold text-[#121316] border border-black/5">
                    Vagus Nerve Regulation
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white text-[11px] font-semibold text-[#121316] border border-black/5">
                    Trigger Ownership
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white text-[11px] font-semibold text-[#121316] border border-black/5">
                    De-escalation Protocols
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#2A4B43] font-semibold">
                <BrainCircuit className="w-4 h-4" />
                <span>Eliminates reactive regret by over 80%</span>
              </div>
            </div>
          </BentoCard>

          {/* Pillar 2: High-Context Communication (Span 5) */}
          <BentoCard
            className="md:col-span-5"
            badge="Foundation 02"
            title="High-Context Communication"
            subtitle="Replacing guessing games and testing with articulate honesty."
          >
            <div className="space-y-3 mt-2">
              {/* Message Bubble Simulator */}
              <div className="p-3.5 rounded-2xl bg-neutral-100/70 border border-black/5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Low-Context (Superficial Trap)
                </span>
                <p className="text-xs text-neutral-700 italic">
                  “I'm fine. You should know why I'm quiet.”
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#2A4B43] text-white space-y-1 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7E40]">
                  High-Context (Just Mature Mind Standard)
                </span>
                <p className="text-xs text-emerald-50 leading-relaxed">
                  “I felt anxious when our plans shifted suddenly. I love spending time with you, and predictability helps me feel safe.”
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#5B616E] pt-1">
                <MessageSquareQuote className="w-4 h-4 text-[#2A4B43]" />
                <span>Expresses vulnerability without hostility</span>
              </div>
            </div>
          </BentoCard>

          {/* Pillar 3: Pattern Disruption (Span 5) */}
          <BentoCard
            className="md:col-span-5"
            badge="Foundation 03"
            title="Pattern Disruption"
            subtitle="Unlearning the intoxicating dopamine loops of volatile dynamics."
          >
            <div className="space-y-4 mt-2">
              {/* Interactive Old vs New Toggle */}
              <div className="flex items-center p-1 rounded-xl bg-neutral-100 text-xs font-bold">
                <button
                  onClick={() => setActiveTabPillar3("old")}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    activeTabPillar3 === "old"
                      ? "bg-white text-[#FF5A5F] shadow-sm"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Old Dopamine Cycle
                </button>
                <button
                  onClick={() => setActiveTabPillar3("new")}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    activeTabPillar3 === "new"
                      ? "bg-white text-[#2A4B43] shadow-sm"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Conscious Stability
                </button>
              </div>

              {activeTabPillar3 === "old" ? (
                <div className="p-4 rounded-2xl bg-[#FF5A5F]/5 border border-[#FF5A5F]/15 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[#FF5A5F] font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Rollercoaster Illusion</span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    Confusing anxiety with butterflies. Seeking erratic affection to prove personal worth.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-[#2A4B43]/5 border border-[#2A4B43]/15 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[#2A4B43] font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Regulated Devotion</span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    Peaceful consistency. Loving people who choose you clearly without demanding emotional backflips.
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs text-[#5B616E]">
                <RefreshCw className="w-3.5 h-3.5 text-[#2A4B43]" />
                <span>Rewiring attachment from anxious to secure</span>
              </div>
            </div>
          </BentoCard>

          {/* Pillar 4: The Mature Community (Span 7) */}
          <BentoCard
            className="md:col-span-7"
            badge="Foundation 04"
            title="The Curated Circle"
            subtitle="Peer discussions and mutual arrangement spaces curated for conscious growth."
          >
            <div className="space-y-4 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-black/5 text-center space-y-1">
                  <span className="text-2xl font-extrabold text-[#121316]">
                    100%
                  </span>
                  <p className="text-[11px] font-semibold text-[#5B616E]">
                    Verified Intentions
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-black/5 text-center space-y-1">
                  <span className="text-2xl font-extrabold text-[#2A4B43]">
                    Zero
                  </span>
                  <p className="text-[11px] font-semibold text-[#5B616E]">
                    Superficial Ghosting
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-black/5 text-center space-y-1">
                  <span className="text-2xl font-extrabold text-[#FF5A5F]">
                    Weekly
                  </span>
                  <p className="text-[11px] font-semibold text-[#5B616E]">
                    Repair Clinics & Q&A
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#2A4B43]" />
                  <span className="font-semibold text-[#121316]">
                    Curated for entrepreneurs, creatives, and intentional adults.
                  </span>
                </div>
                <span className="font-mono text-[11px] font-bold text-[#2A4B43]">
                  Invite Only
                </span>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
