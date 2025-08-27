-- Fix security vulnerability: Restrict demo_bookings SELECT access to authenticated users only
-- Remove the public read policy that allows anyone to view sensitive customer data
DROP POLICY "Demo requests are viewable by everyone" ON public.demo_bookings;

-- Create a new policy that only allows authenticated users to view demo bookings
-- This ensures only admin staff can access customer contact information
CREATE POLICY "Authenticated users can view demo requests" 
ON public.demo_bookings 
FOR SELECT 
TO authenticated
USING (true);

-- Keep the existing INSERT policy unchanged so public users can still submit demo requests
-- The "Anyone can submit demo requests" policy remains as is