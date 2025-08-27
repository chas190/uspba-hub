-- Clean up the previous attempt
DROP VIEW IF EXISTS public.owners_public;

-- The main fix is already in place with the restricted policy on owners table
-- Let's verify the current policies are correct

-- Check if we need to add a policy for public access to owner names only
-- Create a function to safely get public owner information without sensitive data
CREATE OR REPLACE FUNCTION get_public_owner_info()
RETURNS TABLE(
  id uuid,
  team_id uuid,
  name text,
  created_at timestamptz,
  updated_at timestamptz
)
LANGUAGE sql
SECURITY INVOKER
STABLE
AS $$
  SELECT 
    o.id,
    o.team_id,
    o.name,
    o.created_at,
    o.updated_at
  FROM owners o
  WHERE true; -- This will be filtered by RLS policies
$$;