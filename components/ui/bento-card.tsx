"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  enableTilt?: boolean;
}

export function BentoCard({
  children,
  className = "",
  badge,
  title,
  subtitle,
  enableTilt = true,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    // Only enable 3D tilt on fine-pointer devices without reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanTilt(hasFinePointer && !prefersReducedMotion && enableTilt);
  }, [enableTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set local CSS variables for CSS-level radial gradient masks
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    if (canTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxTilt = 4;
      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;
      setTilt({ rotateX, rotateY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        scale: isHovered && canTilt ? 1.01 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`group relative rounded-3xl bg-white border border-[#E7E2DA] shadow-md overflow-hidden transition-all duration-300 hover:border-[#FF5A60]/40 hover:shadow-2xl ${className}`}
    >
      {/* Spotlight Radial Glow Shader */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 90, 96, 0.08), rgba(255, 198, 41, 0.04) 50%, transparent 80%)`,
        }}
      />

      {/* Internal Content Container */}
      <div className="relative z-20 p-7 sm:p-8 h-full flex flex-col justify-between">
        {(badge || title || subtitle) && (
          <div className="mb-6">
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FAF8F5] border border-[#E7E2DA] text-[#FF5A60] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A60]" />
                {badge}
              </span>
            )}
            {title && (
              <h3 className="text-xl sm:text-2xl font-black text-[#1C1B1B] tracking-tight mb-2">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-[#4F4633] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="flex-1">{children}</div>
      </div>
    </motion.div>
  );
}
