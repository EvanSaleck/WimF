-- Create the items table
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    quantity TEXT,
    expiry_date DATE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Insert some sample data
INSERT INTO items (name, quantity, expiry_date) VALUES
    ('Milk', '1 gallon', CURRENT_DATE + INTERVAL '7 days'),
    ('Eggs', '12 count', CURRENT_DATE + INTERVAL '14 days'),
    ('Cheese', '8 oz', CURRENT_DATE + INTERVAL '21 days');
