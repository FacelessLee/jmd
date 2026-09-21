import { NextResponse } from "next/server";
import { submitLeadToSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, relationshipGoal } = body;

    if (!firstName || !email || !relationshipGoal) {
      return NextResponse.json(
        { error: "Missing required fields (firstName, email, relationshipGoal)" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const result = await submitLeadToSupabase({
      firstName: firstName.trim(),
      email: email.trim(),
      relationshipGoal,
      source: body.source || "landing_page_lead_card",
      metadata: {
        timestamp: new Date().toISOString(),
        referrer: request.headers.get("referer") || "direct",
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (err: unknown) {
    console.error("Lead submission error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
