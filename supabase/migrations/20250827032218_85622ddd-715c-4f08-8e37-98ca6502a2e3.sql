-- Drop the existing view and recreate it without SECURITY DEFINER
DROP VIEW IF EXISTS public.owners_public;

-- Create a safer public view that doesn't use SECURITY DEFINER
-- This view will use the permissions of the querying user
CREATE VIEW public.owners_public AS
SELECT 
  id,
  team_id,
  name,
  created_at,
  updated_at
FROM public.owners;

-- Enable RLS on the view to ensure proper access control
ALTER VIEW public.owners_public SET (security_invoker = true);

-- Create RLS policies for the view
CREATE POLICY "Public owner names are viewable" 
ON public.owners_public 
FOR SELECT 
USING (true);