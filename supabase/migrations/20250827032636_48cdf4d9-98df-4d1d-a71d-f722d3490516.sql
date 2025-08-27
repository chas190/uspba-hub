-- Fix the search path security warning for both functions
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

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
SET search_path = public
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