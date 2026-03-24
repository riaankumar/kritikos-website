DROP TABLE IF EXISTS public.trial_signups;

CREATE TABLE public.trial_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  school_name TEXT NOT NULL,
  school_website TEXT,
  school_size TEXT,
  school_type TEXT,
  students_count TEXT,
  grades_offered TEXT,
  willing_to_give_feedback BOOLEAN,
  willing_to_join_setup_call BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.trial_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.trial_signups
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts" ON public.trial_signups
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON public.trial_signups
  FOR ALL TO service_role USING (true) WITH CHECK (true);
