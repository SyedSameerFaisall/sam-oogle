-- Create visitor counter table
CREATE TABLE public.visitor_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visit_count BIGINT NOT NULL DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert initial row
INSERT INTO public.visitor_stats (visit_count) VALUES (0);

-- Enable RLS (but allow public access for visitor counter)
ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can view visitor stats" 
ON public.visitor_stats 
FOR SELECT 
USING (true);

-- Create policy for incrementing visits (public)
CREATE POLICY "Anyone can update visitor count" 
ON public.visitor_stats 
FOR UPDATE 
USING (true);

-- Create function to increment visitor count
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS BIGINT AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.visitor_stats 
  SET visit_count = visit_count + 1, 
      last_updated = now()
  WHERE id = (SELECT id FROM public.visitor_stats LIMIT 1)
  RETURNING visit_count INTO new_count;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql;