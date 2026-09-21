"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { INTENTS, IntentKey } from "@/lib/intents";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Lock,
  Flame,
  Check,
  Globe,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function LeadCaptureSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [relationshipFocus, setRelationshipFocus] = useState<string>("serious");
  const [attachmentStyle, setAttachmentStyle] = useState<string>("secure");
  const [agePreference, setAgePreference] = useState<string>("28_38");
  const [cityLocation, setCityLocation] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !fullName.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fullName.trim(),
          email: email.trim(),
          relationshipGoal: relationshipFocus,
          city: cityLocation.trim(),
          attachmentStyle,
          agePreference,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application. Please try again.");
      }

      setStatus("success");

      // Celebratory confetti burst with warm sunset flame colors
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#FF5A60", "#FFA41C", "#FFC629", "#2D6A4F"],
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section
      id="join-cohort"
      className="py-24 md:py-32 bg-gradient-to-b from-[#F3EFEA] to-[#FFF4EC] border-b border-[#E7E2DA] relative overflow-hidden"
    >
      {/* Anchor for backward compatibility */}
      <div id="join-circle" className="absolute top-0 left-0 w-0 h-0" />

      {/* Ambient Flame Glow */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#FF5A60]/10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-white border border-[#E7E2DA] shadow-2xl p-8 sm:p-14 md:p-16 overflow-hidden"
        >
          {/* Top Accent Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 flame-gradient" />

          {status !== "success" ? (
            <>
              <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A60]/10 text-[#FF5A60] text-xs font-bold uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Private Circle &amp; Matchmaking Cohorts</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#1C1B1B] tracking-tight">
                  Apply for Curated Matchmaking
                </h2>

                <p className="text-sm sm:text-base text-[#4F4633] leading-relaxed">
                  Gain access to verified profiles, weekly communication breakdowns, and double-blind introductions across Lagos, London, NYC, Atlanta, and global hubs with zero dopamine algorithms.
                </p>
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1C1B1B] mb-1.5" htmlFor="full-name">
                      Full Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Tunde Vance"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] text-[#1C1B1B] border border-[#E7E2DA] focus:bg-white focus:border-[#FF5A60] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1C1B1B] mb-1.5" htmlFor="email-address">
                      Email Address *
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tunde@domain.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] text-[#1C1B1B] border border-[#E7E2DA] focus:bg-white focus:border-[#FF5A60] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Intent & Attachment Baseline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1C1B1B] mb-1.5" htmlFor="relationship-focus">
                      Looking For (Intent)
                    </label>
                    <select
                      id="relationship-focus"
                      value={relationshipFocus}
                      onChange={(e) => setRelationshipFocus(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] text-[#1C1B1B] border border-[#E7E2DA] focus:bg-white focus:border-[#FF5A60] focus:outline-none transition-colors text-sm font-medium cursor-pointer"
                    >
                      <option value="hookup">Hookups — Same-Night Clarity</option>
                      <option value="short_term">Short-Term Fun &amp; Chemistry</option>
                      <option value="long_term_fun">Long-Term Fun &amp; Adventures</option>
                      <option value="serious">Conscious Life Partner / Marriage</option>
                      <option value="arrangement">Explicit Mutual Arrangement</option>
                      <option value="no_strings">No Strings Attached (Respect First)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1C1B1B] mb-1.5" htmlFor="attachment-style">
                      Attachment Baseline
                    </label>
                    <select
                      id="attachment-style"
                      value={attachmentStyle}
                      onChange={(e) => setAttachmentStyle(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] text-[#1C1B1B] border border-[#E7E2DA] focus:bg-white focus:border-[#FF5A60] focus:outline-none transition-colors text-sm font-medium cursor-pointer"
                    >
                      <option value="secure">Secure &amp; Communicative</option>
                      <option value="regulated">Regulated / Practicing Repair</option>
                      <option value="anxious_healing">Anxious-Leaning (Committed to Growth)</option>
                      <option value="avoidant_healing">Avoidant-Healing (Committed to Closeness)</option>
                    </select>
                  </div>
                </div>

                {/* Age & City Hub */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1C1B1B] mb-1.5" htmlFor="age-preference">
                      Age Preference Range
                    </label>
                    <select
                      id="age-preference"
                      value={agePreference}
                      onChange={(e) => setAgePreference(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] text-[#1C1B1B] border border-[#E7E2DA] focus:bg-white focus:border-[#FF5A60] focus:outline-none transition-colors text-sm font-medium cursor-pointer"
                    >
                      <option value="28_38">28 – 38 Years Old</option>
                      <option value="35_48">35 – 48 Years Old</option>
                      <option value="45_62">45 – 62+ Years Old</option>
                      <option value="chemistry">Flexible / Chemistry &amp; EQ First</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1C1B1B] mb-1.5" htmlFor="city-location">
                      City / Metro Hub *
                    </label>
                    <input
                      id="city-location"
                      type="text"
                      required
                      value={cityLocation}
                      onChange={(e) => setCityLocation(e.target.value)}
                      placeholder="e.g., Lagos, London, New York, Atlanta, Paris"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] text-[#1C1B1B] border border-[#E7E2DA] focus:bg-white focus:border-[#FF5A60] focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-[#FFEFEF] border border-[#FF5A60]/30 text-xs text-[#BA1A1A] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <MagneticButton
                  type="submit"
                  disabled={status === "submitting"}
                  variant="flame"
                  strength={6}
                  textStrength={3}
                  className="w-full py-4 text-sm font-extrabold mt-2"
                >
                  <Flame className="w-4 h-4" />
                  <span>
                    {status === "submitting" ? "Submitting Application..." : "Apply for Matchmaking Circle & Cohort"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-center text-xs text-[#68645E] pt-3">
                  <span className="inline-flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                    <span>100% Identity &amp; EQ Vetted</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                    <span>Zero Ghosting Charter</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5 font-bold">
                    <Lock className="w-3.5 h-3.5 text-[#FFA41C]" />
                    <span>Strict Discretion</span>
                  </span>
                </div>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#2D6A4F] mx-auto flex items-center justify-center shadow-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1C1B1B]">
                Matchmaking Application Received
              </h3>

              <p className="text-sm sm:text-base text-[#4F4633] max-w-md mx-auto leading-relaxed">
                Welcome, <strong>{fullName}</strong>. Our matchmaking team reviews cohort applications individually to preserve our high-EQ community. Watch your inbox at <strong>{email}</strong> for your orientation invitation and somatic calibration primer.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full bg-[#FAF8F5] border border-[#E7E2DA] text-xs font-bold text-[#1C1B1B] hover:bg-white transition-colors cursor-pointer"
                >
                  Submit Another Profile
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
