"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Flame,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Heart,
  X,
  MessageCircle,
  Bolt,
  Compass,
  Check,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CardTilt } from "@/components/ui/card-tilt";

export function Hero() {
  const [matchActionState, setMatchActionState] = useState<"neutral" | "liked" | "passed">("neutral");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const triggerMatchAction = (action: "liked" | "passed") => {
    setMatchActionState(action);
    setTimeout(() => setMatchActionState("neutral"), 1600);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF5ED] via-[#FCF9F8] to-[#FAF8F5] border-b border-[#E7E2DA]/80">
      {/* Ambient Flame Radiance Glows */}
      <div className="absolute -top-32 right-1/4 w-[650px] h-[650px] rounded-full bg-[#FF5A60]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-80 -left-28 w-[550px] h-[550px] rounded-full bg-[#FFA41C]/10 blur-3xl pointer-events-none" />

      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-28 relative z-10">
        {/* Main Hero Grid: Left Pitch & Right Interactive 3D Dating Profile Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-center">
          {/* Left: Headline, Editorial Narrative & Magnetic CTAs */}
          <div className="lg:col-span-6 2xl:col-span-6 flex flex-col items-start space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5A60]/10 border border-[#FF5A60]/20 text-[#FF5A60] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-[#FF5A60]" />
              <span>The Spicy Matchmaking App for High-EQ Adults</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl font-black text-[#1C1B1B] tracking-tight leading-[1.03]">
                Attraction is easy.
                <span className="block flame-gradient-text mt-1">
                  Adult is rare.
                </span>
              </h1>

              <p className="text-lg sm:text-xl 2xl:text-2xl text-[#4F4633] leading-relaxed max-w-2xl 2xl:max-w-3xl font-normal">
                Find people who say what they want, mean what they say, and leave you feeling better than they found you. Experience the magnetic visual rush of top-tier dating—vetted for emotional regulation, boundary architecture, and sovereign clarity.
              </p>

              {/* Editorial Standard Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E7E2DA] shadow-sm flex items-start gap-4 text-sm sm:text-base text-[#68645E] max-w-2xl">
                <Sparkles className="w-5 h-5 text-[#FFA41C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1C1B1B] block font-bold mb-0.5">
                    The Just Mature Mind Standard:
                  </strong>
                  Leads with desire, filters for conduct — maturity positioned as the upgrade to fun, not the enemy of it.
                </div>
              </div>
            </div>

            {/* Magnetic CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                onClick={() => scrollToSection("join-cohort")}
                variant="flame"
                strength={9}
                textStrength={4}
                className="px-9 py-4 text-base font-extrabold shadow-[0_8px_30px_rgba(255,90,96,0.38)]"
              >
                <Bolt className="w-5 h-5" />
                <span>Find Your Match</span>
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection("sparks-showcase")}
                variant="outline"
                strength={7}
                textStrength={3}
                className="px-8 py-4 text-base font-bold"
              >
                <Compass className="w-5 h-5 text-[#FFA41C]" />
                <span>Explore The Spectrum</span>
              </MagneticButton>
            </div>

            {/* Social Proof Strip with Authentic Avatars (Nigerians, Africans, Interracial) */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E7E2DA]/90 w-full max-w-2xl">
              <div className="flex items-center gap-3.5">
                <div className="flex -space-x-3.5 overflow-hidden">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                    <Image
                      src="/images/marcus_black_man.png"
                      alt="Marcus profile avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                    <Image
                      src="/images/nigerian_woman_radiant.jpg"
                      alt="Amina profile avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                    <Image
                      src="/images/maya_asian_woman.png"
                      alt="Maya profile avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                    <Image
                      src="/images/david_architect_man.png"
                      alt="David profile avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-base font-extrabold text-[#1C1B1B]">12,600+ Vetted Members</div>
                  <div className="text-xs text-[#68645E]">Lagos • London • NYC • Atlanta • Paris</div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F5E9] text-[#2D6A4F] text-xs font-extrabold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Ghosting Charter</span>
              </div>
            </div>
          </div>

          {/* Right: 3D Perspective Card Stack (LazyInterface Style with Spring Tilt) */}
          <div className="lg:col-span-6 2xl:col-span-6 relative flex justify-center lg:justify-end items-center py-4">
            <CardTilt
              maxTilt={7}
              glareOpacity={0.12}
              className="relative w-full max-w-[540px] 2xl:max-w-[620px]"
            >
              {/* Feature Hero Dating Card (Passionate Interracial Terrace Couple) */}
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                <Image
                  src="/images/interracial_couple_terrace.jpg"
                  alt="Attractive interracial couple laughing joyfully on rooftop terrace"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Top Floating Match Pill */}
                <div className="absolute top-4 left-4 right-4 p-3 rounded-2xl glass-pill shadow-lg flex items-center justify-between z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flame-gradient flex items-center justify-center text-white shadow-sm">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#1C1B1B] leading-tight">
                        Instant Magnetic Chemistry
                      </div>
                      <div className="text-[10px] font-semibold text-[#68645E]">
                        Same-Night Clarity • Intent Aligned
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#2D6A4F] text-white text-[10.5px] font-bold flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    98% Compatibility
                  </span>
                </div>

                {/* Action Feedback Overlay */}
                {matchActionState !== "neutral" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 flex items-center justify-center z-20 backdrop-blur-xs ${
                      matchActionState === "liked" ? "bg-[#FF5A60]/30" : "bg-black/40"
                    }`}
                  >
                    <div className="px-6 py-3 rounded-2xl bg-white text-[#1C1B1B] font-extrabold text-lg shadow-2xl flex items-center gap-2">
                      {matchActionState === "liked" ? (
                        <>
                          <Heart className="w-6 h-6 text-[#FF5A60] fill-[#FF5A60]" />
                          <span>Mutual Spark Verified!</span>
                        </>
                      ) : (
                        <>
                          <X className="w-6 h-6 text-[#BA1A1A]" />
                          <span>Passed with Respect</span>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Bottom Profile Details & Interactive Action Pill Bar */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FF5A60] text-white text-[10.5px] font-extrabold uppercase tracking-wider">
                      Match Archetype
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10.5px] font-semibold">
                      Boundary Verified
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-lg font-bold leading-snug mb-3 drop-shadow-sm">
                    “The hottest thing in the room was knowing exactly what we both wanted before we even touched.”
                  </blockquote>

                  {/* Tactile Action Triggers */}
                  <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                    <div className="text-xs text-white/90 font-medium flex items-center gap-1.5">
                      <Bolt className="w-4 h-4 text-[#FFC629]" />
                      <span>Sovereign Sexual Pacing</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => triggerMatchAction("passed")}
                        className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-all cursor-pointer active:scale-90"
                        title="Pass"
                        aria-label="Pass on match"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => triggerMatchAction("liked")}
                        className="w-10 h-10 rounded-full flame-gradient text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        title="Super Match"
                        aria-label="Super Match"
                      >
                        <Heart className="w-5 h-5 fill-white" />
                      </button>
                      <button
                        onClick={() => scrollToSection("join-cohort")}
                        className="w-9 h-9 rounded-full bg-[#FFC629] text-[#1C1B1B] flex items-center justify-center font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        title="Direct Clarity Message"
                        aria-label="Send direct message"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Profile Badge 1: Amina (Nigerian International Dater) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-3 sm:-left-6 z-20 w-64 p-3.5 rounded-2xl bg-white shadow-xl border border-[#E7E2DA]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 ring-2 ring-[#FF5A60]">
                    <Image
                      src="/images/nigerian_woman_radiant.jpg"
                      alt="Amina profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-sm font-extrabold text-[#1C1B1B] truncate">
                      Amina, 33
                      <Check className="w-3.5 h-3.5 text-[#2D6A4F] stroke-[3]" />
                    </div>
                    <div className="text-[11px] text-[#68645E] truncate">Global Health • Lagos / London</div>
                    <span className="inline-block px-2 py-0.5 mt-0.5 rounded-full bg-[#E8F5E9] text-[#2D6A4F] text-[9.5px] font-bold">
                      Attachment: Secure
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-[10.5px] text-[#4F4633] bg-[#F3EFEA] p-2 rounded-lg italic leading-snug">
                  “My repair prompt: If friction sparks, we talk with empathy before defensiveness.”
                </div>
              </motion.div>

              {/* Floating Profile Badge 2: Tunde (Nigerian Tech Founder) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-6 -right-3 sm:-right-6 z-20 w-64 p-3.5 rounded-2xl bg-white shadow-xl border border-[#E7E2DA]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 ring-2 ring-[#FFA41C]">
                    <Image
                      src="/images/nigerian_man_lagos.jpg"
                      alt="Tunde profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-sm font-extrabold text-[#1C1B1B] truncate">
                      Tunde, 37
                      <Check className="w-3.5 h-3.5 text-[#FFA41C] stroke-[3]" />
                    </div>
                    <div className="text-[11px] text-[#68645E] truncate">Founder &amp; Investor • Lagos / NYC</div>
                    <span className="inline-block px-2 py-0.5 mt-0.5 rounded-full bg-[#FF5A60]/10 text-[#FF5A60] text-[9.5px] font-bold">
                      Intent: Sovereign Devotion
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-[10.5px] text-[#4F4633] bg-[#F3EFEA] p-2 rounded-lg italic leading-snug">
                  “Seeking: Unvarnished honesty, playful spontaneity, and emotional groundedness.”
                </div>
              </motion.div>
            </CardTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
