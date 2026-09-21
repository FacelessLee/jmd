"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Maximum translation of button in px (default: 8px)
  textStrength?: number; // Parallax translation of internal content in px (default: 4px)
  variant?: "flame" | "dark" | "outline" | "gold" | "ghost";
}

export function MagneticButton({
  children,
  className = "",
  strength = 8,
  textStrength = 4,
  variant = "flame",
  onClick,
  disabled,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Position motion values
  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);
  const textX = useMotionValue(0);
  const textY = useMotionValue(0);

  // Physics-driven spring damping
  const springConfig = { stiffness: 350, damping: 24, mass: 0.5 };
  const smoothButtonX = useSpring(buttonX, springConfig);
  const smoothButtonY = useSpring(buttonY, springConfig);
  const smoothTextX = useSpring(textX, springConfig);
  const smoothTextY = useSpring(textY, springConfig);

  useEffect(() => {
    setIsTouch(!window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTouch || !buttonRef.current || disabled) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const normX = distanceX / (rect.width / 2);
    const normY = distanceY / (rect.height / 2);

    buttonX.set(normX * strength);
    buttonY.set(normY * strength);
    textX.set(normX * textStrength);
    textY.set(normY * textStrength);
  };

  const handleMouseLeave = () => {
    buttonX.set(0);
    buttonY.set(0);
    textX.set(0);
    textY.set(0);
  };

  // Warm Conscious Relational System button styles
  let variantStyles = "";
  switch (variant) {
    case "flame":
      variantStyles =
        "flame-gradient text-white font-bold shadow-[0_8px_25px_rgba(255,90,96,0.32)] hover:shadow-[0_12px_32px_rgba(255,90,96,0.45)] border border-white/20";
      break;
    case "dark":
      variantStyles =
        "bg-[#1C1B1B] text-white font-bold hover:bg-[#2C2A2A] shadow-md border border-[#2C2A2A]";
      break;
    case "gold":
      variantStyles =
        "bg-[#FFC629] text-[#1C1B1B] font-extrabold hover:bg-[#ffbe10] shadow-[0_8px_20px_rgba(255,198,41,0.3)]";
      break;
    case "outline":
      variantStyles =
        "bg-white/95 text-[#1C1B1B] font-bold border border-[#E7E2DA] hover:border-[#FF5A60]/40 hover:bg-[#F8F5F2] shadow-sm";
      break;
    case "ghost":
      variantStyles =
        "bg-transparent text-[#68645E] hover:text-[#1C1B1B] hover:bg-black/5 font-semibold";
      break;
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      style={{
        x: isTouch ? 0 : smoothButtonX,
        y: isTouch ? 0 : smoothButtonY,
      }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center rounded-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A60] focus-visible:ring-offset-2 transition-colors duration-200 select-none ${variantStyles} ${className}`}
      {...(props as any)}
    >
      <motion.span
        style={{
          x: isTouch ? 0 : smoothTextX,
          y: isTouch ? 0 : smoothTextY,
        }}
        className="relative z-10 flex items-center justify-center gap-2 pointer-events-none w-full"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
