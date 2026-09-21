"use client";

import React, { useState, useEffect } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Sparkles, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? "bg-[#FBF9F5]/85 backdrop-blur-xl border-b border-[#121316]/[0.06] shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo with Pulsing Active Presence Indicator */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#121316] text-white">
            <span className="font-extrabold text-sm tracking-tighter">JM</span>
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A5F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5A5F]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-[#121316] tracking-tight group-hover:text-[#2A4B43] transition-colors">
              Just Mature Mind
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#5B616E] -mt-1">
              Conscious Relational Platform
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5B616E]">
          <button
            onClick={() => scrollTo("dilemma-deck")}
            className="hover:text-[#121316] transition-colors cursor-pointer"
          >
            Dilemma Deck
          </button>
          <button
            onClick={() => scrollTo("maturity-metric")}
            className="hover:text-[#121316] transition-colors cursor-pointer"
          >
            Maturity Metric
          </button>
          <button
            onClick={() => scrollTo("core-pillars")}
            className="hover:text-[#121316] transition-colors cursor-pointer"
          >
            Foundations
          </button>
          <button
            onClick={() => scrollTo("contrast-carousel")}
            className="hover:text-[#121316] transition-colors cursor-pointer"
          >
            Red Flag vs Growth
          </button>
        </nav>

        {/* Right Magnetic Pill CTA */}
        <div className="hidden md:flex items-center gap-4">
          <MagneticButton
            variant="primary"
            strength={5}
            onClick={() => scrollTo("join-circle")}
            className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Join the Circle
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#121316] hover:bg-black/5"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-black/10 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <button
            onClick={() => scrollTo("dilemma-deck")}
            className="block w-full text-left font-semibold text-[#121316] py-2"
          >
            Dilemma Deck
          </button>
          <button
            onClick={() => scrollTo("maturity-metric")}
            className="block w-full text-left font-semibold text-[#121316] py-2"
          >
            Maturity Metric
          </button>
          <button
            onClick={() => scrollTo("core-pillars")}
            className="block w-full text-left font-semibold text-[#121316] py-2"
          >
            Foundations
          </button>
          <button
            onClick={() => scrollTo("contrast-carousel")}
            className="block w-full text-left font-semibold text-[#121316] py-2"
          >
            Red Flag vs Growth
          </button>
          <div className="pt-2">
            <MagneticButton
              variant="primary"
              onClick={() => scrollTo("join-circle")}
              className="w-full py-3 text-xs uppercase tracking-wider font-bold"
            >
              Join the Circle
            </MagneticButton>
          </div>
        </div>
      )}
    </header>
  );
}
