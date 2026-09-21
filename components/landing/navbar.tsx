"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sparkles, Menu, X, ArrowRight, Flame } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

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
          ? "bg-[#FCF9F8]/90 backdrop-blur-xl border-b border-[#E7E2DA]/80 shadow-sm py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      {/* Scroll Progress Bar at very top */}
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 left-0 right-0 h-[3px] flame-gradient origin-left z-50"
      />

      <div className="w-full px-8 sm:px-12 lg:px-16 2xl:px-24 flex items-center justify-between">

        {/* Brand Logo with Official Flame Emblem SVG */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <svg viewBox="0 0 240 60" className="h-9 sm:h-10 w-auto" fill="none">
            <defs>
              <linearGradient id="nav_jm_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF5A60" />
                <stop offset="50%" stopColor="#FFA41C" />
                <stop offset="100%" stopColor="#FFC629" />
              </linearGradient>
            </defs>
            <g transform="translate(6, 6)">
              <circle cx="22" cy="22" r="21" fill="url(#nav_jm_grad)" />
              <path
                d="M22 13 C24 16, 28 18, 28 22 C28 25.5 25.5 28 22 28 C18.5 28 16 25.5 16 22 C16 19, 18 16.5, 20 14 C20 18, 22 19, 23 21 C23.5 20, 23.5 18.5, 22 13 Z"
                fill="#ffffff"
                opacity="0.95"
              />
              <circle cx="29" cy="14" r="3.5" fill="#ffffff" />
            </g>
            <text
              x="62"
              y="29"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="900"
              fontSize="20"
              letterSpacing="-0.5px"
              fill="#1C1B1B"
            >
              Just Mature Mind
            </text>
            <text
              x="62"
              y="44"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="700"
              fontSize="9.5"
              letterSpacing="1.5px"
              fill="#68645E"
            >
              CONSCIOUS DATING &amp; EQ
            </text>
          </svg>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#4F4633]">
          <button
            onClick={() => scrollTo("sparks-showcase")}
            className="hover:text-[#FF5A60] transition-colors cursor-pointer py-1"
          >
            The Spectrum
          </button>
          <button
            onClick={() => scrollTo("matchmaking-protocol")}
            className="hover:text-[#FF5A60] transition-colors cursor-pointer py-1 flex items-center gap-1.5"
          >
            <span>Matchmaking</span>
            <span className="px-2 py-0.5 text-[10px] font-black uppercase rounded-full bg-[#E8F5E9] text-[#2D6A4F]">
              Curated
            </span>
          </button>
          <button
            onClick={() => scrollTo("active-cohorts")}
            className="hover:text-[#FF5A60] transition-colors cursor-pointer py-1"
          >
            Active Cohort
          </button>
          <button
            onClick={() => scrollTo("dilemma-simulator")}
            className="hover:text-[#FF5A60] transition-colors cursor-pointer py-1"
          >
            Dilemma Deck
          </button>
          <button
            onClick={() => scrollTo("maturity-metric")}
            className="hover:text-[#FF5A60] transition-colors cursor-pointer py-1"
          >
            Maturity Metric
          </button>
          <button
            onClick={() => scrollTo("the-foundations")}
            className="hover:text-[#FF5A60] transition-colors cursor-pointer py-1"
          >
            Foundations
          </button>
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <MagneticButton
            onClick={() => scrollTo("join-cohort")}
            variant="flame"
            strength={7}
            textStrength={3}
            className="px-6 py-2.5 text-[13px]"
          >
            <Flame className="w-4 h-4" />
            <span>Find Your Spark</span>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#1C1B1B] hover:bg-black/5"
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
          className="lg:hidden bg-[#FCF9F8]/98 backdrop-blur-2xl border-b border-[#E7E2DA] px-6 py-6 space-y-4 shadow-xl"
        >
          <button
            onClick={() => scrollTo("sparks-showcase")}
            className="block w-full text-left font-bold text-[#1C1B1B] py-2 border-b border-[#E7E2DA]/60"
          >
            The Spectrum
          </button>
          <button
            onClick={() => scrollTo("matchmaking-protocol")}
            className="block w-full text-left font-bold text-[#1C1B1B] py-2 border-b border-[#E7E2DA]/60 flex items-center justify-between"
          >
            <span>Matchmaking Architecture</span>
            <span className="px-2 py-0.5 text-[10px] font-black uppercase rounded-full bg-[#E8F5E9] text-[#2D6A4F]">
              Curated
            </span>
          </button>
          <button
            onClick={() => scrollTo("active-cohorts")}
            className="block w-full text-left font-bold text-[#1C1B1B] py-2 border-b border-[#E7E2DA]/60"
          >
            Active Cohorts
          </button>
          <button
            onClick={() => scrollTo("dilemma-simulator")}
            className="block w-full text-left font-bold text-[#1C1B1B] py-2 border-b border-[#E7E2DA]/60"
          >
            Dilemma Deck
          </button>
          <button
            onClick={() => scrollTo("maturity-metric")}
            className="block w-full text-left font-bold text-[#1C1B1B] py-2 border-b border-[#E7E2DA]/60"
          >
            Maturity Metric
          </button>
          <button
            onClick={() => scrollTo("the-foundations")}
            className="block w-full text-left font-bold text-[#1C1B1B] py-2"
          >
            The Foundations
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollTo("join-cohort")}
              className="w-full py-3.5 rounded-full text-sm font-bold text-white flame-gradient shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Find Your Spark</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

