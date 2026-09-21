"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/bento-card";
import {
  BrainCircuit,
  MessageSquareQuote,
  RefreshCw,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export function CorePillarsBento() {
  const [activeTabPillar3, setActiveTabPillar3] = useState<"old" | "new">("new");

  return (
    <section
      id="the-foundations"
      className="py-24 md:py-32 bg-[#FAF8F5] border-b border-[#E7E2DA] relative overflow-hidden"
    >
      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-28 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1C1B1B] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm border border-[#E7E2DA]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A60]" />
            <span>The Four Foundations</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1B1B] tracking-tight">
            Engineered for Emotional Integrity.
            <span className="italic font-light block flame-gradient-text">
              Not Algorithmic Addiction.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4F4633] leading-relaxed">
            Every layer of Just Mature Mind is built around relational sovereignty, intentional communication, and mutual arrangements.
          </p>
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Pillar 1: Emotional Self-Mastery (Span 7) */}
          <BentoCard
            className="md:col-span-7"
            badge="Foundation 01"
            title="Emotional Self-Mastery"
            subtitle="Knowing your somatic triggers before making them someone else's emergency."
          >
            <div className="space-y-4 mt-2">
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#68645E] uppercase tracking-wider font-bold">
                    The 90-second neurochemical rule
                  </span>
                  <span className="text-[#2D6A4F] font-bold">
                    Regulated state
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#1C1B1B] leading-relaxed font-medium">
                  A somatic trigger lasts 90 seconds in blood chemistry. Everything after that is mental storytelling. Mature partners hold space for the nervous system to settle before speaking.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-white text-[11px] font-bold text-[#4F4633] border border-[#E7E2DA]">
                    Vagus nerve regulation
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white text-[11px] font-bold text-[#4F4633] border border-[#E7E2DA]">
                    Trigger ownership
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white text-[11px] font-bold text-[#4F4633] border border-[#E7E2DA]">
                    De-escalation protocol
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#2D6A4F] font-bold">
                <BrainCircuit className="w-4 h-4" />
                <span>Field-tested protocol taught in private repair clinics</span>
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
              <div className="p-3.5 rounded-2xl bg-[#FFEFEF] border border-[#FF5A60]/20 space-y-1">
                <span className="text-[10.5px] font-black uppercase tracking-wider text-[#BA1A1A]">
                  Low-context habit
                </span>
                <p className="text-xs text-[#4F4633] italic font-medium">
                  “I&apos;m fine. You should already know why I&apos;m quiet.”
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#E8F5E9] border border-[#2D6A4F]/20 text-[#1C1B1B] space-y-1 shadow-sm">
                <span className="text-[10.5px] font-black uppercase tracking-wider text-[#2D6A4F]">
                  Mature mind standard
                </span>
                <p className="text-xs text-[#1C1B1B] leading-relaxed font-semibold">
                  “I felt unsettled when our plans shifted suddenly. I love our time together, and predictability helps me feel safe.”
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#68645E] pt-1">
                <MessageSquareQuote className="w-4 h-4 text-[#FF5A60]" />
                <span>Expresses vulnerability without passive hostility</span>
              </div>
            </div>
          </BentoCard>

          {/* Pillar 3: Pattern Disruption (Span 5) */}
          <BentoCard
            className="md:col-span-5"
            badge="Foundation 03"
            title="Pattern Disruption"
            subtitle="Unlearning the exhausting dopamine loops of volatile dynamics."
          >
            <div className="space-y-4 mt-2">
              {/* Interactive Old vs New Toggle */}
              <div className="flex items-center p-1 rounded-xl bg-[#F3EFEA] border border-[#E7E2DA] text-xs font-bold">
                <button
                  onClick={() => setActiveTabPillar3("old")}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTabPillar3 === "old"
                      ? "bg-white text-[#BA1A1A] shadow-sm border border-[#E7E2DA]"
                      : "text-[#68645E] hover:text-[#1C1B1B]"
                  }`}
                >
                  Rollercoaster impulse
                </button>
                <button
                  onClick={() => setActiveTabPillar3("new")}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTabPillar3 === "new"
                      ? "bg-white text-[#2D6A4F] shadow-sm border border-[#E7E2DA]"
                      : "text-[#68645E] hover:text-[#1C1B1B]"
                  }`}
                >
                  Conscious stability
                </button>
              </div>

              {activeTabPillar3 === "old" ? (
                <div className="p-4 rounded-2xl bg-[#FFEFEF] border border-[#FF5A60]/20 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[#BA1A1A] font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>The anxiety-as-chemistry trap</span>
                  </div>
                  <p className="text-[#4F4633] leading-relaxed">
                    Confusing erratic behavior with butterflies. Chasing hot-and-cold signals to seek momentary dopamine validation.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-[#E8F5E9] border border-[#2D6A4F]/20 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[#2D6A4F] font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Regulated devotion</span>
                  </div>
                  <p className="text-[#4F4633] leading-relaxed">
                    Peaceful consistency. Choosing partners who show up clearly, communicate without riddles, and honor their agreements.
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs text-[#2D6A4F] font-bold">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Rewiring attachment from volatile to secure</span>
              </div>
            </div>
          </BentoCard>

          {/* Pillar 4: Curated Matchmaking & Introductions (Span 7) */}
          <BentoCard
            className="md:col-span-7"
            badge="Foundation 04"
            title="Curated Matchmaking &amp; Circles"
            subtitle="Double-blind verified human introductions with zero dopamine algorithms."
          >
            <div className="space-y-4 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] text-center space-y-1">
                  <span className="text-2xl font-black text-[#1C1B1B]">
                    100%
                  </span>
                  <p className="text-[11px] font-bold text-[#68645E]">
                    Identity &amp; EQ Vetted
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] text-center space-y-1">
                  <span className="text-2xl font-black text-[#BA1A1A]">
                    Zero
                  </span>
                  <p className="text-[11px] font-bold text-[#68645E]">
                    Ghosting Charter
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] text-center space-y-1">
                  <span className="text-2xl font-black text-[#2D6A4F]">
                    Weekly
                  </span>
                  <p className="text-[11px] font-bold text-[#68645E]">
                    Curated Introductions
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#FF5A60] shrink-0" />
                  <span className="font-bold text-[#1C1B1B]">
                    Curated for intentional singles &amp; couples across Africa, UK, US &amp; Europe.
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FFC629]/20 text-[#1C1B1B] text-[11px] font-black shrink-0">
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
