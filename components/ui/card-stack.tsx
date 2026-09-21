"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  Keyboard,
} from "lucide-react";

interface CardStackProps {
  cards: DilemmaCard[];
  onSwipeLeft?: (card: DilemmaCard) => void;
  onSwipeRight?: (card: DilemmaCard) => void;
  className?: string;
  enableKeyboard?: boolean;
}

export function CardStack({
  cards,
  onSwipeLeft,
  onSwipeRight,
  className = "",
  enableKeyboard = true,
}: CardStackProps) {
  const [deck, setDeck] = useState<DilemmaCard[]>(cards);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<"red_flag" | "growth_space" | null>(null);

  const activeCard = deck[0];

  const handleSwipe = useCallback(
    (direction: "left" | "right") => {
      if (!activeCard) return;

      if (direction === "left") {
        setLastAction("red_flag");
        onSwipeLeft?.(activeCard);
      } else {
        setLastAction("growth_space");
        onSwipeRight?.(activeCard);
      }

      // Recycle active card to bottom for endless exploratory play
      setDeck((prev) => {
        const remaining = prev.slice(1);
        return [...remaining, activeCard];
      });
      setFlippedCardId(null);
    },
    [activeCard, onSwipeLeft, onSwipeRight]
  );

  const handleReset = () => {
    setDeck(cards);
    setFlippedCardId(null);
    setLastAction(null);
  };

  const toggleFlip = (cardId: string) => {
    setFlippedCardId((prev) => (prev === cardId ? null : cardId));
  };

  // Keyboard accessibility: Left / Right arrows to swipe, Space to flip
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleSwipe("left");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleSwipe("right");
      } else if (e.key === " " && activeCard) {
        e.preventDefault();
        toggleFlip(activeCard.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enableKeyboard, handleSwipe, activeCard]);

  return (
    <div className={`flex flex-col items-center select-none w-full ${className}`}>
      {/* Visual Swipe Feedback Status Pill */}
      <div className="h-9 mb-3 flex items-center justify-center">
        {lastAction === "growth_space" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFB36B]/15 border border-[#FFB36B]/30 text-[#FFB36B] text-xs font-semibold"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Growth space recognized</span>
          </motion.div>
        )}
        {lastAction === "red_flag" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5484D]/15 border border-[#E5484D]/30 text-[#E5484D] text-xs font-semibold"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Red flag noted</span>
          </motion.div>
        )}
        {!lastAction && (
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[11px] text-[#7E747E] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A7A] animate-pulse" />
            <span>Tactile Dilemma Deck • Drag or use arrows</span>
          </div>
        )}
      </div>

      {/* The Tactile Interactive Stack Container */}
      <div className="relative w-full max-w-[400px] h-[490px]">
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

      {/* Tactile Control Buttons (Tinder/Bumble inspired, refined for maturity) */}
      <div className="mt-6 flex items-center justify-center gap-4">
        {/* Swipe Left: Red flag */}
        <button
          onClick={() => handleSwipe("left")}
          aria-label="Mark as red flag"
          title="Swipe Left (Arrow Left)"
          className="group w-13 h-13 rounded-full bg-[#1A141D] border border-[#2E2433] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 hover:border-[#E5484D]/60 hover:shadow-lg hover:shadow-[#E5484D]/20 cursor-pointer"
        >
          <XCircle className="w-6 h-6 text-[#E5484D] transition-transform group-hover:rotate-[-12deg]" />
        </button>

        {/* Flip Card: Reveal Script */}
        <button
          onClick={() => activeCard && toggleFlip(activeCard.id)}
          aria-label="Flip card to read script"
          title="Flip Card (Spacebar)"
          className="group w-11 h-11 rounded-full bg-[#241C29] border border-[#2E2433] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 text-[#F5EFE8] hover:border-[#FF5A7A]/40 cursor-pointer"
        >
          <BookOpen className="w-5 h-5 text-[#B8AEB6] group-hover:text-[#F5EFE8]" />
        </button>

        {/* Reset Deck */}
        <button
          onClick={handleReset}
          aria-label="Reset deck"
          title="Reset Deck"
          className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 text-[#7E747E] hover:text-[#F5EFE8] cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Swipe Right: Growth space */}
        <button
          onClick={() => handleSwipe("right")}
          aria-label="Choose growth space"
          title="Swipe Right (Arrow Right)"
          className="group w-13 h-13 rounded-full bg-[#FFB36B] border border-[#FFB36B] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-[#FFB36B]/25 cursor-pointer"
        >
          <Sparkles className="w-6 h-6 text-[#100C12] transition-transform group-hover:rotate-12" />
        </button>
      </div>

      <div className="mt-3 text-[12px] text-[#7E747E] flex items-center gap-2 font-medium">
        <span>← Drag left: Red flag</span>
        <span className="text-[#2E2433]">•</span>
        <span>Drag right: Growth space →</span>
      </div>
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
  const rotate = useTransform(x, [-220, 0, 220], [-16, 0, 16]);

  // Dynamic stamp opacities during drag
  const redFlagOpacity = useTransform(x, [-140, -40, 0], [1, 0.4, 0]);
  const growthSpaceOpacity = useTransform(x, [0, 40, 140], [0, 0.4, 1]);

  // Spring physics per PRD motion tokens
  const springTransition = {
    type: "spring" as const,
    stiffness: 350,
    damping: 25,
    mass: 0.6,
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 100;
    const velocityThreshold = 350;

    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      onSwipe("right");
    } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      onSwipe("left");
    }
  };

  const scale = 1 - index * 0.04;
  const translateY = index * 12;

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
      <div className="relative w-full h-full rounded-3xl bg-[#1A141D] border border-[#2E2433] shadow-[0_20px_45px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between p-6 sm:p-7">
        {/* Directional Drag Stamps in Sentence Case */}
        {isTop && (
          <>
            {/* Growth space stamp */}
            <motion.div
              style={{ opacity: growthSpaceOpacity }}
              className="absolute top-7 left-7 z-30 pointer-events-none px-3.5 py-1.5 border-2 border-[#FFB36B] rounded-xl text-[#FFB36B] font-bold text-xs tracking-wider -rotate-12 bg-[#1A141D]/95 shadow-md shadow-black/50"
            >
              Growth space ✓
            </motion.div>

            {/* Red flag stamp */}
            <motion.div
              style={{ opacity: redFlagOpacity }}
              className="absolute top-7 right-7 z-30 pointer-events-none px-3.5 py-1.5 border-2 border-[#E5484D] rounded-xl text-[#E5484D] font-bold text-xs tracking-wider rotate-12 bg-[#1A141D]/95 shadow-md shadow-black/50"
            >
              Red flag ✕
            </motion.div>
          </>
        )}

        {/* Top Meta Bar */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#241C29] border border-[#2E2433] text-[#F5EFE8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A7A]" />
              {card.category}
            </span>

            <span className="text-[11px] font-mono text-[#B8AEB6]">
              Interactive protocol
            </span>
          </div>

          {/* Dilemma Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#F5EFE8] tracking-tight leading-snug">
            {card.dilemmaTitle}
          </h3>
        </div>

        {/* Card Body: Scenario vs Script Toggle */}
        <div className="my-auto py-2">
          {!isFlipped ? (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#241C29] border border-[#2E2433]/70">
                <p className="text-[11px] font-semibold text-[#B8AEB6] tracking-wide mb-1">
                  The situation:
                </p>
                <p className="text-sm leading-relaxed text-[#F5EFE8]">
                  {card.scenario}
                </p>
              </div>

              {/* Micro-preview: Reaction vs Shift */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#E5484D]/10 border border-[#E5484D]/25">
                  <span className="font-semibold text-[#E5484D] block mb-0.5">
                    Reactive impulse
                  </span>
                  <p className="text-[#B8AEB6] text-[11px] line-clamp-2">
                    {card.superficialReaction.action}
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFB36B]/10 border border-[#FFB36B]/25">
                  <span className="font-semibold text-[#FFB36B] block mb-0.5">
                    Maturity shift
                  </span>
                  <p className="text-[#B8AEB6] text-[11px] line-clamp-2">
                    {card.matureResponse.action}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-[#241C29] border border-[#FF5A7A]/30 text-[#F5EFE8] space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FFB36B]">
                <Quote className="w-3.5 h-3.5 text-[#FF5A7A]" />
                <span>The conscious communication script:</span>
              </div>
              <blockquote className="text-sm font-medium italic text-[#F5EFE8] leading-relaxed">
                {card.script}
              </blockquote>
              <div className="pt-2 border-t border-[#2E2433] text-xs text-[#B8AEB6]">
                <strong className="text-[#FFB36B]">Psychological return: </strong>
                {card.matureResponse.relationalReward}
              </div>
            </motion.div>
          )}
        </div>

        {/* Card Footer */}
        <div className="pt-3 border-t border-[#2E2433] flex items-center justify-between text-xs text-[#B8AEB6]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFlip();
            }}
            className="inline-flex items-center gap-1.5 font-semibold text-[#FF5A7A] hover:text-[#ff4367] transition-colors cursor-pointer"
          >
            {isFlipped ? "View situation" : "Reveal repair script"}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-mono text-[#7E747E]">
            {isFlipped ? "Script view" : "Dilemma view"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
