"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Maximum translation in px (default: 6px)
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function MagneticButton({
  children,
  className = "",
  strength = 6,
  variant = "primary",
  onClick,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer (mouse/trackpad)
    setIsTouch(!window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTouch || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Normalize and scale by strength
    const moveX = (distanceX / (rect.width / 2)) * strength;
    const moveY = (distanceY / (rect.height / 2)) * strength;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Base aesthetic styles adhering strictly to design tokens
  let variantStyles = "bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm";
  if (variant === "primary") {
    variantStyles =
      "bg-gradient-to-r from-[#FF5A5F] to-[#FF7E40] text-white shadow-md shadow-[#FF5A5F]/20 hover:shadow-lg hover:shadow-[#FF5A5F]/30";
  } else if (variant === "secondary") {
    variantStyles =
      "bg-[#2A4B43] text-white shadow-sm hover:bg-[#345c52] shadow-[#2A4B43]/20";
  } else if (variant === "outline") {
    variantStyles =
      "bg-white/80 backdrop-blur-md text-[#121316] border border-black/10 hover:border-black/20 hover:bg-white";
  } else if (variant === "ghost") {
    variantStyles = "bg-transparent text-[#121316] hover:bg-black/5";
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] focus-visible:ring-offset-2 ${variantStyles} ${className}`}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
