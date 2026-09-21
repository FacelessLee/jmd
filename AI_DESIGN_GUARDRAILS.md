# 🚫 ANTI-SLOP & NON-GENERIC DESIGN DIRECTIVES: JUSTMATUREMIND.COM

## Context & Purpose
AI-generated frontends frequently suffer from predictable, homogenizing design tropes known colloquially across tech communities as "AI Slop." When instructed to build modern web applications, LLMs default to statistical averages: violet gradients, repetitive 3-column rounded boxes, floating glass blobs, and generic boilerplate copy.

**Just Mature Mind** is an intentional, emotionally intelligent platform focused on genuine connection and maturity. Its visual identity must exude human intentionality, editorial refinement, and high UX craft—not look like an off-the-shelf SaaS template spat out by an automated page builder.

Follow these strict constraints and implementation laws during development.

---

## 1. FORBIDDEN "AI SLOP" AESTHETIC TROPES (Zero Tolerance)

| Banned Slop Pattern | Why It Fails | What to Implement Instead |
| :--- | :--- | :--- |
| **Neon Violet / Indigo / Purple Nebulas** | The ubiquitous fallback palette of every generic AI SaaS page. | **Editorial Earth & Warmth**: Use our defined warm canvas (`#FBF9F5` or rich charcoal `#0D0F12`), deep sage greens (`#2A4B43`), and human warmth (Intention Coral `#FF5A5F`). |
| **"Card-in-a-Box" Overuse** | Putting every single element, paragraph, and headline inside a high-radius rounded box with `border border-slate-200 shadow-sm`. | **Open, Asymmetric Layouts**: Use whitespace, typography size differentials, and subtle dividers. Not everything needs to be wrapped in a card. |
| **Decorative Floating Glass Orbs & Blurred Blobs** | Aimless, blurry circular gradients drifting aimlessly in the background that add zero functional or visual weight. | **Purposeful Lighting & Contrast**: Crisp micro-grid lines, subtle grain texture (`svg` noise filter), or clean edge-to-edge section shifts. |
| **Random Word Gradient in Hero** | The cliché: *"Empower Your <span class="bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text">Relationships</span> Today"*. | **Typographic Weight & Contrast**: Pair high-contrast font weights, italicized serif editorial accents, or intentional font-family pairing—not synthetic color text masks. |
| **Scroll-Hijacking & Excessive Delays** | Slowing down native momentum scrolling or forcing the user to wait through 1.2s staggered `fadeIn` animations just to read body text. | **Instant Readability + Crisp Springs**: Use Lenis for smooth scroll, but keep element triggers snappier (`duration: 0.25s - 0.4s` max with spring easing). Content should never feel trapped behind a loading wall. |
| **Soulless Stock 3D Clay Shapes** | Generic floating 3D hearts, thumbs-ups, or geometric cubes. | **Human Photography & High-Fidelity UI Artifacts**: Real interactive cards, realistic conversational message bubbles, and tactile UI components inspired by Tinder/Bumble card mechanics. |

---

## 2. LAYOUT & STRUCTURAL LAWS

1. **Break the 3-Column Template:** 
   - Never generate a generic "Feature 1 | Feature 2 | Feature 3" grid with a circled Lucide icon, an H3, and 2 sentences of lorem ipsum.
   - Use dynamic visual rhythms: an asymmetrical 60/40 editorial split, horizontal draggable stacks, full-bleed interactive modules, or content accordions that reward click-through.
2. **Tactile Over Decorative:**
   - Elements must feel interactable, not just animated. If a card hovers, let it tilt based on mouse position. If a pill appears, allow it to filter, trigger, or react.
3. **Respect Density & Scale:**
   - Avoid equal padding everywhere (`p-6` on every container). Vary density: make key interactive modules compact and high-contrast, while giving editorial statements generous vertical room (`py-24` to `py-32`).

---

## 3. MICRO-INTERACTION & MOTION GUIDELINES (Inspired by LazyInterface)

- **Magnetic Proximity:** Apply magnetic pull only to primary action triggers (e.g., the primary "Explore the Deck" CTA), calculating distance relative to the cursor bounding box.
- **Spring Physics over Linear Timelines:** Use `type: "spring", stiffness: 350, damping: 25` in Framer Motion instead of arbitrary `transition: ease-in-out 0.5s`.
- **Spotlight Hovering:** Instead of a generic `border-gray-200 hover:border-blue-500`, use a dynamic radial gradient border listener (`--mouse-x`, `--mouse-y`) that lights up the container rim naturally as the cursor glides across it.

---

## 4. COPYWRITING & VOICE STANDARDS (No Corporate Slop)

The AI co-developer must NEVER populate placeholder text with generic phrases such as:
- ❌ *"Revolutionize your emotional journey"*
- ❌ *"Unlock the power of healthy relationships with cutting-edge insights"*
- ❌ *"Streamline your communication effortlessly"*
- ❌ *"In today's fast-paced digital world..."*

**Instead, use high-signal, psychologically grounded, direct language:**
-  *"Silent treatment isn’t peace. It’s emotional stonewalling."*
-  *"Compatibility isn’t the absence of conflict—it’s how quickly you repair."*
-  *"Stop matching for dopamine. Start choosing for emotional safety."*

---

## 5. CODE EXECUTION CHECKLIST BEFORE COMMITTING

- [ ] **No Default Tailwind Blues/Purples:** Are all colors sourced strictly from the configured design tokens?
- [ ] **Mobile Touch Parity:** Do mouse-tracking effects fail gracefully to clean static or gyro states on touch devices (`hover:none`)?
- [ ] **Accessibility (a11y):** Do cards and buttons have valid ARIA roles, high color contrast ratios (WCAG AA), and focus rings for keyboard navigation?
- [ ] **Semantic Structure:** Are we using `<main>`, `<section>`, `<article>`, `<header>`, and clean heading hierarchies (`h1` -> `h2` -> `h3`), avoiding `div` soup?
- [ ] **Zero Layout Shift:** Are image containers explicitly aspect-ratio bounded to eliminate CLS (Cumulative Layout Shift)?