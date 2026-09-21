// Supabase client helper for client & server contexts

export interface LeadPayload {
  firstName: string;
  email: string;
  relationshipGoal: string;
  source?: string;
  metadata?: Record<string, unknown>;
}

export interface QuizPayload {
  leadId?: string;
  superpowerResult: string;
  calculatedEqScore: number;
  answers: Array<{ questionId: number; optionId: string }>;
  scoresBreakdown: Record<string, number>;
}

// Server action / API safe poster to Supabase REST endpoint if configured
export async function submitLeadToSupabase(payload: LeadPayload) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // If Supabase credentials aren't set in local env yet, gracefully acknowledge and log
    console.info("[Just Mature Mind] Supabase env vars not detected. Mocking submission locally:", payload);
    return {
      success: true,
      leadId: "local-lead-" + Date.now(),
      message: "Lead successfully queued (local fallback mode).",
    };
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      first_name: payload.firstName,
      email: payload.email.toLowerCase().trim(),
      relationship_goal: payload.relationshipGoal,
      source: payload.source || "landing_page",
      metadata: payload.metadata || {},
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase lead insert failed: ${errorText}`);
  }

  const data = await response.json();
  return {
    success: true,
    leadId: data[0]?.id,
    data: data[0],
  };
}

export async function submitQuizToSupabase(payload: QuizPayload) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.info("[Just Mature Mind] Supabase env vars not detected. Mocking quiz submission locally:", payload);
    return {
      success: true,
      submissionId: "local-quiz-" + Date.now(),
    };
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/quiz_submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      lead_id: payload.leadId || null,
      superpower_result: payload.superpowerResult,
      calculated_eq_score: payload.calculatedEqScore,
      answers: payload.answers,
      scores_breakdown: payload.scoresBreakdown,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase quiz submission failed: ${errorText}`);
  }

  const data = await response.json();
  return {
    success: true,
    submissionId: data[0]?.id,
  };
}
