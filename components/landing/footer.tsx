import React from "react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0F12] text-white pt-20 pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FF5A5F] text-white font-extrabold text-sm flex items-center justify-center">
                JM
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Just Mature Mind
              </span>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Empowering intentional, mature, and emotionally intelligent relationships. Moving modern romance and mutual arrangements beyond superficial swipe culture into deep psychological safety and conscious communication.
            </p>

            <div className="text-xs text-neutral-500 font-mono">
              Domain: justmaturemind.com
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#dilemma-deck" className="hover:text-white transition-colors">
                  Dilemma Deck Simulator
                </a>
              </li>
              <li>
                <a href="#maturity-metric" className="hover:text-white transition-colors">
                  Relational Superpower Quiz
                </a>
              </li>
              <li>
                <a href="#contrast-carousel" className="hover:text-white transition-colors">
                  Red Flag vs Growth Index
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Foundations
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#core-pillars" className="hover:text-white transition-colors">
                  Emotional Self-Mastery
                </a>
              </li>
              <li>
                <a href="#core-pillars" className="hover:text-white transition-colors">
                  High-Context Honesty
                </a>
              </li>
              <li>
                <a href="#core-pillars" className="hover:text-white transition-colors">
                  Pattern Disruption
                </a>
              </li>
              <li>
                <a href="#core-pillars" className="hover:text-white transition-colors">
                  Mutual Arrangements
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Community & Safety
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Our circle operates on mutual sovereignty, radical discretion, and authentic identity verification.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A4B43]/40 text-emerald-300 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Next Cohort Opening Soon
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Just Mature Mind (justmaturemind.com). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Privacy Directive
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Terms of Arrangement
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Editorial Standards
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
