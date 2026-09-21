"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUIZ_QUESTIONS, SUPERPOWER_PROFILES } from "@/lib/quiz-data";
import { SuperpowerProfile } from "@/lib/types";
import { InteractiveGauge } from "@/components/ui/interactive-gauge";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  Award,
  CheckCircle2,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    // Identify highest weighting
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

    // Send to Supabase API
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
    } finally {
      setIsSubmitting(false);
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

  return (
    <section
      id="maturity-metric"
      className="py-24 md:py-32 bg-white border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5A5F]/10 text-[#FF5A5F] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Maturity Metric Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
            Discover Your Relational Superpower
          </h2>

          <p className="text-base text-[#5B616E] leading-relaxed">
            3 rapid scenario prompts to assess your emotional regulation, boundary architecture, and repair capability.
          </p>
        </div>

        {/* Assessment Card Container */}
        <div className="rounded-3xl bg-[#FBF9F5] border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.04)] p-8 sm:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!resultProfile ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Step Progress Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {QUIZ_QUESTIONS.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentStep
                            ? "w-8 bg-[#2A4B43]"
                            : idx < currentStep
                            ? "w-4 bg-[#2A4B43]/50"
                            : "w-4 bg-neutral-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#5B616E]">
                    Prompt 0{currentStep + 1} of 0{QUIZ_QUESTIONS.length}
                  </span>
                </div>

                {/* Scenario Context & Question */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2A4B43]">
                    {activeQuestion.scenarioContext}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#121316] leading-snug">
                    {activeQuestion.question}
                  </h3>
                </div>

                {/* Tactical Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {activeQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option)}
                      className="group p-5 rounded-2xl bg-white border border-black/5 text-left transition-all duration-200 hover:border-[#2A4B43]/40 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] flex flex-col justify-between"
                    >
                      <div className="mb-3">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#2A4B43]/10 text-[#2A4B43] mb-2">
                          {option.badge}
                        </span>
                        <p className="text-sm font-medium text-[#121316] leading-relaxed">
                          {option.text}
                        </p>
                      </div>

                      <div className="flex items-center text-xs font-semibold text-[#5B616E] group-hover:text-[#2A4B43] transition-colors gap-1 pt-2">
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
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#2A4B43]/10 text-[#2A4B43] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Archetype Profile Generated
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#121316]">
                    {resultProfile.title}
                  </h3>
                  <p className="text-sm font-medium text-[#5B616E]">
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
                    <p className="text-sm text-[#121316] leading-relaxed">
                      {resultProfile.description}
                    </p>

                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2A4B43]">
                        Core Superpower Strengths:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#5B616E]">
                        {resultProfile.strengths.map((str, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#2A4B43] shrink-0 mt-0.5" />
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-black/5 text-xs text-[#5B616E]">
                      <strong className="text-[#121316] block mb-0.5">
                        Growth Edge:
                      </strong>
                      {resultProfile.growthEdge}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B616E] hover:text-[#121316] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retake Assessment
                  </button>

                  <MagneticButton
                    variant="primary"
                    onClick={() => {
                      document.getElementById("join-circle")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-2.5 text-xs uppercase font-bold tracking-wider"
                  >
                    Lock In Your Archetype & Join
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
