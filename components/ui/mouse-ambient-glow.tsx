"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseAmbientGlow() {
  const [isEnabled, setIsEnabled] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Soft spring physics for fluid trailing glow
  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 28, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 28, mass: 0.4 });

  useEffect(() => {
    // Only enable on desktop/fine-pointer devices without reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Also set global CSS variables on documentElement for CSS shaders
      document.documentElement.style.setProperty("--mouse-screen-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-screen-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Primary Ambient Desire Rose Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,122,0.08)_0%,rgba(255,179,107,0.03)_45%,transparent_70%)] blur-2xl"
      />

      {/* Secondary Soft Hearth Amber Glow Follower */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-45%",
          translateY: "-45%",
        }}
        className="absolute w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,179,107,0.06)_0%,transparent_65%)] blur-xl"
      />
    </div>
  );
}
