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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    // Only enable 3D tilt if the user has a fine pointing device (mouse/trackpad) and hasn't requested reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanTilt(hasFinePointer && !prefersReducedMotion && enableTilt);
  }, [enableTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Set local CSS variables for CSS-level radial gradient masks
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    if (canTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Max tilt degrees: ~6deg for subtle high-craft aesthetic without nausea
      const maxTilt = 5.5;
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
        scale: isHovered && canTilt ? 1.008 : 1,
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
      className={`group relative rounded-3xl bg-white border border-[#121316]/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Spotlight Radial Glow Shader (LazyInterface Cue) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 90, 95, 0.12), rgba(42, 75, 67, 0.05) 50%, transparent 80%)`,
        }}
      />

      {/* Border Highlight Beam (LazyInterface Precision Border Glow) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        style={{
          border: "1.5px solid transparent",
          backgroundImage: `radial-gradient(220px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 90, 95, 0.5), transparent 70%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Internal Content Container */}
      <div className="relative z-20 p-8 h-full flex flex-col justify-between">
        {(badge || title || subtitle) && (
          <div className="mb-6">
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2A4B43]/10 text-[#2A4B43] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A4B43]" />
                {badge}
              </span>
            )}
            {title && (
              <h3 className="text-xl font-bold text-[#121316] tracking-tight mb-2">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-[#5B616E] leading-relaxed">
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
