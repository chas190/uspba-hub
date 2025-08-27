-- Update states to map to correct regions based on the provided map
-- Get region IDs first
DO $$
DECLARE
    north_region_id UUID;
    south_region_id UUID;
    east_region_id UUID;
    west_region_id UUID;
BEGIN
    -- Get region IDs
    SELECT id INTO north_region_id FROM regions WHERE name = 'North';
    SELECT id INTO south_region_id FROM regions WHERE name = 'South';
    SELECT id INTO east_region_id FROM regions WHERE name = 'East';
    SELECT id INTO west_region_id FROM regions WHERE name = 'West';

    -- North Region (Pink) - Upper midwest states
    UPDATE states SET region_id = north_region_id WHERE name IN (
        'North Dakota', 'South Dakota', 'Minnesota', 'Wisconsin', 'Michigan', 
        'Iowa', 'Illinois', 'Indiana', 'Ohio', 'Missouri', 'Kansas', 'Nebraska'
    );

    -- West Region (Blue) - Western states including Alaska and Hawaii
    UPDATE states SET region_id = west_region_id WHERE name IN (
        'Washington', 'Oregon', 'California', 'Nevada', 'Idaho', 'Montana', 
        'Wyoming', 'Colorado', 'Utah', 'Arizona', 'New Mexico', 'Alaska', 'Hawaii'
    );

    -- East Region (Green) - Eastern seaboard and some inland eastern states
    UPDATE states SET region_id = east_region_id WHERE name IN (
        'Maine', 'New Hampshire', 'Vermont', 'Massachusetts', 'Rhode Island', 
        'Connecticut', 'New York', 'New Jersey', 'Pennsylvania', 'Delaware', 
        'Maryland', 'Virginia', 'West Virginia', 'North Carolina', 'South Carolina', 
        'Georgia', 'Florida'
    );

    -- South Region (Orange) - Southern states
    UPDATE states SET region_id = south_region_id WHERE name IN (
        'Texas', 'Oklahoma', 'Arkansas', 'Louisiana', 'Mississippi', 
        'Alabama', 'Tennessee', 'Kentucky'
    );

END $$;