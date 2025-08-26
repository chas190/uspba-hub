-- Get region and division IDs first, then insert the 20 most populous states not already in the table
-- Note: Using placeholder UUIDs for region_id and division_id that need to be updated with actual values

INSERT INTO states (name, abbreviation, division_id, region_id) VALUES
('Pennsylvania', 'PA', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Illinois', 'IL', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Ohio', 'OH', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Georgia', 'GA', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('North Carolina', 'NC', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Michigan', 'MI', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('New Jersey', 'NJ', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Virginia', 'VA', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Washington', 'WA', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Arizona', 'AZ', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Massachusetts', 'MA', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Tennessee', 'TN', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Indiana', 'IN', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Missouri', 'MO', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Maryland', 'MD', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Wisconsin', 'WI', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Colorado', 'CO', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Minnesota', 'MN', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('South Carolina', 'SC', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1)),
('Alabama', 'AL', (SELECT id FROM divisions LIMIT 1), (SELECT id FROM regions LIMIT 1));