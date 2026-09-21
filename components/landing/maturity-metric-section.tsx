"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUIZ_QUESTIONS, SUPERPOWER_PROFILES } from "@/lib/quiz-data";
import { SuperpowerProfile } from "@/lib/types";
import { INTENTS, IntentKey } from "@/lib/intents";
import { InteractiveGauge } from "@/components/ui/interactive-gauge";
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
      className="py-24 md:py-32 bg-[#FCF9F8] border-b border-[#E7E2DA] relative overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFA41C]/15 text-[#FFA41C] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Maturity Metric Evaluation</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1B1B] tracking-tight">
            Discover Your Relational Superpower
          </h2>

          <p className="text-base sm:text-lg text-[#4F4633] leading-relaxed">
            3 rapid scenario prompts to assess your emotional regulation, boundary architecture, and repair capability.
          </p>
        </motion.div>

        {/* Assessment Card Container */}
        <div className="rounded-3xl bg-white border border-[#E7E2DA] shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
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
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentStep
                            ? "w-10 flame-gradient"
                            : idx < currentStep
                            ? "w-4 bg-[#2D6A4F]"
                            : "w-4 bg-[#E7E2DA]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#68645E]">
                    Prompt 0{currentStep + 1} of 0{QUIZ_QUESTIONS.length}
                  </span>
                </div>

                {/* Scenario Context & Question */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A60]">
                    {activeQuestion.scenarioContext}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1C1B1B] leading-snug">
                    {activeQuestion.question}
                  </h3>
                </div>

                {/* Tactical Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {activeQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option)}
                      className="group p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] text-left transition-all duration-200 hover:border-[#FF5A60] hover:bg-white hover:shadow-md hover:scale-[1.01] active:scale-[0.99] flex flex-col justify-between cursor-pointer"
                    >
                      <div className="mb-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white border border-[#E7E2DA] text-[#FF5A60] mb-2">
                          {option.badge}
                        </span>
                        <p className="text-sm font-semibold text-[#1C1B1B] leading-relaxed">
                          {option.text}
                        </p>
                      </div>

                      <div className="flex items-center text-xs font-bold text-[#68645E] group-hover:text-[#FF5A60] transition-colors gap-1 pt-2 border-t border-[#E7E2DA]/50">
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F5E9] text-[#2D6A4F] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Archetype Profile Generated
                  </span>
                  <h3 className="text-3xl font-black text-[#1C1B1B]">
                    {resultProfile.title}
                  </h3>
                  <p className="text-sm font-medium text-[#4F4633]">
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
                    <p className="text-sm text-[#1C1B1B] leading-relaxed font-medium">
                      {resultProfile.description}
                    </p>

                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A60]">
                        Core Superpower Strengths:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#4F4633]">
                        {resultProfile.strengths.map((str, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA] text-xs text-[#4F4633]">
                      <strong className="text-[#1C1B1B] block mb-0.5 font-bold">
                        Growth Edge:
                      </strong>
                      {resultProfile.growthEdge}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-6 border-t border-[#E7E2DA] flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#68645E] hover:text-[#1C1B1B] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retake assessment
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById("join-cohort")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 rounded-full text-xs font-bold text-white flame-gradient shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    Lock In Archetype &amp; Apply
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
