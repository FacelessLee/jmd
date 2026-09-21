# PRD: Just Mature Mind — "Desire with Standards" Redesign

## 1. Context & Architecture
**justmaturemind.com** is an intentional, emotionally intelligent relationship and connection platform positioned on clarity, conduct, and mature compatibility. 

### Production Architecture
- **Framework:** Next.js 15+ (App Router, TypeScript, React 19)
- **Styling & Design Tokens:** Tailwind CSS v4, dynamic CSS variables (`--mouse-x`, `--mouse-y`, `--mouse-screen-x`, `--mouse-screen-y`)
- **Animation & Physics Engine:** 
  - `framer-motion` for spring-physics drag gestures, 3D perspective card tilts, layout morphing, and on-scroll viewport reveals
  - `@studio-freight/lenis` / `lenis` for smooth inertia scrolling
- **Component System:** Modular React components under `components/landing/` and `components/ui/`, with Lucide Icons and Canvas Confetti
- **Lead Capture & Data:** Supabase PostgreSQL backend integration (`/api/lead`, `/api/quiz`)

---

## 2. Strategic Spine (Do Not Violate)
One brand promise across all six audiences:
> **“Whatever you're here for — clarity and conduct are the sexiest things in the room.”**

Maturity is positioned as the **upgrade to fun and desire**, never the opposite or enemy of it. We do not average the message into generic therapy-speak; we **segment by intent** at the very top of the page, allowing each visitor to self-select what they are seeking and serving each of them a tailored hero headline, subline, and CTA.

This also quietly resolves positioning ambiguity: *"explicit mutual arrangements"* is brought into structured, adult clarity rather than left vague.

---

## 3. The 6-Intent Segmentation Matrix

The top of the page features an intent selector chip bar with six distinct relationship modes. Selecting a chip swaps the headline, subline, and CTA verbatim, persists the choice in `localStorage`, and tailors the email-capture CTA sitewide.

### 1. Serious relationship
- **Headline:** *"Date people who repair, not retreat."*
- **Subline:** *"Compatibility isn't the absence of friction — it's the maturity of your repair protocol."*
- **CTA:** *"Meet the repairers"*
- **Why it works:** Sharpens our existing core thesis into an irresistible hook. Our strongest sentence, kept front and center.

### 2. Hookups — same-night clarity
- **Headline:** *"Attraction is easy. Adult is rare."*
- **Subline:** *"Find people who say what they want, mean what they say, and leave you feeling better than they found you."*
- **CTA:** *"Match with intent"*
- **Why it works:** Leads with desire, filters for conduct — maturity positioned as the upgrade to fun, not the enemy of it.

### 3. Short-term fun
- **Headline:** *"A season, not a saga."*
- **Subline:** *"Trip romance, summer energy, bounded adventures — with people who can handle a beginning and an end like adults."*
- **CTA:** *"Find your season"*
- **Why it works:** Gives permission for impermanence inside a maturity frame — "ends well" is the brand promise.

### 4. Long-term fun
- **Headline:** *"The slow burn that keeps burning."*
- **Subline:** *"Attraction that survives Tuesday. Build the kind of rhythm that still feels good in year three."*
- **CTA:** *"Start the slow burn"*
- **Why it works:** Sells duration as excitement — directly counters the boring-LTR stereotype that casual/fun-seeking audiences fear.

### 5. No strings attached
- **Headline:** *"No strings. No guessing."*
- **Subline:** *"NSA only works when both people are honest about the A. State your terms, keep your freedom, skip the spiral."*
- **CTA:** *"Set your terms"*
- **Why it works:** Reframes NSA from casual-and-vague to casual-and-explicit — explicit-arrangements content does the selling.

### 6. Marriage
- **Headline:** *"Marry the person, not the projection."*
- **Subline:** *"Vows that survive real life — shared money, sick days, in-laws, boredom. Calibrate for character before the ring."*
- **CTA:** *"Calibrate for forever"*
- **Why it works:** Anti-fantasy honesty reads as ultra-premium to marriage-minded users burned by swipe-era performance.

---

## 4. Page Architecture & Hero Placement
1. **Swipe Deck Above the Fold (Hero):** 
   - The interactive Dilemma Deck is our strongest, most tactile asset. It is placed directly in the Hero viewport (split-screen layout: Left = Intent chips + Tailored copy + CTA; Right = Live Draggable Swipe Deck).
   - Real Framer Motion spring physics, tactile drag thresholds, visible and interactive on initial page load without requiring scrolling down.
   - Dual controls: tactile mouse/touch drag + directional buttons + full keyboard accessibility (Left/Right arrows, Space/Enter to flip).
2. **Dynamic Sticky Navbar:**
   - Dark aubergine glass (`#100C12`/80 + `backdrop-blur-xl`), hairline border (`#2E2433`), glowing active presence indicator, top scroll-progress depth line, and magnetic pill CTA.
3. **Maturity Metric Interactive Assessment:**
   - Restyled to dark warm tokens; interactive circular gauge with smooth animated stroke; quiz completion CTA tailored to the selected intent.
4. **The Four Foundations (Bento Grid):**
   - Asymmetric layout with mouse-tracking radial border highlights (`--mouse-x`, `--mouse-y`) and subtle 3D card tilt.
   - Grounded claims with field-tested outcome copy.
5. **Red Flag vs. Growth Space Carousel:**
   - Horizontal drag and scroll momentum contrasting superficial habits against mature relational practices.
   - Sentence-case tags with weight and shape distinction (no shouting ALL CAPS).
6. **Social Proof & Real-Style Testimonials:**
   - 4 real-style outcome cards representing diverse intents (name, age 28–55, intent badge, authentic quote).
   - Zero fabricated percentage metrics.
7. **Lead Capture (Circle Membership):**
   - Elevated dark card with subtle rose ambient glow; dynamic CTA matching the selected intent; single clean email input with inline validation and confetti celebration.
8. **Footer:**
   - Charcoal aubergine canvas with intent links, privacy standards, and sovereign arrangement directives.

---

## 5. Design System: Dark, Warm, Human

### Color Palette (60 / 30 / 10 Rule)
- **Base (60%):** Deep aubergine charcoal `#100C12`; raised card surfaces `#1A141D`; elevated hover states `#241C29`; hairline borders `#2E2433`.
- **Text & Warm Neutrals (30%):** Primary text `#F5EFE8` (warm off-white); secondary text `#B8AEB6`; tertiary/muted `#7E747E`.
- **Warm Accents (10% max per viewport):**
  - **Desire Rose `#FF5A7A`:** Attraction, primary CTAs, active intent chips, hover heat. (Represents *wanting*).
  - **Hearth Amber `#FFB36B`:** Safety, growth space states, warmth moments. (Represents *keeping*).
  - *Rule:* Rose = wanting, Amber = keeping. Never both on one element.
- **Semantic States:**
  - Red-flag states: Crimson `#E5484D`.
  - Growth-space states: Hearth Amber `#FFB36B` (avoids red/green colorblind clash; always pair with an icon/label, never color alone).

### Typography
- **Display (H1 / H2):** Characterful serif (Playfair Display / Fraunces), sentence case, never ALL CAPS, letter-spacing normal.
- **UI & Body:** Plus Jakarta Sans / Inter, 16px minimum body font for accessibility across older demographics (ages 25–60+), 1.5 line-height, minimum 4.5:1 contrast ratio against dark backgrounds.
- **Two Weights Pairing:** 400 / 600 weight distinction for clean hierarchy without visual noise.

---

## 6. Motion & "Alive" Interactivity System
The user interface must feel responsive to every user motion, eliminating any static or sluggish sensation:
1. **Global Ambient Cursor Glow:**
   - `components/ui/mouse-ambient-glow.tsx` tracks cursor coordinates across the window, smoothly projecting a subtle warm ambient radial spotlight behind the content.
   - Fails gracefully on touch devices (`pointer: coarse`) and honors `prefers-reduced-motion`.
2. **Spotlight Radial Border Shader:**
   - Containers use dynamic radial gradient border listeners (`--mouse-x`, `--mouse-y`) that illuminate the rim naturally as the cursor glides across.
3. **Tactile Spring Physics:**
   - Card drag, chip transitions, and magnetic pulls use Framer Motion springs (`stiffness: 350, damping: 25`) instead of linear CSS transitions.
4. **On-Scroll Viewport Page Reveals:**
   - Every section animates into view smoothly (`opacity: 0, y: 20` to `opacity: 1, y: 0`) using viewport triggers with snappy spring durations (0.35s–0.5s).
5. **Top Scroll Progress Indicator:**
   - A subtle warm gradient line along the navbar tracks scroll depth down the page.
6. **Magnetic Proximity:**
   - Primary action triggers translate toward the cursor on hover.

---

## 7. Credibility & Content Grounding Directives
- **Zero Fake Metrics:** Kill unsourced numbers ("EQ 94%", "eliminates regret by 80%"). Replace with real member counts (8,400+ intentional members) and real outcome quotes.
- **Sentence Case Throughout:** Replace all shouting ALL-CAPS badges ("GROWTH SPACE", "RED FLAG") with refined sentence case ("Growth space", "Red flag").
- **Age Accessibility (25–60+):** 16px+ body text, high contrast, generous touch targets (≥48px).
- **Ad Platform Compliance:** Suggestive and emotionally intelligent without explicit sexual content, maintaining full eligibility for Meta and Google paid acquisition.

---

## 8. Acceptance Criteria
- [x] Intent selector swaps hero copy and CTA smoothly across all 6 intents, persists via `localStorage`, and tailors email CTA sitewide
- [x] Interactive Dilemma Deck is positioned above the fold in the Hero, with tactile drag, buttons, and keyboard controls
- [x] Dark, warm, human palette tokens applied consistently across all sections
- [x] Zero unsourced statistics remain; grounded outcome copy and testimonials implemented
- [x] Sentence case used consistently for all UI badges and stamps
- [x] Global mouse-tracking ambient glow, spotlight borders, and on-scroll page transitions active
- [x] WCAG 2.2 AA contrast verified; `prefers-reduced-motion` honored