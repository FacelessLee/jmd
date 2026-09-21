export type DilemmaType = "red_flag" | "growth_space";

export interface DilemmaCard {
  id: string;
  category: "Emotional Regulation" | "Boundaries" | "Communication" | "Attachment";
  scenario: string;
  dilemmaTitle: string;
  superficialReaction: {
    label: "Red Flag Loop";
    action: string;
    psychologicalCost: string;
  };
  matureResponse: {
    label: "Growth Space";
    action: string;
    relationalReward: string;
  };
  script: string;
  metrics: {
    regulationScore: number;
    clarityScore: number;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  scenarioContext: string;
  options: {
    id: string;
    text: string;
    badge: string;
    superpowerWeight: {
      groundedAnchor: number;
      consciousCommunicator: number;
      empatheticMirror: number;
      boundaryArchitect: number;
    };
  }[];
}

export interface SuperpowerProfile {
  id: string;
  title: string;
  subtitle: string;
  archetypeBadge: string;
  eqScore: number;
  description: string;
  strengths: string[];
  growthEdge: string;
  idealMatchDynamics: string;
}

export interface LeadSubmission {
  firstName: string;
  email: string;
  relationshipGoal: string;
  quizResult?: string;
  metadata?: Record<string, unknown>;
}
