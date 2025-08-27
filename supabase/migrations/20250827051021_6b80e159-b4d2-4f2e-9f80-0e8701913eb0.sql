-- Insert top 5 most populated counties for each state (only if they don't already exist)

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
('Hillsborough', (SELECT id FROM states WHERE name = 'Florida')),
('Orange', (SELECT id FROM states WHERE name = 'Florida'))
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

-- Louisiana
INSERT INTO counties (name, state_id) VALUES
('Jefferson', (SELECT id FROM states WHERE name = 'Louisiana')),
('Orleans', (SELECT id FROM states WHERE name = 'Louisiana')),
('East Baton Rouge', (SELECT id FROM states WHERE name = 'Louisiana')),
('Caddo', (SELECT id FROM states WHERE name = 'Louisiana')),
('Lafayette', (SELECT id FROM states WHERE name = 'Louisiana'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Kentucky
INSERT INTO counties (name, state_id) VALUES
('Jefferson', (SELECT id FROM states WHERE name = 'Kentucky')),
('Fayette', (SELECT id FROM states WHERE name = 'Kentucky')),
('Kenton', (SELECT id FROM states WHERE name = 'Kentucky')),
('Boone', (SELECT id FROM states WHERE name = 'Kentucky')),
('Warren', (SELECT id FROM states WHERE name = 'Kentucky'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Oregon
INSERT INTO counties (name, state_id) VALUES
('Multnomah', (SELECT id FROM states WHERE name = 'Oregon')),
('Washington', (SELECT id FROM states WHERE name = 'Oregon')),
('Clackamas', (SELECT id FROM states WHERE name = 'Oregon')),
('Lane', (SELECT id FROM states WHERE name = 'Oregon')),
('Marion', (SELECT id FROM states WHERE name = 'Oregon'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Oklahoma
INSERT INTO counties (name, state_id) VALUES
('Oklahoma', (SELECT id FROM states WHERE name = 'Oklahoma')),
('Tulsa', (SELECT id FROM states WHERE name = 'Oklahoma')),
('Cleveland', (SELECT id FROM states WHERE name = 'Oklahoma')),
('Comanche', (SELECT id FROM states WHERE name = 'Oklahoma')),
('Canadian', (SELECT id FROM states WHERE name = 'Oklahoma'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Connecticut
INSERT INTO counties (name, state_id) VALUES
('Fairfield', (SELECT id FROM states WHERE name = 'Connecticut')),
('Hartford', (SELECT id FROM states WHERE name = 'Connecticut')),
('New Haven', (SELECT id FROM states WHERE name = 'Connecticut')),
('New London', (SELECT id FROM states WHERE name = 'Connecticut')),
('Litchfield', (SELECT id FROM states WHERE name = 'Connecticut'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Utah
INSERT INTO counties (name, state_id) VALUES
('Salt Lake', (SELECT id FROM states WHERE name = 'Utah')),
('Utah', (SELECT id FROM states WHERE name = 'Utah')),
('Davis', (SELECT id FROM states WHERE name = 'Utah')),
('Weber', (SELECT id FROM states WHERE name = 'Utah')),
('Washington', (SELECT id FROM states WHERE name = 'Utah'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Iowa
INSERT INTO counties (name, state_id) VALUES
('Polk', (SELECT id FROM states WHERE name = 'Iowa')),
('Linn', (SELECT id FROM states WHERE name = 'Iowa')),
('Scott', (SELECT id FROM states WHERE name = 'Iowa')),
('Johnson', (SELECT id FROM states WHERE name = 'Iowa')),
('Black Hawk', (SELECT id FROM states WHERE name = 'Iowa'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Nevada
INSERT INTO counties (name, state_id) VALUES
('Clark', (SELECT id FROM states WHERE name = 'Nevada')),
('Washoe', (SELECT id FROM states WHERE name = 'Nevada')),
('Carson City', (SELECT id FROM states WHERE name = 'Nevada')),
('Lyon', (SELECT id FROM states WHERE name = 'Nevada')),
('Douglas', (SELECT id FROM states WHERE name = 'Nevada'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Arkansas
INSERT INTO counties (name, state_id) VALUES
('Pulaski', (SELECT id FROM states WHERE name = 'Arkansas')),
('Washington', (SELECT id FROM states WHERE name = 'Arkansas')),
('Benton', (SELECT id FROM states WHERE name = 'Arkansas')),
('Sebastian', (SELECT id FROM states WHERE name = 'Arkansas')),
('Faulkner', (SELECT id FROM states WHERE name = 'Arkansas'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Mississippi
INSERT INTO counties (name, state_id) VALUES
('Hinds', (SELECT id FROM states WHERE name = 'Mississippi')),
('Harrison', (SELECT id FROM states WHERE name = 'Mississippi')),
('DeSoto', (SELECT id FROM states WHERE name = 'Mississippi')),
('Jackson', (SELECT id FROM states WHERE name = 'Mississippi')),
('Rankin', (SELECT id FROM states WHERE name = 'Mississippi'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Kansas
INSERT INTO counties (name, state_id) VALUES
('Johnson', (SELECT id FROM states WHERE name = 'Kansas')),
('Sedgwick', (SELECT id FROM states WHERE name = 'Kansas')),
('Shawnee', (SELECT id FROM states WHERE name = 'Kansas')),
('Wyandotte', (SELECT id FROM states WHERE name = 'Kansas')),
('Douglas', (SELECT id FROM states WHERE name = 'Kansas'))
ON CONFLICT (name, state_id) DO NOTHING;

-- New Mexico
INSERT INTO counties (name, state_id) VALUES
('Bernalillo', (SELECT id FROM states WHERE name = 'New Mexico')),
('Dona Ana', (SELECT id FROM states WHERE name = 'New Mexico')),
('Santa Fe', (SELECT id FROM states WHERE name = 'New Mexico')),
('Sandoval', (SELECT id FROM states WHERE name = 'New Mexico')),
('San Juan', (SELECT id FROM states WHERE name = 'New Mexico'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Nebraska
INSERT INTO counties (name, state_id) VALUES
('Douglas', (SELECT id FROM states WHERE name = 'Nebraska')),
('Lancaster', (SELECT id FROM states WHERE name = 'Nebraska')),
('Sarpy', (SELECT id FROM states WHERE name = 'Nebraska')),
('Hall', (SELECT id FROM states WHERE name = 'Nebraska')),
('Buffalo', (SELECT id FROM states WHERE name = 'Nebraska'))
ON CONFLICT (name, state_id) DO NOTHING;

-- West Virginia
INSERT INTO counties (name, state_id) VALUES
('Kanawha', (SELECT id FROM states WHERE name = 'West Virginia')),
('Cabell', (SELECT id FROM states WHERE name = 'West Virginia')),
('Wood', (SELECT id FROM states WHERE name = 'West Virginia')),
('Raleigh', (SELECT id FROM states WHERE name = 'West Virginia')),
('Jefferson', (SELECT id FROM states WHERE name = 'West Virginia'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Idaho
INSERT INTO counties (name, state_id) VALUES
('Ada', (SELECT id FROM states WHERE name = 'Idaho')),
('Canyon', (SELECT id FROM states WHERE name = 'Idaho')),
('Kootenai', (SELECT id FROM states WHERE name = 'Idaho')),
('Bonneville', (SELECT id FROM states WHERE name = 'Idaho')),
('Bannock', (SELECT id FROM states WHERE name = 'Idaho'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Hawaii
INSERT INTO counties (name, state_id) VALUES
('Honolulu', (SELECT id FROM states WHERE name = 'Hawaii')),
('Hawaii', (SELECT id FROM states WHERE name = 'Hawaii')),
('Maui', (SELECT id FROM states WHERE name = 'Hawaii')),
('Kauai', (SELECT id FROM states WHERE name = 'Hawaii')),
('Kalawao', (SELECT id FROM states WHERE name = 'Hawaii'))
ON CONFLICT (name, state_id) DO NOTHING;

-- New Hampshire
INSERT INTO counties (name, state_id) VALUES
('Hillsborough', (SELECT id FROM states WHERE name = 'New Hampshire')),
('Rockingham', (SELECT id FROM states WHERE name = 'New Hampshire')),
('Merrimack', (SELECT id FROM states WHERE name = 'New Hampshire')),
('Strafford', (SELECT id FROM states WHERE name = 'New Hampshire')),
('Grafton', (SELECT id FROM states WHERE name = 'New Hampshire'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Maine
INSERT INTO counties (name, state_id) VALUES
('Cumberland', (SELECT id FROM states WHERE name = 'Maine')),
('York', (SELECT id FROM states WHERE name = 'Maine')),
('Penobscot', (SELECT id FROM states WHERE name = 'Maine')),
('Kennebec', (SELECT id FROM states WHERE name = 'Maine')),
('Androscoggin', (SELECT id FROM states WHERE name = 'Maine'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Rhode Island
INSERT INTO counties (name, state_id) VALUES
('Providence', (SELECT id FROM states WHERE name = 'Rhode Island')),
('Kent', (SELECT id FROM states WHERE name = 'Rhode Island')),
('Washington', (SELECT id FROM states WHERE name = 'Rhode Island')),
('Newport', (SELECT id FROM states WHERE name = 'Rhode Island')),
('Bristol', (SELECT id FROM states WHERE name = 'Rhode Island'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Montana
INSERT INTO counties (name, state_id) VALUES
('Yellowstone', (SELECT id FROM states WHERE name = 'Montana')),
('Missoula', (SELECT id FROM states WHERE name = 'Montana')),
('Gallatin', (SELECT id FROM states WHERE name = 'Montana')),
('Flathead', (SELECT id FROM states WHERE name = 'Montana')),
('Cascade', (SELECT id FROM states WHERE name = 'Montana'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Delaware
INSERT INTO counties (name, state_id) VALUES
('New Castle', (SELECT id FROM states WHERE name = 'Delaware')),
('Sussex', (SELECT id FROM states WHERE name = 'Delaware')),
('Kent', (SELECT id FROM states WHERE name = 'Delaware'))
ON CONFLICT (name, state_id) DO NOTHING;

-- South Dakota
INSERT INTO counties (name, state_id) VALUES
('Minnehaha', (SELECT id FROM states WHERE name = 'South Dakota')),
('Pennington', (SELECT id FROM states WHERE name = 'South Dakota')),
('Lincoln', (SELECT id FROM states WHERE name = 'South Dakota')),
('Brown', (SELECT id FROM states WHERE name = 'South Dakota')),
('Codington', (SELECT id FROM states WHERE name = 'South Dakota'))
ON CONFLICT (name, state_id) DO NOTHING;

-- North Dakota
INSERT INTO counties (name, state_id) VALUES
('Cass', (SELECT id FROM states WHERE name = 'North Dakota')),
('Burleigh', (SELECT id FROM states WHERE name = 'North Dakota')),
('Grand Forks', (SELECT id FROM states WHERE name = 'North Dakota')),
('Ward', (SELECT id FROM states WHERE name = 'North Dakota')),
('Williams', (SELECT id FROM states WHERE name = 'North Dakota'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Alaska (Boroughs and Census Areas)
INSERT INTO counties (name, state_id) VALUES
('Anchorage', (SELECT id FROM states WHERE name = 'Alaska')),
('Fairbanks North Star', (SELECT id FROM states WHERE name = 'Alaska')),
('Matanuska-Susitna', (SELECT id FROM states WHERE name = 'Alaska')),
('Kenai Peninsula', (SELECT id FROM states WHERE name = 'Alaska')),
('Juneau', (SELECT id FROM states WHERE name = 'Alaska'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Vermont
INSERT INTO counties (name, state_id) VALUES
('Chittenden', (SELECT id FROM states WHERE name = 'Vermont')),
('Rutland', (SELECT id FROM states WHERE name = 'Vermont')),
('Washington', (SELECT id FROM states WHERE name = 'Vermont')),
('Windsor', (SELECT id FROM states WHERE name = 'Vermont')),
('Franklin', (SELECT id FROM states WHERE name = 'Vermont'))
ON CONFLICT (name, state_id) DO NOTHING;

-- Wyoming
INSERT INTO counties (name, state_id) VALUES
('Laramie', (SELECT id FROM states WHERE name = 'Wyoming')),
('Natrona', (SELECT id FROM states WHERE name = 'Wyoming')),
('Campbell', (SELECT id FROM states WHERE name = 'Wyoming')),
('Sweetwater', (SELECT id FROM states WHERE name = 'Wyoming')),
('Fremont', (SELECT id FROM states WHERE name = 'Wyoming'))
ON CONFLICT (name, state_id) DO NOTHING;