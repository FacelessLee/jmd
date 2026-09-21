"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll progress for top depth bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#100C12]/85 backdrop-blur-xl border-b border-[#2E2433] shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar at very top */}
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF5A7A] via-[#FFB36B] to-[#FF5A7A] origin-left z-50"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo with Pulsing Desire Presence Indicator */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#1A141D] border border-[#2E2433] text-[#F5EFE8]">
            <span className="font-extrabold text-xs tracking-tighter text-[#FF5A7A]">JM</span>
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A7A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5A7A]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg text-[#F5EFE8] tracking-tight group-hover:text-[#FF5A7A] transition-colors">
              Just Mature Mind
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#B8AEB6] -mt-1">
              Desire with Standards
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B8AEB6]">
          <button
            onClick={() => scrollTo("dilemma-deck")}
            className="hover:text-[#F5EFE8] transition-colors cursor-pointer py-1"
          >
            Dilemma Deck
          </button>
          <button
            onClick={() => scrollTo("core-pillars")}
            className="hover:text-[#F5EFE8] transition-colors cursor-pointer py-1"
          >
            Foundations
          </button>
          <button
            onClick={() => scrollTo("maturity-metric")}
            className="hover:text-[#F5EFE8] transition-colors cursor-pointer py-1"
          >
            Maturity Metric
          </button>
          <button
            onClick={() => scrollTo("social-proof")}
            className="hover:text-[#F5EFE8] transition-colors cursor-pointer py-1"
          >
            Real Outcomes
          </button>
          <button
            onClick={() => scrollTo("contrast-carousel")}
            className="hover:text-[#F5EFE8] transition-colors cursor-pointer py-1"
          >
            Red Flag vs Growth
          </button>
        </nav>

        {/* Right Magnetic Pill CTA */}
        <div className="hidden md:flex items-center gap-4">
          <MagneticButton
            variant="primary"
            strength={6}
            onClick={() => scrollTo("join-circle")}
            className="px-5 py-2 text-xs uppercase tracking-wider font-bold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Join the Circle
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#F5EFE8] hover:bg-white/5 border border-transparent hover:border-[#2E2433]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#100C12]/95 backdrop-blur-2xl border-b border-[#2E2433] px-6 py-6 space-y-4 shadow-2xl"
        >
          <button
            onClick={() => scrollTo("dilemma-deck")}
            className="block w-full text-left font-semibold text-[#F5EFE8] py-2 border-b border-[#2E2433]/50"
          >
            Dilemma Deck
          </button>
          <button
            onClick={() => scrollTo("core-pillars")}
            className="block w-full text-left font-semibold text-[#F5EFE8] py-2 border-b border-[#2E2433]/50"
          >
            Foundations
          </button>
          <button
            onClick={() => scrollTo("maturity-metric")}
            className="block w-full text-left font-semibold text-[#F5EFE8] py-2 border-b border-[#2E2433]/50"
          >
            Maturity Metric
          </button>
          <button
            onClick={() => scrollTo("social-proof")}
            className="block w-full text-left font-semibold text-[#F5EFE8] py-2 border-b border-[#2E2433]/50"
          >
            Real Outcomes
          </button>
          <button
            onClick={() => scrollTo("contrast-carousel")}
            className="block w-full text-left font-semibold text-[#F5EFE8] py-2"
          >
            Red Flag vs Growth
          </button>
          <div className="pt-2">
            <MagneticButton
              variant="primary"
              onClick={() => scrollTo("join-circle")}
              className="w-full py-3.5 text-xs uppercase tracking-wider font-bold"
            >
              Join the Circle
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </motion.div>
      )}
    </header>
  );
}
