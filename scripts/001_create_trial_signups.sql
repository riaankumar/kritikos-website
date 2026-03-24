CREATE TABLE IF NOT EXISTS public.trial_signups (
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

-- Allow anonymous inserts (public lead-capture form, no auth required)
CREATE POLICY "Allow anonymous inserts" ON public.trial_signups
  FOR INSERT WITH CHECK (true);

-- Only service role can read (admin access via Supabase dashboard)
CREATE POLICY "Service role can read" ON public.trial_signups
  FOR SELECT USING (auth.role() = 'service_role');
