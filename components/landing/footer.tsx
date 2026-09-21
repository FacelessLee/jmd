import React from "react";
import { INTENTS, INTENT_KEYS } from "@/lib/intents";
import { ShieldCheck, Lock, CheckCircle2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] text-[#1C1B1B] pt-20 pb-16 border-t border-[#E7E2DA]">
      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 2xl:px-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#E7E2DA]">
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a href="#" className="inline-block group">
              <svg viewBox="0 0 240 60" className="h-10 w-auto" fill="none">
                <defs>
                  <linearGradient id="footer_jm_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF5A60" />
                    <stop offset="50%" stopColor="#FFA41C" />
                    <stop offset="100%" stopColor="#FFC629" />
                  </linearGradient>
                </defs>
                <g transform="translate(6, 6)">
                  <circle cx="22" cy="22" r="21" fill="url(#footer_jm_grad)" />
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

            <p className="text-sm text-[#4F4633] leading-relaxed max-w-sm">
              The conscious relational ecosystem designed for emotionally articulate daters. Cultivating psychological safety, intentional attraction, and boundary clarity over dopamine loops.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2D6A4F] text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Mindful Matching</span>
              </span>
            </div>
          </div>

          {/* Explore Nav */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#1C1B1B]">
              Explore
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-[#4F4633]">
              <a className="hover:text-[#FF5A60] transition-colors" href="#sparks-showcase">
                The Spectrum
              </a>
              <a className="hover:text-[#FF5A60] transition-colors" href="#matchmaking-protocol">
                Curated Matchmaking
              </a>
              <a className="hover:text-[#FF5A60] transition-colors" href="#active-cohorts">
                Live Cohorts
              </a>
              <a className="hover:text-[#FF5A60] transition-colors" href="#dilemma-simulator">
                Dilemma Deck
              </a>
              <a className="hover:text-[#FF5A60] transition-colors" href="#maturity-metric">
                Maturity Metric
              </a>
              <a className="hover:text-[#FF5A60] transition-colors" href="#the-foundations">
                The Foundations
              </a>
            </nav>
          </div>

          {/* Safety & Principles */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#1C1B1B]">
              Safety &amp; Principles
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#4F4633]">
              <li>Attachment Styles Protocol</li>
              <li>Zero-Ghosting Charter</li>
              <li>Mutual Agreement Pacts</li>
              <li>Somatic Repair Guidelines</li>
              <li>Cross-Continental Dating Discretion</li>
            </ul>
          </div>

          {/* Integrity & Security */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#1C1B1B]">
              Integrity &amp; Security
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E7E2DA] shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#2D6A4F] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#1C1B1B]">Identity &amp; EQ Vetted</div>
                  <div className="text-[11px] text-[#68645E]">Zero bots, 100% human authenticity</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E7E2DA] shadow-sm">
                <Lock className="w-5 h-5 text-[#FFA41C] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#1C1B1B]">End-to-End Privacy</div>
                  <div className="text-[11px] text-[#68645E]">Discreet communications framework</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68645E]">
          <p>© {new Date().getFullYear()} Just Mature Mind Inc. All rights reserved. Intimacy with intention.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-[#1C1B1B] transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-[#1C1B1B] transition-colors" href="#">Terms of Connection</a>
            <a className="hover:text-[#1C1B1B] transition-colors" href="#">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
