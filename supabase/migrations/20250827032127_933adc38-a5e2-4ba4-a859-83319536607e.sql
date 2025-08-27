-- Remove the overly permissive public SELECT policy for owners
DROP POLICY IF EXISTS "Owners are publicly viewable" ON public.owners;

-- Create a more secure policy that only allows team owners to view their own contact information
CREATE POLICY "Team owners can view their own contact information" 
ON public.owners 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 
    FROM teams t 
    WHERE t.id = owners.team_id 
    AND t.owner_id = auth.uid()
  )
);

-- Allow authenticated users to view owner names only (without contact info) for legitimate business purposes
-- This requires creating a view for public owner information
CREATE OR REPLACE VIEW public.owners_public AS
SELECT 
  id,
  team_id,
  name,
  created_at,
  updated_at
FROM public.owners;

-- Grant SELECT permissions on the public view to authenticated users
GRANT SELECT ON public.owners_public TO authenticated;
GRANT SELECT ON public.owners_public TO anon;