"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUIZ_QUESTIONS, SUPERPOWER_PROFILES } from "@/lib/quiz-data";
import { SuperpowerProfile } from "@/lib/types";
import { INTENTS, IntentKey } from "@/lib/intents";
import { InteractiveGauge } from "@/components/ui/interactive-gauge";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Award,
} from "lucide-react";

export function MaturityMetricSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [accumulatedWeights, setAccumulatedWeights] = useState({
    groundedAnchor: 0,
    consciousCommunicator: 0,
    empatheticMirror: 0,
    boundaryArchitect: 0,
  });
  const [resultProfile, setResultProfile] = useState<SuperpowerProfile | null>(null);
  const [currentIntent, setCurrentIntent] = useState<IntentKey>("serious_relationship");

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

  const activeQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (option: (typeof QUIZ_QUESTIONS)[0]["options"][0]) => {
    const updatedAnswers = { ...selectedAnswers, [activeQuestion.id]: option.id };
    setSelectedAnswers(updatedAnswers);

    const updatedWeights = {
      groundedAnchor: accumulatedWeights.groundedAnchor + option.superpowerWeight.groundedAnchor,
      consciousCommunicator: accumulatedWeights.consciousCommunicator + option.superpowerWeight.consciousCommunicator,
      empatheticMirror: accumulatedWeights.empatheticMirror + option.superpowerWeight.empatheticMirror,
      boundaryArchitect: accumulatedWeights.boundaryArchitect + option.superpowerWeight.boundaryArchitect,
    };
    setAccumulatedWeights(updatedWeights);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(updatedWeights, updatedAnswers);
    }
  };

  const calculateResult = async (
    weights: typeof accumulatedWeights,
    answers: Record<number, string>
  ) => {
    let topProfileKey = "groundedAnchor";
    let maxVal = -1;

    for (const [key, val] of Object.entries(weights)) {
      if (val > maxVal) {
        maxVal = val;
        topProfileKey = key;
      }
    }

    const matchedProfile = SUPERPOWER_PROFILES[topProfileKey] || SUPERPOWER_PROFILES.groundedAnchor;
    setResultProfile(matchedProfile);

    try {
      await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          superpowerResult: matchedProfile.id,
          calculatedEqScore: matchedProfile.eqScore,
          answers: Object.entries(answers).map(([qId, oId]) => ({
            questionId: Number(qId),
            optionId: oId,
          })),
          scoresBreakdown: weights,
        }),
      });
    } catch (err) {
      console.error("Failed to post quiz data:", err);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setAccumulatedWeights({
      groundedAnchor: 0,
      consciousCommunicator: 0,
      empatheticMirror: 0,
      boundaryArchitect: 0,
    });
    setResultProfile(null);
  };

  const activeIntentConfig = INTENTS[currentIntent];

  return (
    <section
      id="maturity-metric"
      className="py-20 md:py-32 bg-[#100C12] border-t border-[#2E2433] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Title with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241C29] border border-[#2E2433] text-[#FF5A7A] text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Maturity Metric Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5EFE8] tracking-tight">
            Discover Your Relational Superpower
          </h2>

          <p className="text-base text-[#B8AEB6] leading-relaxed">
            3 rapid scenario prompts to assess your emotional regulation, boundary architecture, and repair capability.
          </p>
        </motion.div>

        {/* Assessment Card Container */}
        <div className="rounded-3xl bg-[#1A141D] border border-[#2E2433] shadow-[0_16px_45px_rgba(0,0,0,0.4)] p-7 sm:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!resultProfile ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-7"
              >
                {/* Step Progress Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {QUIZ_QUESTIONS.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentStep
                            ? "w-8 bg-[#FF5A7A]"
                            : idx < currentStep
                            ? "w-4 bg-[#FFB36B]"
                            : "w-4 bg-[#2E2433]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#B8AEB6]">
                    Prompt 0{currentStep + 1} of 0{QUIZ_QUESTIONS.length}
                  </span>
                </div>

                {/* Scenario Context & Question */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#FFB36B]">
                    {activeQuestion.scenarioContext}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFE8] leading-snug">
                    {activeQuestion.question}
                  </h3>
                </div>

                {/* Tactical Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {activeQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option)}
                      className="group p-5 rounded-2xl bg-[#241C29] border border-[#2E2433] text-left transition-all duration-200 hover:border-[#FF5A7A]/50 hover:shadow-lg hover:shadow-[#FF5A7A]/10 hover:scale-[1.01] active:scale-[0.99] flex flex-col justify-between cursor-pointer"
                    >
                      <div className="mb-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#100C12] border border-[#2E2433] text-[#FFB36B] mb-2">
                          {option.badge}
                        </span>
                        <p className="text-sm font-medium text-[#F5EFE8] leading-relaxed">
                          {option.text}
                        </p>
                      </div>

                      <div className="flex items-center text-xs font-semibold text-[#B8AEB6] group-hover:text-[#FF5A7A] transition-colors gap-1 pt-2">
                        <span>Select response</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Results Dashboard with Animated Gauge */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="text-center space-y-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#241C29] border border-[#2E2433] text-[#FFB36B] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Archetype Profile Generated
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#F5EFE8]">
                    {resultProfile.title}
                  </h3>
                  <p className="text-sm font-medium text-[#B8AEB6]">
                    {resultProfile.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
                  {/* Left: Gauge */}
                  <div className="md:col-span-5 flex justify-center">
                    <InteractiveGauge
                      score={resultProfile.eqScore}
                      label="Relational EQ"
                      size={200}
                    />
                  </div>

                  {/* Right: Archetype Insights */}
                  <div className="md:col-span-7 space-y-4">
                    <p className="text-sm text-[#F5EFE8] leading-relaxed">
                      {resultProfile.description}
                    </p>

                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FFB36B]">
                        Core Superpower Strengths:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#B8AEB6]">
                        {resultProfile.strengths.map((str, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#FF5A7A] shrink-0 mt-0.5" />
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#241C29] border border-[#2E2433] text-xs text-[#B8AEB6]">
                      <strong className="text-[#F5EFE8] block mb-0.5">
                        Growth Edge:
                      </strong>
                      {resultProfile.growthEdge}
                    </div>
                  </div>
                </div>

                {/* Footer Controls with Tailored Intent CTA */}
                <div className="pt-6 border-t border-[#2E2433] flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8AEB6] hover:text-[#F5EFE8] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retake assessment
                  </button>

                  <MagneticButton
                    variant="primary"
                    onClick={() => {
                      document.getElementById("join-circle")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 text-xs uppercase font-bold tracking-wider"
                  >
                    Lock In Archetype & {activeIntentConfig.cta}
                  </MagneticButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
