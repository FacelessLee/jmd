"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  PanInfo,
} from "framer-motion";
import { DilemmaCard } from "@/lib/types";
import {
  XCircle,
  Sparkles,
  RotateCcw,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Quote,
} from "lucide-react";

interface CardStackProps {
  cards: DilemmaCard[];
  onSwipeLeft?: (card: DilemmaCard) => void;
  onSwipeRight?: (card: DilemmaCard) => void;
  className?: string;
}

export function CardStack({
  cards,
  onSwipeLeft,
  onSwipeRight,
  className = "",
}: CardStackProps) {
  const [deck, setDeck] = useState<DilemmaCard[]>(cards);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<"red_flag" | "growth_space" | null>(null);

  const activeCard = deck[0];

  const handleSwipe = (direction: "left" | "right") => {
    if (!activeCard) return;

    if (direction === "left") {
      setLastAction("red_flag");
      onSwipeLeft?.(activeCard);
    } else {
      setLastAction("growth_space");
      onSwipeRight?.(activeCard);
    }

    // Remove active card from top and recycle to bottom of deck for infinite exploratory play
    setDeck((prev) => {
      const remaining = prev.slice(1);
      return [...remaining, activeCard];
    });
    setFlippedCardId(null);
  };

  const handleReset = () => {
    setDeck(cards);
    setFlippedCardId(null);
    setLastAction(null);
  };

  const toggleFlip = (cardId: string) => {
    setFlippedCardId((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Visual Swipe Status Banner */}
      <div className="h-8 mb-4 flex items-center justify-center">
        {lastAction === "growth_space" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2A4B43]/10 text-[#2A4B43] text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Growth Opportunity Identified (+EQ)
          </motion.div>
        )}
        {lastAction === "red_flag" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FF5A5F]/10 text-[#FF5A5F] text-xs font-semibold uppercase tracking-wider"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            Red Flag Trap Avoided
          </motion.div>
        )}
      </div>

      {/* The Tactile Interactive Stack */}
      <div className="relative w-full max-w-[420px] h-[540px]">
        <AnimatePresence mode="popLayout">
          {deck.slice(0, 3).map((card, index) => {
            const isTop = index === 0;
            return (
              <DilemmaCardItem
                key={card.id}
                card={card}
                isTop={isTop}
                index={index}
                isFlipped={flippedCardId === card.id}
                onToggleFlip={() => toggleFlip(card.id)}
                onSwipe={handleSwipe}
              />
            );
          })}
        </AnimatePresence>
      </div>

      {/* Tinder / Bumble Inspired Tactile Controls */}
      <div className="mt-8 flex items-center justify-center gap-5">
        {/* Swipe Left Button: Red Flag */}
        <button
          onClick={() => handleSwipe("left")}
          aria-label="Mark as Red Flag"
          className="group w-14 h-14 rounded-full bg-white shadow-md border border-neutral-200/80 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 hover:border-[#FF5A5F]/40 hover:shadow-lg hover:shadow-[#FF5A5F]/15"
        >
          <XCircle className="w-6 h-6 text-[#FF5A5F] transition-transform group-hover:rotate-[-12deg]" />
        </button>

        {/* Deep Dive / Flip Card Button */}
        <button
          onClick={() => activeCard && toggleFlip(activeCard.id)}
          aria-label="Flip Card to Read Repair Script"
          className="group w-12 h-12 rounded-full bg-neutral-100/90 border border-neutral-200/60 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 text-[#121316] hover:bg-neutral-200"
        >
          <BookOpen className="w-5 h-5 text-[#5B616E] group-hover:text-[#121316]" />
        </button>

        {/* Reset Deck */}
        <button
          onClick={handleReset}
          aria-label="Reset Card Deck"
          className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 text-[#5B616E] hover:text-[#121316]"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Swipe Right Button: Growth Space */}
        <button
          onClick={() => handleSwipe("right")}
          aria-label="Choose Growth Space"
          className="group w-14 h-14 rounded-full bg-[#2A4B43] shadow-md border border-[#2A4B43] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-[#2A4B43]/25"
        >
          <Sparkles className="w-6 h-6 text-white transition-transform group-hover:rotate-12" />
        </button>
      </div>

      <p className="mt-4 text-xs text-[#5B616E] flex items-center gap-1.5 font-medium">
        <span>← Drag left for Red Flag</span>
        <span className="text-neutral-300">•</span>
        <span>Drag right for Growth Space →</span>
      </p>
    </div>
  );
}

interface DilemmaCardItemProps {
  card: DilemmaCard;
  isTop: boolean;
  index: number;
  isFlipped: boolean;
  onToggleFlip: () => void;
  onSwipe: (dir: "left" | "right") => void;
}

function DilemmaCardItem({
  card,
  isTop,
  index,
  isFlipped,
  onToggleFlip,
  onSwipe,
}: DilemmaCardItemProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-18, 0, 18]);

  // Dynamic stamp opacities for tactile feedback during drag
  const redFlagOpacity = useTransform(x, [-140, -40, 0], [1, 0.4, 0]);
  const growthSpaceOpacity = useTransform(x, [0, 40, 140], [0, 0.4, 1]);

  // Spring physics parameters per AI_DESIGN_GUARDRAILS.md
  const springTransition = {
    type: "spring" as const,
    stiffness: 350,
    damping: 25,
    mass: 0.6,
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 110;
    const velocityThreshold = 400;

    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      onSwipe("right");
    } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      onSwipe("left");
    }
  };

  // Visual stacking scale and offset
  const scale = 1 - index * 0.05;
  const translateY = index * 14;

  return (
    <motion.div
      layout
      style={{
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        zIndex: 30 - index,
        scale,
        y: translateY,
      }}
      transition={springTransition}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.65}
      onDragEnd={handleDragEnd}
      className={`absolute inset-0 w-full h-full rounded-3xl cursor-grab active:cursor-grabbing ${
        isTop ? "touch-none" : "pointer-events-none"
      }`}
    >
      <div className="relative w-full h-full rounded-3xl bg-[#FFFFFF] border border-[#121316]/10 shadow-[0_18px_45px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col justify-between p-7">
        {/* Directional Drag Stamps */}
        {isTop && (
          <>
            {/* GROWTH SPACE STAMP */}
            <motion.div
              style={{ opacity: growthSpaceOpacity }}
              className="absolute top-8 left-8 z-30 pointer-events-none px-4 py-1.5 border-2 border-[#2A4B43] rounded-xl text-[#2A4B43] font-black text-sm uppercase tracking-widest -rotate-12 bg-white/90 shadow-sm"
            >
              GROWTH SPACE ✓
            </motion.div>

            {/* RED FLAG STAMP */}
            <motion.div
              style={{ opacity: redFlagOpacity }}
              className="absolute top-8 right-8 z-30 pointer-events-none px-4 py-1.5 border-2 border-[#FF5A5F] rounded-xl text-[#FF5A5F] font-black text-sm uppercase tracking-widest rotate-12 bg-white/90 shadow-sm"
            >
              RED FLAG ✕
            </motion.div>
          </>
        )}

        {/* Top Meta Bar */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2A4B43]/10 text-[#2A4B43]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A4B43]" />
              {card.category}
            </span>

            <div className="flex items-center gap-2 text-xs text-[#5B616E] font-medium">
              <span>EQ {card.metrics.regulationScore}%</span>
              <span>•</span>
              <span>Clarity {card.metrics.clarityScore}%</span>
            </div>
          </div>

          {/* Dilemma Title */}
          <h3 className="text-xl font-extrabold text-[#121316] tracking-tight leading-snug">
            {card.dilemmaTitle}
          </h3>
        </div>

        {/* Card Body: Scenario vs Script Toggle */}
        <div className="my-auto py-2">
          {!isFlipped ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-black/5">
                <p className="text-xs uppercase font-bold text-[#5B616E] tracking-wider mb-1.5">
                  The Real-World Dilemma
                </p>
                <p className="text-sm leading-relaxed text-[#121316]">
                  {card.scenario}
                </p>
              </div>

              {/* Red Flag vs Growth Micro Preview */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#FF5A5F]/5 border border-[#FF5A5F]/15">
                  <span className="font-bold text-[#FF5A5F] block mb-0.5">
                    Reactive Loop
                  </span>
                  <p className="text-neutral-600 line-clamp-2">
                    {card.superficialReaction.action}
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#2A4B43]/5 border border-[#2A4B43]/15">
                  <span className="font-bold text-[#2A4B43] block mb-0.5">
                    Maturity Shift
                  </span>
                  <p className="text-neutral-600 line-clamp-2">
                    {card.matureResponse.action}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-[#2A4B43] text-white space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8E95A5]">
                <Quote className="w-3.5 h-3.5 text-[#FF7E40]" />
                <span>The Conscious Communication Script</span>
              </div>
              <blockquote className="text-sm font-medium italic text-emerald-50 leading-relaxed">
                {card.script}
              </blockquote>
              <div className="pt-2 border-t border-white/10 text-xs text-white/80">
                <strong className="text-white">Psychological Return: </strong>
                {card.matureResponse.relationalReward}
              </div>
            </motion.div>
          )}
        </div>

        {/* Card Footer: Interaction Affordance */}
        <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#5B616E]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFlip();
            }}
            className="inline-flex items-center gap-1.5 font-semibold text-[#2A4B43] hover:text-[#345c52] transition-colors"
          >
            {isFlipped ? "View Dilemma Scenario" : "Reveal Communication Script"}
            <ArrowRight className="w-3 h-3" />
          </button>
          <span className="text-[11px] font-mono text-neutral-400">
            Swipe or use controls
          </span>
        </div>
      </div>
    </motion.div>
  );
}
