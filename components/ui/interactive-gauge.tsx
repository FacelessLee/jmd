"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface InteractiveGaugeProps {
  score: number; // 0 to 100
  label?: string;
  size?: number;
  className?: string;
}

export function InteractiveGauge({
  score,
  label = "Relational EQ",
  size = 180,
  className = "",
}: InteractiveGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    // Smooth number animation
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const increment = score / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [score]);

  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * 0.75; // 270 degree gauge
  const strokeDashoffset = arcLength - (arcLength * score) / 100;

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-[135deg]"
      >
        {/* Background Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E8EFEA"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeLinecap="round"
        />

        {/* Animated Score Gradient Track */}
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A4B43" />
            <stop offset="60%" stopColor="#386358" />
            <stop offset="100%" stopColor="#FF5A5F" />
          </linearGradient>
        </defs>

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference}`}
          initial={{ strokeDashoffset: arcLength }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          strokeLinecap="round"
        />
      </svg>

      {/* Central Score Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-extrabold text-[#121316] tracking-tight">
          {animatedScore}%
        </span>
        <span className="text-xs font-semibold text-[#2A4B43] tracking-wide uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
