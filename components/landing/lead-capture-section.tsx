"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { INTENTS, IntentKey } from "@/lib/intents";
import { Sparkles, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

export function LeadCaptureSection() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [currentIntent, setCurrentIntent] = useState<IntentKey>("serious_relationship");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("jmm_intent") as IntentKey;
    if (saved && INTENTS[saved]) {
      setCurrentIntent(saved);
    }

    const handleIntentChange = (e: Event) => {
      const customEvent = e as CustomEvent<IntentKey>;
      if (customEvent.detail && INTENTS[customEvent.detail]) {
        setCurrentIntent(customEvent.detail);
      }
    };

    window.addEventListener("intent_change", handleIntentChange);
    return () => window.removeEventListener("intent_change", handleIntentChange);
  }, []);

  const activeConfig = INTENTS[currentIntent];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim() || "Member",
          email: email.trim(),
          relationshipGoal: currentIntent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setStatus("success");

      // Celebratory micro-burst with dark warm palette colors
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#FF5A7A", "#FFB36B", "#E5484D"],
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section
      id="join-circle"
      className="py-20 md:py-32 bg-[#100C12] border-t border-[#2E2433] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,90,122,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-[#1A141D] border border-[#2E2433] shadow-[0_24px_60px_rgba(0,0,0,0.5)] p-8 sm:p-14 overflow-hidden"
        >
          {/* Subtle Top Accent Shimmer Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5A7A] via-[#FFB36B] to-[#FF5A7A]" />

          <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#241C29] border border-[#2E2433] text-[#FFB36B] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Intent • {activeConfig.label}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5EFE8] tracking-tight">
              Ready to {activeConfig.cta.toLowerCase()}?
            </h2>

            <p className="text-sm sm:text-base text-[#B8AEB6] leading-relaxed">
              Join 8,400+ vetted adults who prioritize emotional maturity, explicit conduct, and genuine chemistry over dopamine swipe games.
            </p>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-[#241C29] border border-[#FFB36B]/30 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#FFB36B] text-[#100C12] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F5EFE8]">
                Welcome to the Circle{firstName ? `, ${firstName}` : ""}!
              </h3>
              <p className="text-sm text-[#B8AEB6] max-w-md mx-auto leading-relaxed">
                We have reserved your priority access. Check your inbox ({email}) shortly for our foundational repair and communication guides.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-[#E5484D]/15 border border-[#E5484D]/30 flex items-center gap-2.5 text-xs font-semibold text-[#E5484D]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-semibold text-[#B8AEB6] mb-1.5"
                  >
                    First Name (Optional)
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="E.g., Julian"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#241C29] border border-[#2E2433] text-sm text-[#F5EFE8] placeholder-[#7E747E] focus:outline-none focus:border-[#FF5A7A] focus:ring-1 focus:ring-[#FF5A7A] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-[#B8AEB6] mb-1.5"
                  >
                    Email Address <span className="text-[#FF5A7A]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#241C29] border border-[#2E2433] text-sm text-[#F5EFE8] placeholder-[#7E747E] focus:outline-none focus:border-[#FF5A7A] focus:ring-1 focus:ring-[#FF5A7A] transition-all"
                  />
                </div>
              </div>

              {/* Dynamic Intent Pill Notice */}
              <div className="p-3 rounded-xl bg-[#241C29]/60 border border-[#2E2433] text-xs text-[#B8AEB6] flex items-center justify-between">
                <span>Matching profile filter:</span>
                <span className="font-semibold text-[#FF5A7A]">{activeConfig.label}</span>
              </div>

              {/* Submit CTA with Dynamic Text */}
              <div className="pt-2">
                <MagneticButton
                  variant="primary"
                  type="submit"
                  strength={6}
                  disabled={status === "submitting"}
                  className="w-full py-4 text-xs sm:text-sm uppercase tracking-wider font-bold"
                >
                  {status === "submitting" ? "Securing Spot..." : activeConfig.cta}
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7E747E] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFB36B]" />
                <span>Strict discretion. No spam. Unsubscribe anytime.</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
