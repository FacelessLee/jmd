"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { INTENTS, INTENT_KEYS, IntentKey } from "@/lib/intents";
import {
  Sparkles,
  Zap,
  Wine,
  Coffee,
  Handshake,
  CheckCircle2,
  Shield,
  Heart,
  Timer,
  Flame,
  ArrowRight,
} from "lucide-react";
import { CardTilt } from "@/components/ui/card-tilt";

interface SpectrumCard {
  id: string;
  category: string;
  tagIcon: React.ReactNode;
  tagColor: string;
  quoteTitle: string;
  headline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  prompt: string;
  metricLabel: string;
  metricValue: string;
  statusBadge: string;
  matchingIntents: IntentKey[];
}

const SPECTRUM_CARDS: SpectrumCard[] = [
  {
    id: "card-1",
    category: "Short-Term Fun & Travel",
    tagIcon: <Zap className="w-3.5 h-3.5" />,
    tagColor: "bg-[#FF5A60] text-white",
    quoteTitle: "“A Season, Not a Saga”",
    headline: "Festival & Travel Chemistry",
    description: "Playful summer wanderlust, deep laughs, and explicit bounded dates without false promises or ghosting.",
    imageSrc: "/images/maya_asian_woman.png",
    imageAlt: "Vibrant creative woman laughing joyfully",
    prompt: "“I travel frequently between Lagos and Europe. Let's make this chapter memorable, passionate, and respectful.”",
    metricLabel: "Transparency",
    metricValue: "100% Upfront Clarity",
    statusBadge: "Spicy & Sovereign",
    matchingIntents: ["short_term_fun", "hookups", "nsa"],
  },
  {
    id: "card-2",
    category: "Date Night Spark",
    tagIcon: <Wine className="w-3.5 h-3.5" />,
    tagColor: "bg-[#FFA41C] text-white",
    quoteTitle: "“Attraction is Easy. Adult is Rare.”",
    headline: "Speakeasy Chemistry",
    description: "Electric chemistry, unhurried eye contact, and sovereign boundary agreements before the bill arrives.",
    imageSrc: "/images/couple_stylish_30s.png",
    imageAlt: "Intimate stylish couple laughing together over evening cocktails",
    prompt: "“I love high chemistry over mezcal, but physical intimacy moves at the speed of mutual emotional comfort.”",
    metricLabel: "Consent Pacing",
    metricValue: "Somatic Consent",
    statusBadge: "Magnetic EQ",
    matchingIntents: ["short_term_fun", "long_term_fun", "hookups"],
  },
  {
    id: "card-3",
    category: "Slow Burn Devotion",
    tagIcon: <Coffee className="w-3.5 h-3.5" />,
    tagColor: "bg-[#2D6A4F] text-white",
    quoteTitle: "“Chemistry is Spark. Character is Hearth.”",
    headline: "Interracial & International",
    description: "Relaxed nervous systems, Sunday morning coffee rituals, and deeply aligned long-term life values across borders.",
    imageSrc: "/images/interracial_couple_coffee.jpg",
    imageAlt: "Radiant Nigerian woman and her partner laughing together over coffee",
    prompt: "“Non-negotiable: We celebrate each other’s ambitions, listen before defending, and repair within 24 hours.”",
    metricLabel: "Attachment",
    metricValue: "Secure Attachment",
    statusBadge: "99% Repair Score",
    matchingIntents: ["serious_relationship", "marriage", "long_term_fun"],
  },
  {
    id: "card-4",
    category: "Intentional Partnership",
    tagIcon: <Handshake className="w-3.5 h-3.5" />,
    tagColor: "bg-[#FFC629] text-[#1C1B1B]",
    quoteTitle: "“Clear Terms. Zero Games.”",
    headline: "Sovereign Marriage & Life",
    description: "High-achieving founders, creatives, and executives seeking lifelong partnership built on integrity and mutual uplift.",
    imageSrc: "/images/nigerian_man_lagos.jpg",
    imageAlt: "Charismatic Nigerian tech founder smiling warmly in tailored blazer",
    prompt: "“Splitting time between Lagos and London. Looking for an emotionally regulated life partner who values family and vision.”",
    metricLabel: "Grounding",
    metricValue: "Regulated Grounding",
    statusBadge: "Cohort Vetted",
    matchingIntents: ["serious_relationship", "marriage"],
  },
];

export function ChemistrySpectrum() {
  const [selectedIntent, setSelectedIntent] = useState<IntentKey>("serious_relationship");

  useEffect(() => {
    const saved = localStorage.getItem("jmm_intent") as IntentKey;
    if (saved && INTENTS[saved]) {
      setSelectedIntent(saved);
    }

    const handleExternalIntent = (e: Event) => {
      const custom = e as CustomEvent<IntentKey>;
      if (custom.detail && INTENTS[custom.detail]) {
        setSelectedIntent(custom.detail);
      }
    };

    window.addEventListener("intent_change", handleExternalIntent);
    return () => window.removeEventListener("intent_change", handleExternalIntent);
  }, []);

  const handleSelectIntent = (key: IntentKey) => {
    setSelectedIntent(key);
    if (typeof window !== "undefined") {
      localStorage.setItem("jmm_intent", key);
    }
  };

  const activeIntentConfig = INTENTS[selectedIntent];

  return (
    <section className="w-full py-24 bg-[#FAF8F5] border-b border-[#E7E2DA]/80" id="sparks-showcase">
      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-28">
        {/* Post-Hero Intent Filter Bridge (Requested by User) */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#68645E] shadow-sm text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 border border-[#E7E2DA]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A60] animate-pulse" />
            <span>Filter Chemistry by Explicit Intent • Zero Guesswork</span>
          </div>

          <p className="text-sm sm:text-base text-[#68645E] mb-5 max-w-xl">
            Declare your current relational posture. Every spark is celebrated — zero judgment, zero false expectations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl">
            {INTENT_KEYS.map((key) => {
              const intent = INTENTS[key];
              const isSelected = selectedIntent === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSelectIntent(key)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 select-none ${
                    isSelected
                      ? "bg-[#1C1B1B] text-white shadow-lg scale-[1.03] ring-2 ring-[#FF5A60]"
                      : "bg-white text-[#1C1B1B] border border-[#E7E2DA] hover:border-[#FF5A60] hover:text-[#FF5A60] shadow-sm"
                  }`}
                >
                  <span>{intent.label}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A60]" />}
                </button>
              );
            })}
          </div>

          {/* Active Intent Rationale Bar */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIntent}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-6 p-4 rounded-2xl bg-white border border-[#E7E2DA] shadow-sm max-w-2xl flex items-center gap-3 text-left text-xs sm:text-sm text-[#4F4633]"
            >
              <Sparkles className="w-5 h-5 text-[#FFA41C] shrink-0" />
              <div>
                <span className="font-extrabold text-[#1C1B1B] mr-1.5">
                  {activeIntentConfig.label}:
                </span>
                <span>{activeIntentConfig.whyItWorks}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A60]/10 text-[#FF5A60] text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>The Modern Relational Spectrum</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1B1B] tracking-tight mb-4">
            Every Type of Spark.
            <span className="italic font-light block flame-gradient-text">
              One Standard of Conduct.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4F4633] leading-relaxed">
            Whether you want exhilarating summer escapades, electric chemistry over cocktails, or lifelong cross-border marriage — we filter for emotional maturity so you never get manipulated.
          </p>
        </div>

        {/* 4 Rich Visual Dynamic Cards Grid with 3D Mouse Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECTRUM_CARDS.map((card, idx) => {
            const isIntentMatched = card.matchingIntents.includes(selectedIntent);
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`transition-all duration-300 ${
                  isIntentMatched ? "ring-2 ring-[#FF5A60] rounded-3xl" : "opacity-85 hover:opacity-100"
                }`}
              >
                <CardTilt
                  maxTilt={6}
                  glareOpacity={0.12}
                  className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl flex flex-col border border-[#E7E2DA] h-full"
                >
                  {/* Photo Area */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3EFEA]">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Top Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass-pill text-[#1C1B1B] text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                      {card.category}
                    </span>

                    {/* Top Action Icon */}
                    <span
                      className={`absolute top-4 right-4 w-8 h-8 rounded-full ${card.tagColor} flex items-center justify-center shadow`}
                    >
                      {card.tagIcon}
                    </span>

                    {/* Bottom Content overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs font-bold text-[#FFC629] flex items-center gap-1 mb-1">
                        <Timer className="w-3.5 h-3.5" />
                        <span>{card.quoteTitle}</span>
                      </div>
                      <div className="text-xl font-black">{card.headline}</div>
                      <p className="text-xs text-white/90 line-clamp-2 mt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Card Prompt & Metric */}
                  <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                    <div className="text-xs text-[#4F4633] bg-[#F3EFEA] p-3 rounded-xl border border-[#E7E2DA] mb-4 leading-relaxed">
                      <strong className="text-[#1C1B1B] block mb-0.5">Prompt:</strong>
                      {card.prompt}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold pt-3 border-t border-[#E7E2DA]">
                      <span className="text-[#2D6A4F] flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{card.metricValue}</span>
                      </span>
                      <span className="text-[#FF5A60]">{card.statusBadge}</span>
                    </div>
                  </div>
                </CardTilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
