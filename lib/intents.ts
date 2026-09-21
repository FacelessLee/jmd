export type IntentKey =
  | "serious_relationship"
  | "hookups"
  | "short_term_fun"
  | "long_term_fun"
  | "nsa"
  | "marriage";

export interface IntentConfig {
  id: IntentKey;
  label: string;
  shortLabel: string;
  headline: string;
  subline: string;
  cta: string;
  whyItWorks: string;
  emailCta: string;
  emailPlaceholder: string;
}

export const INTENTS: Record<IntentKey, IntentConfig> = {
  serious_relationship: {
    id: "serious_relationship",
    label: "Serious relationship",
    shortLabel: "Serious",
    headline: "Date people who repair, not retreat.",
    subline:
      "Compatibility isn't the absence of friction — it's the maturity of your repair protocol.",
    cta: "Meet the repairers",
    whyItWorks:
      "Sharpens the thesis into a hook: attraction that survives conflict through conscious repair.",
    emailCta: "Meet the repairers",
    emailPlaceholder: "Enter your email for repair-minded matching",
  },
  hookups: {
    id: "hookups",
    label: "Hookups — same-night clarity",
    shortLabel: "Hookups",
    headline: "Attraction is easy. Adult is rare.",
    subline:
      "Find people who say what they want, mean what they say, and leave you feeling better than they found you.",
    cta: "Match with intent",
    whyItWorks:
      "Leads with desire, filters for conduct — maturity positioned as the upgrade to fun, not the enemy of it.",
    emailCta: "Match with intent",
    emailPlaceholder: "Enter your email for clear, adult matching",
  },
  short_term_fun: {
    id: "short_term_fun",
    label: "Short-term fun",
    shortLabel: "Short-term",
    headline: "A season, not a saga.",
    subline:
      "Trip romance, summer energy, bounded adventures — with people who can handle a beginning and an end like adults.",
    cta: "Find your season",
    whyItWorks:
      "Gives permission for impermanence inside a maturity frame — ends well is the brand promise.",
    emailCta: "Find your season",
    emailPlaceholder: "Enter your email for bounded adventures",
  },
  long_term_fun: {
    id: "long_term_fun",
    label: "Long-term fun",
    shortLabel: "Long-term fun",
    headline: "The slow burn that keeps burning.",
    subline:
      "Attraction that survives Tuesday. Build the kind of rhythm that still feels good in year three.",
    cta: "Start the slow burn",
    whyItWorks:
      "Sells duration as excitement — counters the boring-LTR stereotype casual audiences fear.",
    emailCta: "Start the slow burn",
    emailPlaceholder: "Enter your email to start the slow burn",
  },
  nsa: {
    id: "nsa",
    label: "No strings attached",
    shortLabel: "No strings",
    headline: "No strings. No guessing.",
    subline:
      "NSA only works when both people are honest about the A. State your terms, keep your freedom, skip the spiral.",
    cta: "Set your terms",
    whyItWorks:
      "Reframes NSA from casual-and-vague to casual-and-explicit — explicit arrangements do the selling.",
    emailCta: "Set your terms",
    emailPlaceholder: "Enter your email to set explicit terms",
  },
  marriage: {
    id: "marriage",
    label: "Marriage",
    shortLabel: "Marriage",
    headline: "Marry the person, not the projection.",
    subline:
      "Vows that survive real life — shared money, sick days, in-laws, boredom. Calibrate for character before the ring.",
    cta: "Calibrate for forever",
    whyItWorks:
      "Anti-fantasy honesty reads as premium to marriage-minded users burned by swipe-era performance.",
    emailCta: "Calibrate for forever",
    emailPlaceholder: "Enter your email to calibrate for forever",
  },
};

export const INTENT_KEYS: IntentKey[] = [
  "serious_relationship",
  "hookups",
  "short_term_fun",
  "long_term_fun",
  "nsa",
  "marriage",
];
