"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Layers,
  Handshake,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Heart,
  Globe,
  Check,
  X,
  Lock,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CardTilt } from "@/components/ui/card-tilt";

interface CohortMember {
  id: string;
  name: string;
  age: number;
  location: string;
  role: string;
  intent: string;
  intentColor: string;
  quote: string;
  eqScore: string;
  eqState: string;
  matchScore: string;
  photo: string;
  attachmentStyle: string;
  repairRule: string;
  nonNegotiable: string;
}

const COHORT_MEMBERS: CohortMember[] = [
  {
    id: "m-1",
    name: "Tunde",
    age: 37,
    location: "Lagos / New York",
    role: "Tech Founder & Angel Investor",
    intent: "Conscious Marriage",
    intentColor: "bg-[#FF5A60]/10 text-[#FF5A60]",
    quote: "“Spontaneous trips, lively debates, and clear communication with someone who enjoys sovereign independence and mutual depth.”",
    eqScore: "EQ 94%",
    eqState: "Secure",
    matchScore: "97% Match",
    photo: "/images/nigerian_man_lagos.jpg",
    attachmentStyle: "Secure & Regulated",
    repairRule: "If tensions spark, we take a 20-minute somatic breath before speaking. Zero scorekeeping.",
    nonNegotiable: "High autonomy, intellectual curiosity, and zero passive-aggressive testing.",
  },
  {
    id: "m-2",
    name: "Amina",
    age: 33,
    location: "Abuja / London",
    role: "Global Health Consultant & Writer",
    intent: "Slow Burn Devotion",
    intentColor: "bg-[#E8F5E9] text-[#2D6A4F]",
    quote: "“Intimate dinners, shared vinyl collections, and a partner who knows how to de-escalate with humor and emotional presence.”",
    eqScore: "EQ 97%",
    eqState: "Regulated",
    matchScore: "98% Match",
    photo: "/images/nigerian_woman_radiant.jpg",
    attachmentStyle: "Secure",
    repairRule: "We address uncomfortable truths within 24 hours over espresso with gentle eye contact.",
    nonNegotiable: "Radical honesty about emotional availability and mutual respect.",
  },
  {
    id: "m-3",
    name: "David & Elena",
    age: 40,
    location: "London / New York",
    role: "Architect & Creative Director",
    intent: "Interracial Partnership",
    intentColor: "bg-[#FFC629]/20 text-[#1C1B1B]",
    quote: "“Calibrating character and lifestyle boundaries before talking about rings made our cross-continental relationship effortless.”",
    eqScore: "EQ 98%",
    eqState: "Married 18 mos",
    matchScore: "99% Match",
    photo: "/images/interracial_couple_terrace.jpg",
    attachmentStyle: "Interdependent",
    repairRule: "Sunday morning alignment check-ins; we never sleep on unaddressed misunderstandings.",
    nonNegotiable: "Equal devotion to mutual personal growth and cultural celebration.",
  },
  {
    id: "m-4",
    name: "Marcus & Sophie",
    age: 35,
    location: "Lagos / Lisbon",
    role: "International Executive & Designer",
    intent: "International Romance",
    intentColor: "bg-[#FFA41C]/15 text-[#FFA41C]",
    quote: "“We met across time zones with complete transparency about our travel calendars and bounded romantic adventures.”",
    eqScore: "EQ 95%",
    eqState: "Travel Aligned",
    matchScore: "96% Match",
    photo: "/images/international_couple_sunset.jpg",
    attachmentStyle: "Sovereign Regulated",
    repairRule: "Clear video check-ins when traveling; no assumption storytelling.",
    nonNegotiable: "Passionate wanderlust, mutual career respect, and transparent scheduling.",
  },
];

export function MatchmakingProtocol() {
  const [selectedMember, setSelectedMember] = useState<CohortMember | null>(null);

  const scrollToApply = () => {
    document.getElementById("join-cohort")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-24 bg-white border-b border-[#E7E2DA]" id="matchmaking-protocol">
      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-28">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A60]/10 text-[#FF5A60] text-xs font-bold uppercase tracking-wider mb-3">
            <Handshake className="w-4 h-4" />
            <span>Conscious Matchmaking Architecture</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1B1B] tracking-tight mb-4">
            Curated Matchmaking:
            <span className="italic font-light block flame-gradient-text">
              Beyond the Superficial Swipe
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4F4633] leading-relaxed">
            Tired of transactional small talk and ghosting? Our 3-tier conscious dating architecture matches nervous systems, relational agreements, and conflict repair capabilities.
          </p>
        </div>

        {/* 3 Tier Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Tier 1 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFA41C]/15 flex items-center justify-center text-[#FFA41C] mb-5">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-[#FFA41C]">
                Tier 1 Protocol
              </span>
              <h3 className="text-2xl font-black text-[#1C1B1B] mt-1 mb-3">
                Somatic &amp; Attachment Calibration
              </h3>
              <p className="text-sm sm:text-base text-[#4F4633] leading-relaxed">
                Proprietary profiling mapping your somatic trigger response, attachment baseline (Secure, Regulated, Anxious-healing), and conflict pacing before any introduction is queued.
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-[#E7E2DA] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#68645E]">Output:</span>
              <span className="text-[#2D6A4F] font-extrabold">EQ Compatibility Fingerprint</span>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FF5A60]/15 flex items-center justify-center text-[#FF5A60] mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-[#FF5A60]">
                Tier 2 Protocol
              </span>
              <h3 className="text-2xl font-black text-[#1C1B1B] mt-1 mb-3">
                The Dilemma Simulator Filter
              </h3>
              <p className="text-sm sm:text-base text-[#4F4633] leading-relaxed">
                Evaluate how candidates respond to unvarnished relational friction—unreplied messages, lifestyle boundaries, and emotional vulnerability—rather than rehearsed photo angles.
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-[#E7E2DA] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#68645E]">Output:</span>
              <span className="text-[#FF5A60] font-extrabold">Verified Behavioral Integrity</span>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] flex items-center justify-center text-[#2D6A4F] mb-5">
                <Handshake className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-[#2D6A4F]">
                Tier 3 Protocol
              </span>
              <h3 className="text-2xl font-black text-[#1C1B1B] mt-1 mb-3">
                Facilitated Match Introductions
              </h3>
              <p className="text-sm sm:text-base text-[#4F4633] leading-relaxed">
                Double-blind mutual introductions orchestrated by relational facilitators with bespoke conversation primers, date design, and an enforced Zero-Ghosting Charter.
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-[#E7E2DA] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#68645E]">Output:</span>
              <span className="text-[#2D6A4F] font-extrabold">100% Respectful First Dates</span>
            </div>
          </div>
        </div>

        {/* Live Cohort Preview Deck: Active Member Profiles with Authentic Photos */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F3EFEA] border border-[#E7E2DA]" id="active-cohorts">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#FF5A60]">
                Live Cohort Preview • African &amp; Global Cohort
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1C1B1B]">
                Active Member Profiles &amp; Match Archetypes
              </h3>
              <p className="text-base text-[#68645E] mt-1.5">
                Featuring Nigerian daters, interracial couples, and international professionals. Every member is ID &amp; EQ vetted.
              </p>
            </div>

            <MagneticButton
              onClick={scrollToApply}
              variant="flame"
              strength={8}
              textStrength={3}
              className="px-7 py-3.5 text-sm"
            >
              <span>Apply to Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>

          {/* 4 Card Member Deck with CardTilt */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COHORT_MEMBERS.map((member) => (
              <CardTilt
                key={member.id}
                maxTilt={5}
                glareOpacity={0.08}
                className="p-6 rounded-3xl bg-white shadow-sm hover:shadow-xl flex flex-col justify-between border border-[#E7E2DA] h-full"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 ring-2 ring-[#FF5A60]/30 group-hover:ring-[#FF5A60] transition-all">
                      <Image
                        src={member.photo}
                        alt={`${member.name} photo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 text-base font-extrabold text-[#1C1B1B] truncate">
                        {member.name}, {member.age}
                        <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                      </div>
                      <div className="text-xs text-[#68645E] truncate">{member.role}</div>
                      <div className="text-[11px] text-[#68645E] truncate">{member.location}</div>
                    </div>
                  </div>

                  <span
                    className={`inline-block px-3 py-1 mb-3.5 rounded-full text-xs font-bold ${member.intentColor}`}
                  >
                    {member.intent}
                  </span>

                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] text-xs text-[#1C1B1B] mb-4 border border-[#E7E2DA]">
                    <div className="text-[10px] font-bold text-[#68645E] uppercase mb-0.5">
                      Core Intent
                    </div>
                    <p className="line-clamp-3 italic leading-relaxed">{member.quote}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-[#E7E2DA] mb-4">
                    <span className="text-[#2D6A4F] font-bold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{member.eqScore} • {member.eqState}</span>
                    </span>
                    <span className="text-[#FF5A60] font-extrabold">{member.matchScore}</span>
                  </div>

                  <button
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-[#1C1B1B] bg-[#F3EFEA] hover:bg-[#FF5A60] hover:text-white transition-all text-center cursor-pointer"
                  >
                    View Match DNA →
                  </button>
                </div>
              </CardTilt>
            ))}
          </div>
        </div>
      </div>

      {/* Match DNA Inspector Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E7E2DA] overflow-hidden"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F3EFEA] text-[#1C1B1B] flex items-center justify-center hover:bg-[#FF5A60] hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-[#FF5A60]">
                  <Image
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#1C1B1B]">
                    {selectedMember.name}, {selectedMember.age}
                  </h3>
                  <p className="text-xs text-[#68645E]">
                    {selectedMember.role} • {selectedMember.location}
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mt-1 rounded-full bg-[#E8F5E9] text-[#2D6A4F] text-[10.5px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{selectedMember.eqScore} • {selectedMember.attachmentStyle}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA]">
                  <span className="font-extrabold text-[#1C1B1B] block mb-1 uppercase tracking-wider text-[10px]">
                    Non-Negotiable Relational Boundary
                  </span>
                  <p className="text-[#4F4633]">{selectedMember.nonNegotiable}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#E8F5E9] border border-[#2D6A4F]/20">
                  <span className="font-extrabold text-[#2D6A4F] block mb-1 uppercase tracking-wider text-[10px]">
                    Verified Conflict Repair Protocol
                  </span>
                  <p className="text-[#1C1B1B]">{selectedMember.repairRule}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FFEFEF] border border-[#FF5A60]/20">
                  <span className="font-extrabold text-[#BA1A1A] block mb-1 uppercase tracking-wider text-[10px]">
                    Zero-Ghosting Commitment
                  </span>
                  <p className="text-[#4F4633]">
                    Pledged to the Sovereign Charter: All dates end with clear feedback or polite closure within 24 hours.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E2DA] flex items-center justify-between">
                <span className="text-xs font-bold text-[#2D6A4F] flex items-center gap-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Vetted Cohort Profile</span>
                </span>
                <MagneticButton
                  onClick={() => {
                    setSelectedMember(null);
                    scrollToApply();
                  }}
                  variant="flame"
                  strength={6}
                  textStrength={2}
                  className="px-5 py-2.5 text-xs font-bold"
                >
                  Request Introduction
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
