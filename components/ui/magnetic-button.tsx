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

  // Base aesthetic styles adhering strictly to dark warm human design tokens
  let variantStyles = "bg-[#1A141D] text-[#F5EFE8] hover:bg-[#241C29] border border-[#2E2433]";
  if (variant === "primary") {
    variantStyles =
      "bg-[#FF5A7A] hover:bg-[#ff4367] text-[#100C12] font-bold shadow-lg shadow-[#FF5A7A]/25 hover:shadow-[#FF5A7A]/40 transition-all";
  } else if (variant === "secondary") {
    variantStyles =
      "bg-[#FFB36B] hover:bg-[#ffa34d] text-[#100C12] font-bold shadow-md shadow-[#FFB36B]/20";
  } else if (variant === "outline") {
    variantStyles =
      "bg-[#1A141D]/90 backdrop-blur-md text-[#F5EFE8] border border-[#2E2433] hover:border-[#FF5A7A]/50 hover:bg-[#241C29] transition-all";
  } else if (variant === "ghost") {
    variantStyles = "bg-transparent text-[#B8AEB6] hover:text-[#F5EFE8] hover:bg-white/5";
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
      className={`relative inline-flex items-center justify-center font-medium rounded-full cursor-pointer transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A7A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#100C12] min-h-[44px] ${variantStyles} ${className}`}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
