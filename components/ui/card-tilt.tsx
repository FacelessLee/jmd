"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Max tilt in degrees (default: 8)
  glareOpacity?: number; // Opacity of specular reflection (default: 0.15)
  glareColor?: string; // Color of specular reflection
}

export function CardTilt({
  children,
  className = "",
  maxTilt = 8,
  glareOpacity = 0.15,
  glareColor = "rgba(255, 255, 255, 0.4)",
}: CardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Motion values for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for organic motion feel
  const springConfig = { stiffness: 260, damping: 22, mass: 0.5 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);

  // Glare position values
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  useEffect(() => {
    setIsTouch(!window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (-1 to 1)
    const normalizedX = (e.clientX - rect.left - width / 2) / (width / 2);
    const normalizedY = (e.clientY - rect.top - height / 2) / (height / 2);

    // rotateX is driven by vertical movement (inverted for natural tilt)
    mouseY.set(-normalizedY * maxTilt);
    // rotateY is driven by horizontal movement
    mouseX.set(normalizedX * maxTilt);

    // Glare coordinates as percentage (0% to 100%)
    const pctX = ((e.clientX - rect.left) / width) * 100;
    const pctY = ((e.clientY - rect.top) / height) * 100;
    glareX.set(pctX);
    glareY.set(pctY);
  };

  const handleMouseEnter = () => {
    if (!isTouch) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX: isTouch ? 0 : rotateX,
        rotateY: isTouch ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic Specular Glare Overlay */}
      {!isTouch && isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: glareOpacity }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            background: `radial-gradient(circle 350px at ${glareX.get()}% ${glareY.get()}%, ${glareColor} 0%, transparent 80%)`,
          }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-30 mix-blend-overlay"
        />
      )}
    </motion.div>
  );
}
