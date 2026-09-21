-- ==============================================================================
-- JUST MATURE MIND (justmaturemind.com) - SUPABASE POSTGRESQL PRODUCTION SCHEMA
-- Purpose: High-conversion lead capture, relational maturity assessments, 
--          RLS policies, and analytics.
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. ENUMS & DOMAINS
DO $$ BEGIN
    CREATE TYPE relationship_goal_type AS ENUM (
        'conscious_partner',
        'repairing_communication',
        'unlearning_patterns',
        'mutual_arrangement_clarity',
        'emotional_sovereignty'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE superpower_archetype AS ENUM (
        'groundedAnchor',
        'consciousCommunicator',
        'empatheticMirror',
        'boundaryArchitect'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. TABLE: leads
-- Stores users joining the circle, waitlist, or newsletter with goal intent.
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT NOT NULL CHECK (char_length(trim(first_name)) >= 1),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    relationship_goal TEXT NOT NULL DEFAULT 'conscious_partner',
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced', 'verified')),
    source TEXT NOT NULL DEFAULT 'landing_page_cta',
    ip_hash TEXT,
    user_agent TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Ensure unique active emails
CREATE UNIQUE INDEX IF NOT EXISTS leads_email_unique_idx ON public.leads (lower(trim(email)));
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_goal_idx ON public.leads (relationship_goal);

-- 4. TABLE: quiz_submissions
-- Stores micro-assessment completions and calculates relational EQ superpowers.
CREATE TABLE IF NOT EXISTS public.quiz_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    superpower_result superpower_archetype NOT NULL,
    calculated_eq_score SMALLINT NOT NULL CHECK (calculated_eq_score >= 0 AND calculated_eq_score <= 100),
    answers JSONB NOT NULL DEFAULT '[]'::jsonb,
    scores_breakdown JSONB NOT NULL DEFAULT '{}'::jsonb,
    session_id TEXT,
    ip_hash TEXT,
    completed_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS quiz_submissions_superpower_idx ON public.quiz_submissions (superpower_result);
CREATE INDEX IF NOT EXISTS quiz_submissions_completed_at_idx ON public.quiz_submissions (completed_at DESC);
CREATE INDEX IF NOT EXISTS quiz_submissions_lead_id_idx ON public.quiz_submissions (lead_id);

-- 5. TABLE: dilemma_card_interactions
-- Analytics for swipe patterns (Tinder/Bumble maturity mechanics): Left vs Right swipe telemetry.
CREATE TABLE IF NOT EXISTS public.dilemma_card_interactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    card_id TEXT NOT NULL,
    interaction_type TEXT NOT NULL CHECK (interaction_type IN ('swipe_red_flag', 'swipe_growth_space', 'deep_dive_view', 'script_copied')),
    duration_ms INTEGER,
    session_id TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS dilemma_interactions_card_id_idx ON public.dilemma_card_interactions (card_id, interaction_type);

-- 6. AUTOMATIC UPDATED_AT TRIGGER
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_leads_updated_at ON public.leads;
CREATE TRIGGER set_leads_updated_at
    BEFORE UPDATE ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 7. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dilemma_card_interactions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit leads (insert only, cannot read or tamper)
DROP POLICY IF EXISTS "Anon can insert new leads" ON public.leads;
CREATE POLICY "Anon can insert new leads"
    ON public.leads
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow anonymous visitors to record quiz submissions
DROP POLICY IF EXISTS "Anon can insert quiz submissions" ON public.quiz_submissions;
CREATE POLICY "Anon can insert quiz submissions"
    ON public.quiz_submissions
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow anonymous visitors to track interaction metrics
DROP POLICY IF EXISTS "Anon can record card telemetry" ON public.dilemma_card_interactions;
CREATE POLICY "Anon can record card telemetry"
    ON public.dilemma_card_interactions
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Service Role / Authenticated Admins have full access
DROP POLICY IF EXISTS "Admin service role manages all leads" ON public.leads;
CREATE POLICY "Admin service role manages all leads"
    ON public.leads
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

DROP POLICY IF EXISTS "Admin service role manages all quiz data" ON public.quiz_submissions;
CREATE POLICY "Admin service role manages all quiz data"
    ON public.quiz_submissions
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 8. HELPER VIEW FOR DASHBOARDS & EMAIL AUTOMATION
CREATE OR REPLACE VIEW public.v_lead_quiz_summary AS
SELECT 
    l.id AS lead_id,
    l.first_name,
    l.email,
    l.relationship_goal,
    l.created_at AS joined_at,
    q.superpower_result,
    q.calculated_eq_score,
    q.completed_at AS quiz_completed_at
FROM public.leads l
LEFT JOIN LATERAL (
    SELECT superpower_result, calculated_eq_score, completed_at
    FROM public.quiz_submissions qs
    WHERE qs.lead_id = l.id
    ORDER BY qs.completed_at DESC
    LIMIT 1
) q ON true;
