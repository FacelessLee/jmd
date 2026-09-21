import { NextResponse } from "next/server";
import { submitQuizToSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { superpowerResult, calculatedEqScore, answers, scoresBreakdown, leadId } = body;

    if (!superpowerResult || calculatedEqScore === undefined) {
      return NextResponse.json(
        { error: "Missing superpowerResult or calculatedEqScore" },
        { status: 400 }
      );
    }

    const result = await submitQuizToSupabase({
      leadId,
      superpowerResult,
      calculatedEqScore,
      answers: answers || [],
      scoresBreakdown: scoresBreakdown || {},
    });

    return NextResponse.json(result, { status: 200 });
  } catch (err: unknown) {
    console.error("Quiz submission error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
