"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Sparkles, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

export function LeadCaptureSection() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [relationshipGoal, setRelationshipGoal] = useState("conscious_partner");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in both your first name and email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          relationshipGoal,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setStatus("success");

      // Celebratory micro-burst (Confetti)
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#FF5A5F", "#2A4B43", "#FF7E40"],
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section
      id="join-circle"
      className="py-24 md:py-32 bg-[#FBF9F5] border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 sm:p-14 overflow-hidden">
          {/* Subtle Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF5A5F] via-[#FF7E40] to-[#2A4B43]" />

          <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2A4B43]/10 text-[#2A4B43] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Private Community & Insights
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Enter the Circle of Mature Minds
            </h2>

            <p className="text-sm sm:text-base text-[#5B616E] leading-relaxed">
              Receive weekly real-world communication breakdowns, invitations to private repair clinics, and first access to our intentional matching cohort.
            </p>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-[#2A4B43]/5 border border-[#2A4B43]/20 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#2A4B43] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#121316]">
                Welcome to the Circle, {firstName}!
              </h3>
              <p className="text-sm text-[#5B616E] max-w-md mx-auto leading-relaxed">
                We've reserved your priority access. Check your inbox ({email}) shortly for our foundational guide: <em>The 90-Second De-escalation Protocol</em>.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-[#FF5A5F]/10 border border-[#FF5A5F]/20 flex items-center gap-2.5 text-xs font-semibold text-[#FF5A5F]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="E.g., Julian"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-black/10 text-sm text-[#121316] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="julian@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-black/10 text-sm text-[#121316] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="relationshipGoal"
                  className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-1.5"
                >
                  Primary Relationship Focus
                </label>
                <select
                  id="relationshipGoal"
                  value={relationshipGoal}
                  onChange={(e) => setRelationshipGoal(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-black/10 text-sm text-[#121316] focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] transition-all cursor-pointer"
                >
                  <option value="conscious_partner">
                    Finding a Conscious, Emotionally Mature Partner
                  </option>
                  <option value="repairing_communication">
                    Repairing High-Stakes Communication & Conflict
                  </option>
                  <option value="unlearning_patterns">
                    Unlearning Anxious / Avoidant Cycles
                  </option>
                  <option value="mutual_arrangement_clarity">
                    Navigating Clear Mutual Arrangements & Boundaries
                  </option>
                </select>
              </div>

              <div className="pt-3">
                <MagneticButton
                  variant="primary"
                  strength={6}
                  disabled={status === "submitting"}
                  className="w-full py-4 text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF5A5F]/20"
                >
                  {status === "submitting" ? (
                    "Reserving Priority Entry..."
                  ) : (
                    <>
                      <span>Reserve Your Invitation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </MagneticButton>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#5B616E] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2A4B43]" />
                <span>Zero spam. Absolute confidentiality. Unsubscribe anytime.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
