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
      id="core-pillars"
      className="py-20 md:py-32 bg-[#100C12] border-t border-[#2E2433] relative overflow-hidden"
    >
      {/* Subtle Ambient Radial Shimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,90,122,0.04)_0%,rgba(255,179,107,0.02)_50%,transparent_75%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header with On-Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241C29] border border-[#2E2433] text-[#FFB36B] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Four Foundations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5EFE8] tracking-tight">
            Engineered for Emotional Integrity. <br />
            <span className="font-serif italic font-normal text-[#FFB36B]">
              Not Algorithmic Addiction.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#B8AEB6] leading-relaxed">
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
              <div className="p-5 rounded-2xl bg-[#241C29] border border-[#2E2433] space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#B8AEB6] uppercase tracking-wider">
                    The 90-second neurochemical rule
                  </span>
                  <span className="text-[#FFB36B] font-mono font-bold">
                    Regulated state
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#F5EFE8] leading-relaxed">
                  A somatic trigger lasts 90 seconds in blood chemistry. Everything after that is mental storytelling. Mature partners hold space for the nervous system to settle before speaking.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-[#1A141D] text-[11px] font-semibold text-[#F5EFE8] border border-[#2E2433]">
                    Vagus nerve regulation
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#1A141D] text-[11px] font-semibold text-[#F5EFE8] border border-[#2E2433]">
                    Trigger ownership
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#1A141D] text-[11px] font-semibold text-[#F5EFE8] border border-[#2E2433]">
                    De-escalation protocol
                  </span>
                </div>
              </div>

              {/* Grounded Credibility: Zero Fake Percentages */}
              <div className="flex items-center gap-2 text-xs text-[#FFB36B] font-semibold">
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
              <div className="p-3.5 rounded-2xl bg-[#241C29] border border-[#2E2433] space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5484D]">
                  Low-context habit
                </span>
                <p className="text-xs text-[#B8AEB6] italic">
                  “I&apos;m fine. You should already know why I&apos;m quiet.”
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#100C12] border border-[#FF5A7A]/30 text-[#F5EFE8] space-y-1 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB36B]">
                  Mature mind standard
                </span>
                <p className="text-xs text-[#F5EFE8] leading-relaxed">
                  “I felt unsettled when our plans shifted suddenly. I love our time together, and predictability helps me feel safe.”
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#B8AEB6] pt-1">
                <MessageSquareQuote className="w-4 h-4 text-[#FF5A7A]" />
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
              <div className="flex items-center p-1 rounded-xl bg-[#241C29] border border-[#2E2433] text-xs font-semibold">
                <button
                  onClick={() => setActiveTabPillar3("old")}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTabPillar3 === "old"
                      ? "bg-[#E5484D]/20 text-[#E5484D] border border-[#E5484D]/40"
                      : "text-[#B8AEB6] hover:text-[#F5EFE8]"
                  }`}
                >
                  Rollercoaster impulse
                </button>
                <button
                  onClick={() => setActiveTabPillar3("new")}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTabPillar3 === "new"
                      ? "bg-[#FFB36B]/20 text-[#FFB36B] border border-[#FFB36B]/40"
                      : "text-[#B8AEB6] hover:text-[#F5EFE8]"
                  }`}
                >
                  Conscious stability
                </button>
              </div>

              {activeTabPillar3 === "old" ? (
                <div className="p-4 rounded-2xl bg-[#E5484D]/10 border border-[#E5484D]/20 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[#E5484D] font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>The anxiety-as-chemistry trap</span>
                  </div>
                  <p className="text-[#B8AEB6] leading-relaxed">
                    Confusing erratic behavior with butterflies. Chasing hot-and-cold signals to seek momentary validation.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-[#FFB36B]/10 border border-[#FFB36B]/20 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[#FFB36B] font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Regulated devotion</span>
                  </div>
                  <p className="text-[#B8AEB6] leading-relaxed">
                    Peaceful consistency. Choosing partners who show up clearly, communicate without riddles, and honor their agreements.
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs text-[#B8AEB6]">
                <RefreshCw className="w-3.5 h-3.5 text-[#FFB36B]" />
                <span>Rewiring attachment from volatile to secure</span>
              </div>
            </div>
          </BentoCard>

          {/* Pillar 4: The Mature Community (Span 7) */}
          <BentoCard
            className="md:col-span-7"
            badge="Foundation 04"
            title="The Curated Circle"
            subtitle="Peer discussions and explicit mutual arrangement spaces curated for growth."
          >
            <div className="space-y-4 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-[#241C29] border border-[#2E2433] text-center space-y-1">
                  <span className="text-2xl font-extrabold text-[#F5EFE8]">
                    8,400+
                  </span>
                  <p className="text-[11px] font-semibold text-[#B8AEB6]">
                    Vetted members
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#241C29] border border-[#2E2433] text-center space-y-1">
                  <span className="text-2xl font-extrabold text-[#FFB36B]">
                    Zero
                  </span>
                  <p className="text-[11px] font-semibold text-[#B8AEB6]">
                    Superficial ghosting
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#241C29] border border-[#2E2433] text-center space-y-1">
                  <span className="text-2xl font-extrabold text-[#FF5A7A]">
                    Weekly
                  </span>
                  <p className="text-[11px] font-semibold text-[#B8AEB6]">
                    Live repair clinics
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#100C12] border border-[#2E2433] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#FF5A7A] shrink-0" />
                  <span className="font-semibold text-[#F5EFE8]">
                    Curated for professionals, creatives, and intentional adults ages 25–60.
                  </span>
                </div>
                <span className="font-mono text-[11px] font-bold text-[#FFB36B] shrink-0">
                  Invite only
                </span>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
