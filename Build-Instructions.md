# MISSION BRIEF: REDESIGN & IMPLEMENT JUSTMATUREMIND.COM

## 1. PROJECT OVERVIEW & POSITIONING
- **Product Name:** Just Mature Mind
- **Domain:** justmaturemind.com
- **Core Value Proposition:** Empowering intentional, mature, and emotionally intelligent relationships. Moving modern romance and personal connection beyond superficial swipe culture into deep compatibility, emotional resilience, and intentional communication.
- **Visual & UX References:**
  - **Tinder/Bumble:** Tactile card stacks, vibrant micro-interactions, high-impact typography, pill badges, and playful yet authentic profile/scenario cards.
  - **LazyInterface:** Ultra-smooth 60fps animations, physics-driven mouse tracking, magnetic cursor hover effects on CTAs, 3D card tilts, and sleek glassmorphism.

---

## 2. TECH STACK & SYSTEM ARCHITECTURE
- **Framework:** Next.js 15+ (App Router, TypeScript) or React 19 + Vite + TypeScript.
- **Styling:** Tailwind CSS v4, CSS Variables for dynamic cursor positions (`--mouse-x`, `--mouse-y`), Lucide Icons.
- **Animation & Physics Engine:** 
  - `framer-motion` (for drag gestures, layout morphing, presence switches, spring dynamics).
  - `@studio-freight/lenis` (for smooth inertia scrolling).
- **Backend / Database:** Supabase (PostgreSQL) for leads, contact inquiries, and interactive quiz submissions; Resend for transactional notifications.

---

## 3. DESIGN SYSTEM & MOTION GUIDELINES
- **Color Palette:**
  - `Background Primary`: Warm Canvas `#FBF9F5` / Dark mode `#0D0F12`
  - `Surface / Cards`: Clean Glass White `rgba(255, 255, 255, 0.75)` with `backdrop-blur-xl` and border `rgba(0,0,0,0.06)`
  - `Primary Accent (Intention Coral)`: `#FF5A5F` to `#FF7E40` gradient (inspired by Tinder/Bumble vibrancy but refined for maturity)
  - `Secondary Accent (Deep Sage / Insight)`: `#2A4B43`
  - `Text Neutral`: Deep Obsidian `#121316` (headings), Muted Slate `#5B616E` (subtitles)
- **Typography:**
  - Headings: Variable Display Sans (e.g., `Plus Jakarta Sans` or `Cabinet Grotesk`), tight tracking (`tracking-tight`), heavy weight (`font-extrabold`).
  - Body: `Inter` or `Geist Sans`, balanced readability (`leading-relaxed`).
- **Interactive Micro-Motions:**
  - **Magnetic Buttons:** Primary buttons translate up to 6px toward the user's cursor on hover.
  - **3D Card Perspective:** Hero and feature cards rotate on mouse movement (`rotateX`, `rotateY` derived from cursor distance from element center).
  - **Dynamic Card Deck:** An interactive swipeable/draggable card component demonstrating mature relationship dilemmas.

---

## 4. PRODUCT REQUIREMENTS DOCUMENT (PRD) & PAGE ARCHITECTURE

### Section 1: Dynamic Sticky Navbar
- Logo: "Just Mature Mind" with a pulsing gradient dot (indicates active community/presence).
- Center Links: Values, Interactive Deck, Guides, Community, Insights.
- Right CTA: Magnetic Pill Button ("Join the Circle").
- Blur effect on scroll (`backdrop-blur-md bg-white/70 border-b border-black/5`).

### Section 2: The Hero Section (Bumble meets LazyInterface)
- **Headline:** "Dating Got Complicated. Maturity Makes It Simple."
- **Subheadline:** "The platform for emotional clarity, conscious communication, and resilient partnerships. Step out of superficial loops into genuine connection."
- **Dual CTA:**
  - Primary: "Explore the Dilemma Deck" (Scrolls to interactive module)
  - Secondary: "Join the Waitlist / Newsletter"
- **Interactive Hero Visual (Right or Center):**
  - A 3D interactive stack of "Perspective Cards" (e.g., *Card 1: "Silent Treatment vs. Pausing to Regulate"*, *Card 2: "Attachment Style or Incompatibility?"*).
  - Draggable with Framer Motion spring physics; swiping left/right reveals actionable maturity insights with celebratory micro-animations.

### Section 3: The "Maturity Metric" Interactive Preview (Gamified UX)
- A micro-assessment module inspired by dating app profiles.
- Users click through 3 quick emotional intelligence prompts (e.g., conflict handling, vulnerability pace, love languages).
- Instant animated gauge calculation revealing their "Relational Superpower."

### Section 4: Core Pillars (Grid with Mouse-Follower Glow)
- Bento Grid layout highlighting four foundations:
  1. **Emotional Self-Mastery:** Knowing your triggers before sharing them.
  2. **High-Context Communication:** Replacing guess-games with direct honesty.
  3. **Pattern Disruption:** Unlearning toxic relationship cycles.
  4. **The Mature Community:** Discussions moderated around growth, not venting.
- Every Bento card must implement mouse-tracking radial gradient borders (`background: radial-gradient(...)`).

### Section 5: The "Red Flag vs. Growth Space" Card Carousel
- Horizontal scroll with drag momentum.
- Cards contrast typical dating drama against mature relationship practices.

### Section 6: High-Conversion Lead Capture & Newsletter
- Floating card design with minimal inputs: First Name, Email, and a single dropdown ("What is your biggest relationship goal right now?").
- Optimistic UI submission state with confetti / smooth checkmark spring animation.

### Section 7: Footer
- Elegant dark-canvas footer with essential links, privacy policy, terms, and social handles.

---

## 5. CODE DELIVERABLES EXPECTED
1. **`components/ui/magnetic-button.tsx`**: Reusable component wrapping buttons with cursor physics via Framer Motion.
2. **`components/ui/card-stack.tsx`**: Touch- and mouse-draggable swipeable card stack with directional rotation and swipe thresholds.
3. **`components/ui/bento-card.tsx`**: Bento cell featuring the cursor-tracking border spotlight effect.
4. **`components/landing/hero.tsx` & `page.tsx`**: Full composite page tying the sections together with Lenis smooth scroll initialized in layout.

Execute modern, maintainable TypeScript code with strict component separation and zero unnecessary external dependencies.