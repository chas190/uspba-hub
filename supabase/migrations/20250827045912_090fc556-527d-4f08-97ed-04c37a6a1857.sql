-- Move Florida to South region
UPDATE states 
SET region_id = (SELECT id FROM regions WHERE name = 'South')
WHERE name = 'Florida';