-- Insert top 5 most populated counties for each state

-- California
INSERT INTO counties (name, state_id) VALUES
('Los Angeles', (SELECT id FROM states WHERE name = 'California')),
('San Diego', (SELECT id FROM states WHERE name = 'California')),
('Orange', (SELECT id FROM states WHERE name = 'California')),
('Riverside', (SELECT id FROM states WHERE name = 'California')),
('San Bernardino', (SELECT id FROM states WHERE name = 'California'));

-- Texas
INSERT INTO counties (name, state_id) VALUES
('Harris', (SELECT id FROM states WHERE name = 'Texas')),
('Dallas', (SELECT id FROM states WHERE name = 'Texas')),
('Tarrant', (SELECT id FROM states WHERE name = 'Texas')),
('Bexar', (SELECT id FROM states WHERE name = 'Texas')),
('Travis', (SELECT id FROM states WHERE name = 'Texas'));

-- Florida
INSERT INTO counties (name, state_id) VALUES
('Miami-Dade', (SELECT id FROM states WHERE name = 'Florida')),
('Broward', (SELECT id FROM states WHERE name = 'Florida')),
('Palm Beach', (SELECT id FROM states WHERE name = 'Florida')),
('Hillsborough', (SELECT id FROM states WHERE name = 'Florida')),
('Orange', (SELECT id FROM states WHERE name = 'Florida'));

-- New York
INSERT INTO counties (name, state_id) VALUES
('Kings', (SELECT id FROM states WHERE name = 'New York')),
('Queens', (SELECT id FROM states WHERE name = 'New York')),
('New York', (SELECT id FROM states WHERE name = 'New York')),
('Suffolk', (SELECT id FROM states WHERE name = 'New York')),
('Bronx', (SELECT id FROM states WHERE name = 'New York'));

-- Pennsylvania
INSERT INTO counties (name, state_id) VALUES
('Philadelphia', (SELECT id FROM states WHERE name = 'Pennsylvania')),
('Allegheny', (SELECT id FROM states WHERE name = 'Pennsylvania')),
('Montgomery', (SELECT id FROM states WHERE name = 'Pennsylvania')),
('Bucks', (SELECT id FROM states WHERE name = 'Pennsylvania')),
('Chester', (SELECT id FROM states WHERE name = 'Pennsylvania'));

-- Illinois
INSERT INTO counties (name, state_id) VALUES
('Cook', (SELECT id FROM states WHERE name = 'Illinois')),
('DuPage', (SELECT id FROM states WHERE name = 'Illinois')),
('Lake', (SELECT id FROM states WHERE name = 'Illinois')),
('Will', (SELECT id FROM states WHERE name = 'Illinois')),
('Kane', (SELECT id FROM states WHERE name = 'Illinois'));

-- Ohio
INSERT INTO counties (name, state_id) VALUES
('Cuyahoga', (SELECT id FROM states WHERE name = 'Ohio')),
('Franklin', (SELECT id FROM states WHERE name = 'Ohio')),
('Hamilton', (SELECT id FROM states WHERE name = 'Ohio')),
('Montgomery', (SELECT id FROM states WHERE name = 'Ohio')),
('Summit', (SELECT id FROM states WHERE name = 'Ohio'));

-- Georgia
INSERT INTO counties (name, state_id) VALUES
('Fulton', (SELECT id FROM states WHERE name = 'Georgia')),
('Gwinnett', (SELECT id FROM states WHERE name = 'Georgia')),
('Cobb', (SELECT id FROM states WHERE name = 'Georgia')),
('DeKalb', (SELECT id FROM states WHERE name = 'Georgia')),
('Clayton', (SELECT id FROM states WHERE name = 'Georgia'));

-- North Carolina
INSERT INTO counties (name, state_id) VALUES
('Mecklenburg', (SELECT id FROM states WHERE name = 'North Carolina')),
('Wake', (SELECT id FROM states WHERE name = 'North Carolina')),
('Guilford', (SELECT id FROM states WHERE name = 'North Carolina')),
('Forsyth', (SELECT id FROM states WHERE name = 'North Carolina')),
('Cumberland', (SELECT id FROM states WHERE name = 'North Carolina'));

-- Michigan
INSERT INTO counties (name, state_id) VALUES
('Wayne', (SELECT id FROM states WHERE name = 'Michigan')),
('Oakland', (SELECT id FROM states WHERE name = 'Michigan')),
('Macomb', (SELECT id FROM states WHERE name = 'Michigan')),
('Kent', (SELECT id FROM states WHERE name = 'Michigan')),
('Genesee', (SELECT id FROM states WHERE name = 'Michigan'));

-- New Jersey
INSERT INTO counties (name, state_id) VALUES
('Bergen', (SELECT id FROM states WHERE name = 'New Jersey')),
('Middlesex', (SELECT id FROM states WHERE name = 'New Jersey')),
('Essex', (SELECT id FROM states WHERE name = 'New Jersey')),
('Hudson', (SELECT id FROM states WHERE name = 'New Jersey')),
('Monmouth', (SELECT id FROM states WHERE name = 'New Jersey'));

-- Virginia
INSERT INTO counties (name, state_id) VALUES
('Fairfax', (SELECT id FROM states WHERE name = 'Virginia')),
('Virginia Beach City', (SELECT id FROM states WHERE name = 'Virginia')),
('Prince William', (SELECT id FROM states WHERE name = 'Virginia')),
('Loudoun', (SELECT id FROM states WHERE name = 'Virginia')),
('Chesapeake City', (SELECT id FROM states WHERE name = 'Virginia'));

-- Washington
INSERT INTO counties (name, state_id) VALUES
('King', (SELECT id FROM states WHERE name = 'Washington')),
('Pierce', (SELECT id FROM states WHERE name = 'Washington')),
('Snohomish', (SELECT id FROM states WHERE name = 'Washington')),
('Spokane', (SELECT id FROM states WHERE name = 'Washington')),
('Clark', (SELECT id FROM states WHERE name = 'Washington'));

-- Arizona
INSERT INTO counties (name, state_id) VALUES
('Maricopa', (SELECT id FROM states WHERE name = 'Arizona')),
('Pima', (SELECT id FROM states WHERE name = 'Arizona')),
('Pinal', (SELECT id FROM states WHERE name = 'Arizona')),
('Mohave', (SELECT id FROM states WHERE name = 'Arizona')),
('Yavapai', (SELECT id FROM states WHERE name = 'Arizona'));

-- Massachusetts
INSERT INTO counties (name, state_id) VALUES
('Middlesex', (SELECT id FROM states WHERE name = 'Massachusetts')),
('Worcester', (SELECT id FROM states WHERE name = 'Massachusetts')),
('Essex', (SELECT id FROM states WHERE name = 'Massachusetts')),
('Suffolk', (SELECT id FROM states WHERE name = 'Massachusetts')),
('Norfolk', (SELECT id FROM states WHERE name = 'Massachusetts'));

-- Tennessee
INSERT INTO counties (name, state_id) VALUES
('Shelby', (SELECT id FROM states WHERE name = 'Tennessee')),
('Davidson', (SELECT id FROM states WHERE name = 'Tennessee')),
('Knox', (SELECT id FROM states WHERE name = 'Tennessee')),
('Hamilton', (SELECT id FROM states WHERE name = 'Tennessee')),
('Rutherford', (SELECT id FROM states WHERE name = 'Tennessee'));

-- Indiana
INSERT INTO counties (name, state_id) VALUES
('Marion', (SELECT id FROM states WHERE name = 'Indiana')),
('Lake', (SELECT id FROM states WHERE name = 'Indiana')),
('Allen', (SELECT id FROM states WHERE name = 'Indiana')),
('Hamilton', (SELECT id FROM states WHERE name = 'Indiana')),
('St. Joseph', (SELECT id FROM states WHERE name = 'Indiana'));

-- Missouri
INSERT INTO counties (name, state_id) VALUES
('St. Louis', (SELECT id FROM states WHERE name = 'Missouri')),
('Jackson', (SELECT id FROM states WHERE name = 'Missouri')),
('St. Charles', (SELECT id FROM states WHERE name = 'Missouri')),
('Jefferson', (SELECT id FROM states WHERE name = 'Missouri')),
('Clay', (SELECT id FROM states WHERE name = 'Missouri'));

-- Maryland
INSERT INTO counties (name, state_id) VALUES
('Montgomery', (SELECT id FROM states WHERE name = 'Maryland')),
('Prince Georges', (SELECT id FROM states WHERE name = 'Maryland')),
('Baltimore', (SELECT id FROM states WHERE name = 'Maryland')),
('Anne Arundel', (SELECT id FROM states WHERE name = 'Maryland')),
('Howard', (SELECT id FROM states WHERE name = 'Maryland'));

-- Wisconsin
INSERT INTO counties (name, state_id) VALUES
('Milwaukee', (SELECT id FROM states WHERE name = 'Wisconsin')),
('Dane', (SELECT id FROM states WHERE name = 'Wisconsin')),
('Waukesha', (SELECT id FROM states WHERE name = 'Wisconsin')),
('Brown', (SELECT id FROM states WHERE name = 'Wisconsin')),
('Racine', (SELECT id FROM states WHERE name = 'Wisconsin'));

-- Colorado
INSERT INTO counties (name, state_id) VALUES
('Denver', (SELECT id FROM states WHERE name = 'Colorado')),
('El Paso', (SELECT id FROM states WHERE name = 'Colorado')),
('Arapahoe', (SELECT id FROM states WHERE name = 'Colorado')),
('Jefferson', (SELECT id FROM states WHERE name = 'Colorado')),
('Adams', (SELECT id FROM states WHERE name = 'Colorado'));

-- Minnesota
INSERT INTO counties (name, state_id) VALUES
('Hennepin', (SELECT id FROM states WHERE name = 'Minnesota')),
('Ramsey', (SELECT id FROM states WHERE name = 'Minnesota')),
('Dakota', (SELECT id FROM states WHERE name = 'Minnesota')),
('Anoka', (SELECT id FROM states WHERE name = 'Minnesota')),
('Washington', (SELECT id FROM states WHERE name = 'Minnesota'));

-- South Carolina
INSERT INTO counties (name, state_id) VALUES
('Greenville', (SELECT id FROM states WHERE name = 'South Carolina')),
('Richland', (SELECT id FROM states WHERE name = 'South Carolina')),
('Charleston', (SELECT id FROM states WHERE name = 'South Carolina')),
('Horry', (SELECT id FROM states WHERE name = 'South Carolina')),
('Spartanburg', (SELECT id FROM states WHERE name = 'South Carolina'));

-- Alabama
INSERT INTO counties (name, state_id) VALUES
('Jefferson', (SELECT id FROM states WHERE name = 'Alabama')),
('Mobile', (SELECT id FROM states WHERE name = 'Alabama')),
('Madison', (SELECT id FROM states WHERE name = 'Alabama')),
('Montgomery', (SELECT id FROM states WHERE name = 'Alabama')),
('Tuscaloosa', (SELECT id FROM states WHERE name = 'Alabama'));

-- Louisiana
INSERT INTO counties (name, state_id) VALUES
('Jefferson', (SELECT id FROM states WHERE name = 'Louisiana')),
('Orleans', (SELECT id FROM states WHERE name = 'Louisiana')),
('East Baton Rouge', (SELECT id FROM states WHERE name = 'Louisiana')),
('Caddo', (SELECT id FROM states WHERE name = 'Louisiana')),
('Lafayette', (SELECT id FROM states WHERE name = 'Louisiana'));

-- Kentucky
INSERT INTO counties (name, state_id) VALUES
('Jefferson', (SELECT id FROM states WHERE name = 'Kentucky')),
('Fayette', (SELECT id FROM states WHERE name = 'Kentucky')),
('Kenton', (SELECT id FROM states WHERE name = 'Kentucky')),
('Boone', (SELECT id FROM states WHERE name = 'Kentucky')),
('Warren', (SELECT id FROM states WHERE name = 'Kentucky'));

-- Oregon
INSERT INTO counties (name, state_id) VALUES
('Multnomah', (SELECT id FROM states WHERE name = 'Oregon')),
('Washington', (SELECT id FROM states WHERE name = 'Oregon')),
('Clackamas', (SELECT id FROM states WHERE name = 'Oregon')),
('Lane', (SELECT id FROM states WHERE name = 'Oregon')),
('Marion', (SELECT id FROM states WHERE name = 'Oregon'));

-- Oklahoma
INSERT INTO counties (name, state_id) VALUES
('Oklahoma', (SELECT id FROM states WHERE name = 'Oklahoma')),
('Tulsa', (SELECT id FROM states WHERE name = 'Oklahoma')),
('Cleveland', (SELECT id FROM states WHERE name = 'Oklahoma')),
('Comanche', (SELECT id FROM states WHERE name = 'Oklahoma')),
('Canadian', (SELECT id FROM states WHERE name = 'Oklahoma'));

-- Connecticut
INSERT INTO counties (name, state_id) VALUES
('Fairfield', (SELECT id FROM states WHERE name = 'Connecticut')),
('Hartford', (SELECT id FROM states WHERE name = 'Connecticut')),
('New Haven', (SELECT id FROM states WHERE name = 'Connecticut')),
('New London', (SELECT id FROM states WHERE name = 'Connecticut')),
('Litchfield', (SELECT id FROM states WHERE name = 'Connecticut'));

-- Utah
INSERT INTO counties (name, state_id) VALUES
('Salt Lake', (SELECT id FROM states WHERE name = 'Utah')),
('Utah', (SELECT id FROM states WHERE name = 'Utah')),
('Davis', (SELECT id FROM states WHERE name = 'Utah')),
('Weber', (SELECT id FROM states WHERE name = 'Utah')),
('Washington', (SELECT id FROM states WHERE name = 'Utah'));

-- Iowa
INSERT INTO counties (name, state_id) VALUES
('Polk', (SELECT id FROM states WHERE name = 'Iowa')),
('Linn', (SELECT id FROM states WHERE name = 'Iowa')),
('Scott', (SELECT id FROM states WHERE name = 'Iowa')),
('Johnson', (SELECT id FROM states WHERE name = 'Iowa')),
('Black Hawk', (SELECT id FROM states WHERE name = 'Iowa'));

-- Nevada
INSERT INTO counties (name, state_id) VALUES
('Clark', (SELECT id FROM states WHERE name = 'Nevada')),
('Washoe', (SELECT id FROM states WHERE name = 'Nevada')),
('Carson City', (SELECT id FROM states WHERE name = 'Nevada')),
('Lyon', (SELECT id FROM states WHERE name = 'Nevada')),
('Douglas', (SELECT id FROM states WHERE name = 'Nevada'));

-- Arkansas
INSERT INTO counties (name, state_id) VALUES
('Pulaski', (SELECT id FROM states WHERE name = 'Arkansas')),
('Washington', (SELECT id FROM states WHERE name = 'Arkansas')),
('Benton', (SELECT id FROM states WHERE name = 'Arkansas')),
('Sebastian', (SELECT id FROM states WHERE name = 'Arkansas')),
('Faulkner', (SELECT id FROM states WHERE name = 'Arkansas'));

-- Mississippi
INSERT INTO counties (name, state_id) VALUES
('Hinds', (SELECT id FROM states WHERE name = 'Mississippi')),
('Harrison', (SELECT id FROM states WHERE name = 'Mississippi')),
('DeSoto', (SELECT id FROM states WHERE name = 'Mississippi')),
('Jackson', (SELECT id FROM states WHERE name = 'Mississippi')),
('Rankin', (SELECT id FROM states WHERE name = 'Mississippi'));

-- Kansas
INSERT INTO counties (name, state_id) VALUES
('Johnson', (SELECT id FROM states WHERE name = 'Kansas')),
('Sedgwick', (SELECT id FROM states WHERE name = 'Kansas')),
('Shawnee', (SELECT id FROM states WHERE name = 'Kansas')),
('Wyandotte', (SELECT id FROM states WHERE name = 'Kansas')),
('Douglas', (SELECT id FROM states WHERE name = 'Kansas'));

-- New Mexico
INSERT INTO counties (name, state_id) VALUES
('Bernalillo', (SELECT id FROM states WHERE name = 'New Mexico')),
('Dona Ana', (SELECT id FROM states WHERE name = 'New Mexico')),
('Santa Fe', (SELECT id FROM states WHERE name = 'New Mexico')),
('Sandoval', (SELECT id FROM states WHERE name = 'New Mexico')),
('San Juan', (SELECT id FROM states WHERE name = 'New Mexico'));

-- Nebraska
INSERT INTO counties (name, state_id) VALUES
('Douglas', (SELECT id FROM states WHERE name = 'Nebraska')),
('Lancaster', (SELECT id FROM states WHERE name = 'Nebraska')),
('Sarpy', (SELECT id FROM states WHERE name = 'Nebraska')),
('Hall', (SELECT id FROM states WHERE name = 'Nebraska')),
('Buffalo', (SELECT id FROM states WHERE name = 'Nebraska'));

-- West Virginia
INSERT INTO counties (name, state_id) VALUES
('Kanawha', (SELECT id FROM states WHERE name = 'West Virginia')),
('Cabell', (SELECT id FROM states WHERE name = 'West Virginia')),
('Wood', (SELECT id FROM states WHERE name = 'West Virginia')),
('Raleigh', (SELECT id FROM states WHERE name = 'West Virginia')),
('Jefferson', (SELECT id FROM states WHERE name = 'West Virginia'));

-- Idaho
INSERT INTO counties (name, state_id) VALUES
('Ada', (SELECT id FROM states WHERE name = 'Idaho')),
('Canyon', (SELECT id FROM states WHERE name = 'Idaho')),
('Kootenai', (SELECT id FROM states WHERE name = 'Idaho')),
('Bonneville', (SELECT id FROM states WHERE name = 'Idaho')),
('Bannock', (SELECT id FROM states WHERE name = 'Idaho'));

-- Hawaii
INSERT INTO counties (name, state_id) VALUES
('Honolulu', (SELECT id FROM states WHERE name = 'Hawaii')),
('Hawaii', (SELECT id FROM states WHERE name = 'Hawaii')),
('Maui', (SELECT id FROM states WHERE name = 'Hawaii')),
('Kauai', (SELECT id FROM states WHERE name = 'Hawaii')),
('Kalawao', (SELECT id FROM states WHERE name = 'Hawaii'));

-- New Hampshire
INSERT INTO counties (name, state_id) VALUES
('Hillsborough', (SELECT id FROM states WHERE name = 'New Hampshire')),
('Rockingham', (SELECT id FROM states WHERE name = 'New Hampshire')),
('Merrimack', (SELECT id FROM states WHERE name = 'New Hampshire')),
('Strafford', (SELECT id FROM states WHERE name = 'New Hampshire')),
('Grafton', (SELECT id FROM states WHERE name = 'New Hampshire'));

-- Maine
INSERT INTO counties (name, state_id) VALUES
('Cumberland', (SELECT id FROM states WHERE name = 'Maine')),
('York', (SELECT id FROM states WHERE name = 'Maine')),
('Penobscot', (SELECT id FROM states WHERE name = 'Maine')),
('Kennebec', (SELECT id FROM states WHERE name = 'Maine')),
('Androscoggin', (SELECT id FROM states WHERE name = 'Maine'));

-- Rhode Island
INSERT INTO counties (name, state_id) VALUES
('Providence', (SELECT id FROM states WHERE name = 'Rhode Island')),
('Kent', (SELECT id FROM states WHERE name = 'Rhode Island')),
('Washington', (SELECT id FROM states WHERE name = 'Rhode Island')),
('Newport', (SELECT id FROM states WHERE name = 'Rhode Island')),
('Bristol', (SELECT id FROM states WHERE name = 'Rhode Island'));

-- Montana
INSERT INTO counties (name, state_id) VALUES
('Yellowstone', (SELECT id FROM states WHERE name = 'Montana')),
('Missoula', (SELECT id FROM states WHERE name = 'Montana')),
('Gallatin', (SELECT id FROM states WHERE name = 'Montana')),
('Flathead', (SELECT id FROM states WHERE name = 'Montana')),
('Cascade', (SELECT id FROM states WHERE name = 'Montana'));

-- Delaware
INSERT INTO counties (name, state_id) VALUES
('New Castle', (SELECT id FROM states WHERE name = 'Delaware')),
('Sussex', (SELECT id FROM states WHERE name = 'Delaware')),
('Kent', (SELECT id FROM states WHERE name = 'Delaware'));

-- South Dakota
INSERT INTO counties (name, state_id) VALUES
('Minnehaha', (SELECT id FROM states WHERE name = 'South Dakota')),
('Pennington', (SELECT id FROM states WHERE name = 'South Dakota')),
('Lincoln', (SELECT id FROM states WHERE name = 'South Dakota')),
('Brown', (SELECT id FROM states WHERE name = 'South Dakota')),
('Codington', (SELECT id FROM states WHERE name = 'South Dakota'));

-- North Dakota
INSERT INTO counties (name, state_id) VALUES
('Cass', (SELECT id FROM states WHERE name = 'North Dakota')),
('Burleigh', (SELECT id FROM states WHERE name = 'North Dakota')),
('Grand Forks', (SELECT id FROM states WHERE name = 'North Dakota')),
('Ward', (SELECT id FROM states WHERE name = 'North Dakota')),
('Williams', (SELECT id FROM states WHERE name = 'North Dakota'));

-- Alaska (Boroughs and Census Areas)
INSERT INTO counties (name, state_id) VALUES
('Anchorage', (SELECT id FROM states WHERE name = 'Alaska')),
('Fairbanks North Star', (SELECT id FROM states WHERE name = 'Alaska')),
('Matanuska-Susitna', (SELECT id FROM states WHERE name = 'Alaska')),
('Kenai Peninsula', (SELECT id FROM states WHERE name = 'Alaska')),
('Juneau', (SELECT id FROM states WHERE name = 'Alaska'));

-- Vermont
INSERT INTO counties (name, state_id) VALUES
('Chittenden', (SELECT id FROM states WHERE name = 'Vermont')),
('Rutland', (SELECT id FROM states WHERE name = 'Vermont')),
('Washington', (SELECT id FROM states WHERE name = 'Vermont')),
('Windsor', (SELECT id FROM states WHERE name = 'Vermont')),
('Franklin', (SELECT id FROM states WHERE name = 'Vermont'));

-- Wyoming
INSERT INTO counties (name, state_id) VALUES
('Laramie', (SELECT id FROM states WHERE name = 'Wyoming')),
('Natrona', (SELECT id FROM states WHERE name = 'Wyoming')),
('Campbell', (SELECT id FROM states WHERE name = 'Wyoming')),
('Sweetwater', (SELECT id FROM states WHERE name = 'Wyoming')),
('Fremont', (SELECT id FROM states WHERE name = 'Wyoming'));