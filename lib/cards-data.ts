import { DilemmaCard } from "./types";

export const DILEMMA_CARDS: DilemmaCard[] = [
  {
    id: "card-1",
    category: "Emotional Regulation",
    dilemmaTitle: "The Delayed Text After a Sensitive Conversation",
    scenario: "You sent a vulnerable message last night addressing an unspoken tension. Twelve hours later, they haven't replied, but you see them active online.",
    superficialReaction: {
      label: "Red Flag Loop",
      action: "Assume deliberate disrespect, fire off a passive-aggressive follow-up, or stonewall them back for 24 hours.",
      psychologicalCost: "Dopamine-driven revenge cycles erode safety and convert anxiety into hostile posturing.",
    },
    matureResponse: {
      label: "Growth Space",
      action: "Recognize somatic activation. Distinguish between 'unresponsive' and 'malicious'. Regulate your nervous system before initiating contact.",
      relationalReward: "Preserves personal dignity while establishing that you operate from grounded presence, not hyper-vigilance.",
    },
    script: "“I noticed I felt uneasy waiting for your response. When you're in a clear headspace today, I'd appreciate 10 minutes to close the loop on this.”",
    metrics: {
      regulationScore: 92,
      clarityScore: 88,
    },
  },
  {
    id: "card-2",
    category: "Communication",
    dilemmaTitle: "The Subtle Defensiveness During Constructive Feedback",
    scenario: "You gently shared that you felt sidelined when plans were changed without consulting you. Their immediate reply: 'Well, you did that exact same thing two weeks ago!'",
    superficialReaction: {
      label: "Red Flag Loop",
      action: "Engage in historical accounting. Bring out a mental ledger of all their past transgressions to win the argument.",
      psychologicalCost: "Deflection turns a 2-minute emotional repair into an exhausting 3-hour forensic trial.",
    },
    matureResponse: {
      label: "Growth Space",
      action: "Do not take the bait. Acknowledge their separate grievance, but firmly anchor back to the present repair before shifting topics.",
      relationalReward: "Halts whataboutism immediately and teaches both partners that accountability isn't a zero-sum contest.",
    },
    script: "“If you felt hurt two weeks ago, that deserves its own conversation and I will listen. But right now, let’s finish resolving what happened today.”",
    metrics: {
      regulationScore: 95,
      clarityScore: 94,
    },
  },
  {
    id: "card-3",
    category: "Boundaries",
    dilemmaTitle: "The Premature Urgency for Unearned Intimacy",
    scenario: "On date three, they shower you with declarations of soulmate compatibility, pressure you for exclusive weekend trips, and complain that their exes 'never understood them.'",
    superficialReaction: {
      label: "Red Flag Loop",
      action: "Mistake the intense emotional velocity for rare chemistry. Override internal intuition to preserve the fantasy rush.",
      psychologicalCost: "Fast-forwarding past gradual trust evaluation leads to catastrophic boundary collapse when reality arrives.",
    },
    matureResponse: {
      label: "Growth Space",
      action: "Pace the connection intentionally. Warmly enjoy the mutual attraction while slowing down physical and emotional escalation.",
      relationalReward: "Protects both individuals from projection burnout and reveals whether their interest is sustainable or narcissistic supply.",
    },
    script: "“I’m really enjoying our chemistry, and because I take connection seriously, I prefer discovering compatibility slowly over time.”",
    metrics: {
      regulationScore: 89,
      clarityScore: 96,
    },
  },
  {
    id: "card-4",
    category: "Attachment",
    dilemmaTitle: "The Sudden Need for Solitude vs. Emotional Abandonment",
    scenario: "Following an intimate and connected weekend together, your partner becomes quiet, requests 48 hours to themselves, and minimizes text exchanges.",
    superficialReaction: {
      label: "Red Flag Loop",
      action: "Panic that they are withdrawing love. Send demanding check-in texts or withdraw affection preemptively to punish their distance.",
      psychologicalCost: "Suffocates the partner's natural need for autonomy and confirms their fear that closeness equals imprisonment.",
    },
    matureResponse: {
      label: "Growth Space",
      action: "Reframe solitude as relationship maintenance, not emotional desertion. Honor their boundary while confirming a specific reunion time.",
      relationalReward: "Deepens secure attachment by proving that distance does not threaten devotion.",
    },
    script: "“Take all the quiet recharge time you need. Let’s catch up Tuesday evening over dinner and see how your week opened up.”",
    metrics: {
      regulationScore: 94,
      clarityScore: 90,
    },
  },
];
