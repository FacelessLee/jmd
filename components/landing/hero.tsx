"use client";

import React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  Sparkles,
  ArrowDown,
  ShieldCheck,
  Flame,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  const scrollToDeck = () => {
    document.getElementById("dilemma-deck")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToJoin = () => {
    document.getElementById("join-circle")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Micro-Grid & Subtle Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12131608_1px,transparent_1px),linear-gradient(to_bottom,#12131608_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-7"
          >
            {/* Editorial Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 shadow-sm text-xs font-semibold text-[#121316]">
              <span className="flex h-2 w-2 rounded-full bg-[#FF5A5F]" />
              <span>Beyond Superficial Swipe Culture</span>
              <span className="text-neutral-300">•</span>
              <span className="text-[#2A4B43] font-bold">Intentional Compatibility</span>
            </div>

            {/* High-Impact Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#121316] tracking-tight leading-[1.08]">
              Dating Got Complicated. <br />
              <span className="font-serif italic font-normal text-[#2A4B43]">
                Maturity
              </span>{" "}
              Makes It Simple.
            </h1>

            {/* Grounded Subheadline (No AI Slop) */}
            <p className="text-lg md:text-xl text-[#5B616E] leading-relaxed max-w-2xl">
              The platform for emotional clarity, conscious communication, and resilient partnerships. Step out of dopamine-chasing loops into psychological safety and mutual arrangements.
            </p>

            {/* Dual CTAs with LazyInterface Magnetic Cursor Pull */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                variant="primary"
                strength={8}
                onClick={scrollToDeck}
                className="px-7 py-4 text-sm uppercase tracking-wider font-bold shadow-lg shadow-[#FF5A5F]/25"
              >
                <Sparkles className="w-4 h-4" />
                Explore the Dilemma Deck
              </MagneticButton>

              <MagneticButton
                variant="outline"
                strength={6}
                onClick={scrollToJoin}
                className="px-7 py-4 text-sm font-semibold text-[#121316]"
              >
                Join the Circle
                <ArrowDown className="w-4 h-4 text-[#5B616E]" />
              </MagneticButton>
            </div>

            {/* Social Proof & Metrics Strip (Inspired by Reference Images) */}
            <div className="pt-6 border-t border-black/5 flex flex-wrap items-center gap-8 text-xs font-medium text-[#5B616E]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#2A4B43] text-white text-[11px] font-bold flex items-center justify-center">
                    ER
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#FF5A5F] text-white text-[11px] font-bold flex items-center justify-center">
                    MK
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#386358] text-white text-[11px] font-bold flex items-center justify-center">
                    SL
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[#121316] text-sm">8,400+ Members</div>
                  <span>High-EQ Professionals & Creatives</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#2A4B43] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Tolerance for Manipulation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Fanned Card Preview (Bumble/Tinder meets LazyInterface) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Interactive Ambient Aura */}
            <div className="relative w-full max-w-[360px] h-[480px]">
              {/* Background Fanned Card 3 (Lowest layer) */}
              <motion.div
                animate={{ rotate: 10, x: 28, y: 15 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="absolute inset-0 rounded-3xl bg-[#2A4B43] text-white p-6 shadow-xl flex flex-col justify-between select-none opacity-85"
              >
                <div className="flex justify-between items-center text-xs opacity-75">
                  <span>Attachment Calibration</span>
                  <span>EQ 94%</span>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest uppercase font-mono text-[#FF7E40]">
                    Pacing Principle
                  </span>
                  <h4 className="text-lg font-bold">
                    “Chemistry is a spark. Character is the hearth.”
                  </h4>
                </div>
                <div className="text-xs opacity-60">Sovereign Agreements</div>
              </motion.div>

              {/* Background Fanned Card 2 (Middle layer) */}
              <motion.div
                animate={{ rotate: -8, x: -24, y: 8 }}
                transition={{ type: "spring", stiffness: 140, damping: 22 }}
                className="absolute inset-0 rounded-3xl bg-white border border-black/10 p-6 shadow-2xl flex flex-col justify-between select-none"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FF5A5F]/10 text-[#FF5A5F] font-bold">
                    Pattern Disruption
                  </span>
                  <Flame className="w-4 h-4 text-[#FF5A5F]" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block mb-1">
                    Red Flag Loop:
                  </span>
                  <p className="text-sm font-semibold text-[#121316]">
                    Stonewalling after conflict to assert dominance.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#FBF9F5] text-xs text-[#2A4B43] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Growth: Regulated 20-min pause with clear return time.</span>
                </div>
              </motion.div>

              {/* Front Floating Interactive Card (Top layer) */}
              <motion.div
                whileHover={{ y: -8, rotate: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative z-20 w-full h-full rounded-3xl bg-white border border-black/10 shadow-[0_24px_50px_rgba(0,0,0,0.12)] p-7 flex flex-col justify-between"
              >
                {/* Top Pill Bar */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2A4B43]/10 text-[#2A4B43]">
                    <HeartHandshake className="w-3.5 h-3.5" />
                    Growth Space
                  </span>
                  <span className="text-xs font-bold text-[#FF5A5F] px-2.5 py-0.5 rounded-md bg-[#FF5A5F]/10">
                    Live Demo
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-4 my-auto">
                  <div className="text-xs uppercase font-mono tracking-wider text-[#5B616E]">
                    Scenario 01 • Emotional Safety
                  </div>
                  <h3 className="text-xl font-extrabold text-[#121316] leading-snug">
                    “Can we talk about what happened earlier without either of us needing to be the bad guy?”
                  </h3>
                  <div className="p-3.5 rounded-2xl bg-[#FBF9F5] border border-black/5 text-xs text-[#5B616E] leading-relaxed">
                    <strong className="text-[#121316] block mb-1">
                      High-Context Script:
                    </strong>
                    Replaces defensive scorekeeping with collaborative repair.
                  </div>
                </div>

                {/* Bottom Card Affordance */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#2A4B43]">
                    Interactive Deck Below ↓
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    Framer Physics
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
