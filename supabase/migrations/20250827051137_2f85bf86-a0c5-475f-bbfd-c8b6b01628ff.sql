-- Insert top 5 most populated counties for existing states only

-- California (some may already exist)
INSERT INTO counties (name, state_id) VALUES
('Los Angeles', (SELECT id FROM states WHERE name = 'California')),
('San Diego', (SELECT id FROM states WHERE name = 'California')),
('Orange', (SELECT id FROM states WHERE name = 'California'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Florida (avoiding duplicates)
INSERT INTO counties (name, state_id) VALUES
('Miami-Dade', (SELECT id FROM states WHERE name = 'Florida')),
('Broward', (SELECT id FROM states WHERE name = 'Florida')),
('Hillsborough', (SELECT id FROM states WHERE name = 'Florida'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Pennsylvania
INSERT INTO counties (name, state_id) VALUES
('Philadelphia', (SELECT id FROM states WHERE name = 'Pennsylvania')),
('Allegheny', (SELECT id FROM states WHERE name = 'Pennsylvania')),
('Montgomery', (SELECT id FROM states WHERE name = 'Pennsylvania')),
('Bucks', (SELECT id FROM states WHERE name = 'Pennsylvania')),
('Chester', (SELECT id FROM states WHERE name = 'Pennsylvania'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Illinois
INSERT INTO counties (name, state_id) VALUES
('Cook', (SELECT id FROM states WHERE name = 'Illinois')),
('DuPage', (SELECT id FROM states WHERE name = 'Illinois')),
('Lake', (SELECT id FROM states WHERE name = 'Illinois')),
('Will', (SELECT id FROM states WHERE name = 'Illinois')),
('Kane', (SELECT id FROM states WHERE name = 'Illinois'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Ohio
INSERT INTO counties (name, state_id) VALUES
('Cuyahoga', (SELECT id FROM states WHERE name = 'Ohio')),
('Franklin', (SELECT id FROM states WHERE name = 'Ohio')),
('Hamilton', (SELECT id FROM states WHERE name = 'Ohio')),
('Montgomery', (SELECT id FROM states WHERE name = 'Ohio')),
('Summit', (SELECT id FROM states WHERE name = 'Ohio'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Georgia
INSERT INTO counties (name, state_id) VALUES
('Fulton', (SELECT id FROM states WHERE name = 'Georgia')),
('Gwinnett', (SELECT id FROM states WHERE name = 'Georgia')),
('Cobb', (SELECT id FROM states WHERE name = 'Georgia')),
('DeKalb', (SELECT id FROM states WHERE name = 'Georgia')),
('Clayton', (SELECT id FROM states WHERE name = 'Georgia'))
ON CONFLICT (name, state_id) DO NOTHING;

-- North Carolina
INSERT INTO counties (name, state_id) VALUES
('Mecklenburg', (SELECT id FROM states WHERE name = 'North Carolina')),
('Wake', (SELECT id FROM states WHERE name = 'North Carolina')),
('Guilford', (SELECT id FROM states WHERE name = 'North Carolina')),
('Forsyth', (SELECT id FROM states WHERE name = 'North Carolina')),
('Cumberland', (SELECT id FROM states WHERE name = 'North Carolina'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Michigan
INSERT INTO counties (name, state_id) VALUES
('Wayne', (SELECT id FROM states WHERE name = 'Michigan')),
('Oakland', (SELECT id FROM states WHERE name = 'Michigan')),
('Macomb', (SELECT id FROM states WHERE name = 'Michigan')),
('Kent', (SELECT id FROM states WHERE name = 'Michigan')),
('Genesee', (SELECT id FROM states WHERE name = 'Michigan'))
ON CONFLICT (name, state_id) DO NOTHING;

-- New Jersey
INSERT INTO counties (name, state_id) VALUES
('Bergen', (SELECT id FROM states WHERE name = 'New Jersey')),
('Middlesex', (SELECT id FROM states WHERE name = 'New Jersey')),
('Essex', (SELECT id FROM states WHERE name = 'New Jersey')),
('Hudson', (SELECT id FROM states WHERE name = 'New Jersey')),
('Monmouth', (SELECT id FROM states WHERE name = 'New Jersey'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Virginia
INSERT INTO counties (name, state_id) VALUES
('Fairfax', (SELECT id FROM states WHERE name = 'Virginia')),
('Virginia Beach City', (SELECT id FROM states WHERE name = 'Virginia')),
('Prince William', (SELECT id FROM states WHERE name = 'Virginia')),
('Loudoun', (SELECT id FROM states WHERE name = 'Virginia')),
('Chesapeake City', (SELECT id FROM states WHERE name = 'Virginia'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Washington
INSERT INTO counties (name, state_id) VALUES
('King', (SELECT id FROM states WHERE name = 'Washington')),
('Pierce', (SELECT id FROM states WHERE name = 'Washington')),
('Snohomish', (SELECT id FROM states WHERE name = 'Washington')),
('Spokane', (SELECT id FROM states WHERE name = 'Washington')),
('Clark', (SELECT id FROM states WHERE name = 'Washington'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Arizona
INSERT INTO counties (name, state_id) VALUES
('Maricopa', (SELECT id FROM states WHERE name = 'Arizona')),
('Pima', (SELECT id FROM states WHERE name = 'Arizona')),
('Pinal', (SELECT id FROM states WHERE name = 'Arizona')),
('Mohave', (SELECT id FROM states WHERE name = 'Arizona')),
('Yavapai', (SELECT id FROM states WHERE name = 'Arizona'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Massachusetts
INSERT INTO counties (name, state_id) VALUES
('Middlesex', (SELECT id FROM states WHERE name = 'Massachusetts')),
('Worcester', (SELECT id FROM states WHERE name = 'Massachusetts')),
('Essex', (SELECT id FROM states WHERE name = 'Massachusetts')),
('Suffolk', (SELECT id FROM states WHERE name = 'Massachusetts')),
('Norfolk', (SELECT id FROM states WHERE name = 'Massachusetts'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Tennessee
INSERT INTO counties (name, state_id) VALUES
('Shelby', (SELECT id FROM states WHERE name = 'Tennessee')),
('Davidson', (SELECT id FROM states WHERE name = 'Tennessee')),
('Knox', (SELECT id FROM states WHERE name = 'Tennessee')),
('Hamilton', (SELECT id FROM states WHERE name = 'Tennessee')),
('Rutherford', (SELECT id FROM states WHERE name = 'Tennessee'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Indiana
INSERT INTO counties (name, state_id) VALUES
('Marion', (SELECT id FROM states WHERE name = 'Indiana')),
('Lake', (SELECT id FROM states WHERE name = 'Indiana')),
('Allen', (SELECT id FROM states WHERE name = 'Indiana')),
('Hamilton', (SELECT id FROM states WHERE name = 'Indiana')),
('St. Joseph', (SELECT id FROM states WHERE name = 'Indiana'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Missouri
INSERT INTO counties (name, state_id) VALUES
('St. Louis', (SELECT id FROM states WHERE name = 'Missouri')),
('Jackson', (SELECT id FROM states WHERE name = 'Missouri')),
('St. Charles', (SELECT id FROM states WHERE name = 'Missouri')),
('Jefferson', (SELECT id FROM states WHERE name = 'Missouri')),
('Clay', (SELECT id FROM states WHERE name = 'Missouri'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Maryland
INSERT INTO counties (name, state_id) VALUES
('Montgomery', (SELECT id FROM states WHERE name = 'Maryland')),
('Prince Georges', (SELECT id FROM states WHERE name = 'Maryland')),
('Baltimore', (SELECT id FROM states WHERE name = 'Maryland')),
('Anne Arundel', (SELECT id FROM states WHERE name = 'Maryland')),
('Howard', (SELECT id FROM states WHERE name = 'Maryland'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Wisconsin
INSERT INTO counties (name, state_id) VALUES
('Milwaukee', (SELECT id FROM states WHERE name = 'Wisconsin')),
('Dane', (SELECT id FROM states WHERE name = 'Wisconsin')),
('Waukesha', (SELECT id FROM states WHERE name = 'Wisconsin')),
('Brown', (SELECT id FROM states WHERE name = 'Wisconsin')),
('Racine', (SELECT id FROM states WHERE name = 'Wisconsin'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Colorado
INSERT INTO counties (name, state_id) VALUES
('Denver', (SELECT id FROM states WHERE name = 'Colorado')),
('El Paso', (SELECT id FROM states WHERE name = 'Colorado')),
('Arapahoe', (SELECT id FROM states WHERE name = 'Colorado')),
('Jefferson', (SELECT id FROM states WHERE name = 'Colorado')),
('Adams', (SELECT id FROM states WHERE name = 'Colorado'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Minnesota
INSERT INTO counties (name, state_id) VALUES
('Hennepin', (SELECT id FROM states WHERE name = 'Minnesota')),
('Ramsey', (SELECT id FROM states WHERE name = 'Minnesota')),
('Dakota', (SELECT id FROM states WHERE name = 'Minnesota')),
('Anoka', (SELECT id FROM states WHERE name = 'Minnesota')),
('Washington', (SELECT id FROM states WHERE name = 'Minnesota'))
ON CONFLICT (name, state_id) DO NOTHING;

-- South Carolina
INSERT INTO counties (name, state_id) VALUES
('Greenville', (SELECT id FROM states WHERE name = 'South Carolina')),
('Richland', (SELECT id FROM states WHERE name = 'South Carolina')),
('Charleston', (SELECT id FROM states WHERE name = 'South Carolina')),
('Horry', (SELECT id FROM states WHERE name = 'South Carolina')),
('Spartanburg', (SELECT id FROM states WHERE name = 'South Carolina'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Alabama
INSERT INTO counties (name, state_id) VALUES
('Jefferson', (SELECT id FROM states WHERE name = 'Alabama')),
('Mobile', (SELECT id FROM states WHERE name = 'Alabama')),
('Madison', (SELECT id FROM states WHERE name = 'Alabama')),
('Montgomery', (SELECT id FROM states WHERE name = 'Alabama')),
('Tuscaloosa', (SELECT id FROM states WHERE name = 'Alabama'))
ON CONFLICT (name, state_id) DO NOTHING;