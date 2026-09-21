import React from "react";
import { INTENTS, INTENT_KEYS } from "@/lib/intents";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D090E] text-[#F5EFE8] pt-20 pb-14 border-t border-[#2E2433]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2E2433]">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FF5A7A] text-[#100C12] font-black text-sm flex items-center justify-center">
                JM
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[#F5EFE8]">
                Just Mature Mind
              </span>
            </div>

            <p className="text-sm text-[#B8AEB6] max-w-sm leading-relaxed">
              Empowering intentional, mature, and emotionally intelligent connections. Moving modern dating and mutual arrangements beyond superficial swipe games into psychological safety and conscious communication.
            </p>

            <div className="text-xs text-[#7E747E] font-mono">
              Domain: justmaturemind.com • Adults 25–60
            </div>
          </div>

          {/* Nav Col 1: Segments / Intents */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFB36B]">
              Connection Intents
            </h4>
            <ul className="space-y-2 text-xs text-[#B8AEB6]">
              {INTENT_KEYS.map((k) => (
                <li key={k}>
                  <a href="#dilemma-deck" className="hover:text-[#FF5A7A] transition-colors">
                    {INTENTS[k].label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Col 2: Interactive Modules */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFB36B]">
              Architecture
            </h4>
            <ul className="space-y-2 text-xs text-[#B8AEB6]">
              <li>
                <a href="#dilemma-deck" className="hover:text-[#F5EFE8] transition-colors">
                  Dilemma Deck
                </a>
              </li>
              <li>
                <a href="#core-pillars" className="hover:text-[#F5EFE8] transition-colors">
                  The Four Foundations
                </a>
              </li>
              <li>
                <a href="#maturity-metric" className="hover:text-[#F5EFE8] transition-colors">
                  Maturity Metric Quiz
                </a>
              </li>
              <li>
                <a href="#social-proof" className="hover:text-[#F5EFE8] transition-colors">
                  Real Outcomes
                </a>
              </li>
              <li>
                <a href="#contrast-carousel" className="hover:text-[#F5EFE8] transition-colors">
                  Red Flag vs Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Col 3: Conduct & Safety */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFB36B]">
              Standards & Discretion
            </h4>
            <p className="text-xs text-[#B8AEB6] leading-relaxed">
              Our circle operates on mutual sovereignty, radical discretion, and verified conduct. We enforce zero tolerance for ghosting, manipulation, or harassment.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#241C29] border border-[#2E2433] text-[#FFB36B] text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF5A7A]" />
                Cohort Admittance by Intent
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E747E]">
          <div>
            © {new Date().getFullYear()} Just Mature Mind (justmaturemind.com). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#B8AEB6] transition-colors">
              Privacy Directive
            </a>
            <a href="#" className="hover:text-[#B8AEB6] transition-colors">
              Terms of Arrangement
            </a>
            <a href="#" className="hover:text-[#B8AEB6] transition-colors">
              Editorial Standards
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
