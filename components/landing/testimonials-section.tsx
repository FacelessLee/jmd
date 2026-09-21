"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkles, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import { CardTilt } from "@/components/ui/card-tilt";

interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  intent: string;
  photo: string;
  quote: string;
  outcome: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Chioma & Liam",
    age: 36,
    location: "London & Lagos",
    intent: "Conscious Marriage",
    photo: "/images/interracial_couple_terrace.jpg",
    quote:
      "We started as an international connection between London and Lagos. No manufactured soulmate fantasies—we calibrated how we handle finances, cultural traditions, and family boundaries before talking about rings. Married 18 months with zero passive-aggression.",
    outcome: "Married 18 months • Clear repair rituals.",
  },
  {
    id: "test-2",
    name: "Tunde",
    age: 37,
    location: "Lagos / New York",
    intent: "Sovereign Long-Term",
    photo: "/images/nigerian_man_lagos.jpg",
    quote:
      "As a founder running teams across continents, typical dating apps felt like a minefield of games and unsaid expectations. Finding someone who can say, 'I need 20 minutes to regulate before answering,' rather than stonewalling, changed my standard forever.",
    outcome: "Together 14 months • 100% transparent pacing.",
  },
  {
    id: "test-3",
    name: "Amina",
    age: 33,
    location: "Abuja / London",
    intent: "Short-Term Clarity",
    photo: "/images/nigerian_woman_radiant.jpg",
    quote:
      "Attraction is everywhere; adult conduct is rare. We met for a bounded 6-week adventure between contracts. We were explicit about our schedules and boundaries on day one. It was the most electric, passionate, and emotionally clean romance of my life.",
    outcome: "Ended cleanly with deep lifelong mutual respect.",
  },
  {
    id: "test-4",
    name: "Elena & David",
    age: 41,
    location: "San Francisco / NYC",
    intent: "Devoted Partnership",
    photo: "/images/interracial_couple_coffee.jpg",
    quote:
      "Knowing that both of us were screened for somatic regulation and zero-ghosting removed 90% of dating anxiety. When friction sparks, we unpack it over espresso with genuine curiosity rather than defensiveness.",
    outcome: "Regulated devotion • Co-authored life roadmap.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="social-proof"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E2DA] text-[#FF5A60] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Outcomes Across Every Intent</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1B1B] tracking-tight">
            Desire with Standards in Practice
          </h2>

          <p className="text-base sm:text-lg text-[#4F4633] leading-relaxed">
            From same-night clarity to lifetime vows — see how emotional maturity elevates connections for adults across Lagos, London, NYC, and beyond.
          </p>
        </motion.div>

        {/* Testimonials Grid with Photos & 3D CardTilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <CardTilt
                maxTilt={4}
                glareOpacity={0.08}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E7E2DA] shadow-md hover:shadow-xl flex flex-col justify-between space-y-6 h-full"
              >
                <div className="space-y-5">
                  {/* Header Profile with Image */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-[#FF5A60]/30 shrink-0">
                        <Image
                          src={t.photo}
                          alt={`${t.name} photo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-lg font-black text-[#1C1B1B]">
                          {t.name}, {t.age}
                          <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                        </div>
                        <span className="text-xs text-[#68645E] block font-medium">
                          {t.location}
                        </span>
                      </div>
                    </div>

                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#FAF8F5] border border-[#E7E2DA] text-[#FF5A60]">
                      {t.intent}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#1C1B1B] leading-relaxed font-medium italic">
                    “{t.quote}”
                  </p>
                </div>

                {/* Outcome Badge */}
                <div className="pt-5 border-t border-[#E7E2DA] flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#2D6A4F] font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{t.outcome}</span>
                  </span>
                  <span className="text-xs font-bold text-[#68645E]">
                    Verified Cohort Member
                  </span>
                </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
