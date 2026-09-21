import { QuizQuestion, SuperpowerProfile } from "./types";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "When an unexpected tension sparks during a shared evening, your instinctive impulse is to:",
    scenarioContext: "Conflict Orientation & Somatic Regulation",
    options: [
      {
        id: "opt-1a",
        text: "Step back for 15 minutes to regulate breathing before answering, stating clearly when you will return.",
        badge: "Regulated Pause",
        superpowerWeight: { groundedAnchor: 3, consciousCommunicator: 2, empatheticMirror: 1, boundaryArchitect: 2 },
      },
      {
        id: "opt-1b",
        text: "Directly articulate what you are feeling in plain English without accusation or emotional theatrics.",
        badge: "Direct Articulation",
        superpowerWeight: { groundedAnchor: 1, consciousCommunicator: 3, empatheticMirror: 2, boundaryArchitect: 2 },
      },
      {
        id: "opt-1c",
        text: "Tune into their unspoken physical cues to identify whether they are feeling criticized or unheard.",
        badge: "Somatic Attunement",
        superpowerWeight: { groundedAnchor: 2, consciousCommunicator: 1, empatheticMirror: 3, boundaryArchitect: 0 },
      },
      {
        id: "opt-1d",
        text: "Clarify what behavior is non-negotiable for you while validating their right to their own perspective.",
        badge: "Structural Clarity",
        superpowerWeight: { groundedAnchor: 1, consciousCommunicator: 1, empatheticMirror: 0, boundaryArchitect: 3 },
      },
    ],
  },
  {
    id: 2,
    question: "How do you handle a partner whose emotional pace differs noticeably from yours?",
    scenarioContext: "Pacing & Autonomy Dynamics",
    options: [
      {
        id: "opt-2a",
        text: "Hold steady in your personal center without feeling panicked or rushing to over-compensate.",
        badge: "Equanimity",
        superpowerWeight: { groundedAnchor: 3, consciousCommunicator: 1, empatheticMirror: 1, boundaryArchitect: 2 },
      },
      {
        id: "opt-2b",
        text: "Initiate a proactive 'temperature check' conversation to align expectations and definitions.",
        badge: "Expectation Alignment",
        superpowerWeight: { groundedAnchor: 1, consciousCommunicator: 3, empatheticMirror: 1, boundaryArchitect: 1 },
      },
      {
        id: "opt-2c",
        text: "Validate their need for security or exploration, adapting emotional tone to ease their tension.",
        badge: "Deep Empathy",
        superpowerWeight: { groundedAnchor: 1, consciousCommunicator: 1, empatheticMirror: 3, boundaryArchitect: 0 },
      },
      {
        id: "opt-2d",
        text: "Define comfortable agreements that respect both your calendar and their emotional bandwidth.",
        badge: "Boundary Design",
        superpowerWeight: { groundedAnchor: 1, consciousCommunicator: 1, empatheticMirror: 0, boundaryArchitect: 3 },
      },
    ],
  },
  {
    id: 3,
    question: "What does genuine intimacy feel like in your most grounded state?",
    scenarioContext: "Relational Vision & Core Truth",
    options: [
      {
        id: "opt-3a",
        text: "A quiet sanctuary where neither person has to perform, defend, or walk on eggshells.",
        badge: "Nervous System Peace",
        superpowerWeight: { groundedAnchor: 3, consciousCommunicator: 1, empatheticMirror: 2, boundaryArchitect: 1 },
      },
      {
        id: "opt-3b",
        text: "Radical transparency where hard truths are spoken with profound tenderness and respect.",
        badge: "Radical Candor",
        superpowerWeight: { groundedAnchor: 1, consciousCommunicator: 3, empatheticMirror: 1, boundaryArchitect: 1 },
      },
      {
        id: "opt-3c",
        text: "Being completely witnessed in your complexity, knowing your inner world is held safely.",
        badge: "Full Resonance",
        superpowerWeight: { groundedAnchor: 1, consciousCommunicator: 1, empatheticMirror: 3, boundaryArchitect: 0 },
      },
      {
        id: "opt-3d",
        text: "Clear, mutual arrangements and devotion where both individuals flourish as sovereign beings.",
        badge: "Mutual Sovereignty",
        superpowerWeight: { groundedAnchor: 1, consciousCommunicator: 1, empatheticMirror: 0, boundaryArchitect: 3 },
      },
    ],
  },
];

export const SUPERPOWER_PROFILES: Record<string, SuperpowerProfile> = {
  groundedAnchor: {
    id: "groundedAnchor",
    title: "The Grounded Anchor",
    subtitle: "Somatic Resilience & Nervous System Stabilizer",
    archetypeBadge: "Steadfast Presence",
    eqScore: 94,
    description: "You possess the rare emotional fortitude to remain steady when storms surge. Rather than spiraling into catastrophic reactions or anxious chasing, you create an instinctive perimeter of safety that calms those around you.",
    strengths: [
      "De-escalates high-arousal arguments without defensiveness",
      "Distinguishes temporary mood shifts from relational threat",
      "Unshakable sense of personal worth independent of daily validation",
    ],
    growthEdge: "Be mindful not to let emotional regulation look like stoic indifference. Let partners see your softness as well as your strength.",
    idealMatchDynamics: "Flourishes with highly expressive or visionary partners who appreciate calm, immovable emotional grounding.",
  },
  consciousCommunicator: {
    id: "consciousCommunicator",
    title: "The Conscious Communicator",
    subtitle: "High-Context Clarity & Repair Specialist",
    archetypeBadge: "Articulate Truth",
    eqScore: 96,
    description: "You refuse to speak in riddles or rely on passive hints. You bridge emotional distances with precise, compassionate vocabulary, transforming potential landmines into profound breakthroughs.",
    strengths: [
      "Mastery of repair speed: resolves disputes within hours, not days",
      "Expresses difficult needs with warmth rather than resentment",
      "Never weaponizes a partner's past vulnerabilities in debate",
    ],
    growthEdge: "Remember that not every moment requires deep analysis. Some feelings just need silent presence and physical touch before words.",
    idealMatchDynamics: "Pairs best with partners who value directness over passive politeness and who treat feedback as an invitation to intimacy.",
  },
  empatheticMirror: {
    id: "empatheticMirror",
    title: "The Empathetic Mirror",
    subtitle: "Intuitive Resonance & Emotional Attunement",
    archetypeBadge: "Profound Attunement",
    eqScore: 92,
    description: "You read the invisible emotional atmosphere of a room in seconds. You make people feel deeply seen, honored, and understood down to their unvoiced nuances.",
    strengths: [
      "Exceptional emotional intuition and compassionate listening",
      "Validates emotional states before searching for analytical fixes",
      "Fosters instantaneous safety for deep, unmasked vulnerability",
    ],
    growthEdge: "Protect your personal boundaries vigorously. Attunement should never mean absorbing someone else's emotional chaos as your own responsibility.",
    idealMatchDynamics: "Pairs seamlessly with stable anchors who protect your sensitive energy and appreciate your intuitive gifts.",
  },
  boundaryArchitect: {
    id: "boundaryArchitect",
    title: "The Boundary Architect",
    subtitle: "Clear Agreements & Mutual Arrangement Design",
    archetypeBadge: "Sovereign Devotion",
    eqScore: 95,
    description: "You recognize that enduring love is built on clean architecture, mutual respect, and explicit agreements. You remove resentment at the root by honoring both sovereignty and commitment.",
    strengths: [
      "Crystal-clear expectations that eliminate guessing games",
      "Zero tolerance for manipulation, breadcrumbing, or ambiguity",
      "Champions mutual arrangements where both partners thrive",
    ],
    growthEdge: "Leave room for spontaneous play and gentle messiness. Intimacy requires sturdy guardrails, but life happens in between them.",
    idealMatchDynamics: "Excels with mature partners who respect standards, take self-responsibility, and crave clear, elevated agreements.",
  },
};
