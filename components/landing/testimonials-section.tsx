"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles, CheckCircle2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  intent: string;
  intentKey: string;
  quote: string;
  outcome: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Elena",
    age: 36,
    location: "Austin, TX",
    intent: "Short-term fun",
    intentKey: "short_term_fun",
    quote:
      "We met for a bounded 4-week adventure between contracts. We were completely explicit on day one about our availability and end dates. It was the most electric, passionate, yet emotionally clean romance of my life.",
    outcome: "Ended cleanly with deep mutual respect.",
  },
  {
    id: "test-2",
    name: "Marcus",
    age: 44,
    location: "London, UK",
    intent: "Serious relationship",
    intentKey: "serious_relationship",
    quote:
      "After my divorce, dating apps felt like a minefield of ghosting and scorekeeping. Finding someone here who can say, 'I need 20 minutes to regulate before answering,' rather than stonewalling, changed everything.",
    outcome: "Together 14 months, zero passive aggression.",
  },
  {
    id: "test-3",
    name: "Julian",
    age: 31,
    location: "New York, NY",
    intent: "Hookups — same-night clarity",
    intentKey: "hookups",
    quote:
      "Attraction is everywhere; adult conduct is rare. Knowing that everyone here says what they want and leaves you feeling better than they found you makes desire exciting again, with zero anxiety spiral.",
    outcome: "Consensual, elevated intimacy.",
  },
  {
    id: "test-4",
    name: "Chloe & David",
    age: 41,
    location: "Seattle, WA",
    intent: "Marriage",
    intentKey: "marriage",
    quote:
      "No manufactured soulmate projections. We calibrated how we handle finances, sickness, and family boundaries before ever talking about rings. Calibrating for character before the altar made all the difference.",
    outcome: "Married 18 months with clear repair rituals.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="social-proof"
      className="py-20 md:py-32 bg-[#100C12] border-t border-[#2E2433] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241C29] border border-[#2E2433] text-[#FFB36B] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Outcomes Across Every Intent</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5EFE8] tracking-tight">
            Desire with Standards in Practice
          </h2>

          <p className="text-base text-[#B8AEB6] leading-relaxed">
            From same-night clarity to lifetime vows — see how emotional maturity upgrades connection for adults ages 25–60.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#1A141D] border border-[#2E2433] shadow-lg shadow-black/40 flex flex-col justify-between space-y-5 transition-colors hover:border-[#FF5A7A]/30"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#241C29] border border-[#2E2433] text-[#FF5A7A]">
                      {t.intent}
                    </span>
                  </div>
                  <Quote className="w-5 h-5 text-[#FFB36B]/40" />
                </div>

                <blockquote className="text-sm sm:text-base text-[#F5EFE8] leading-relaxed italic">
                  “{t.quote}”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#2E2433] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#F5EFE8] block">
                    {t.name}, {t.age}
                  </span>
                  <span className="text-[#B8AEB6]">{t.location}</span>
                </div>

                <div className="flex items-center gap-1.5 text-[#FFB36B] font-medium text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
