CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120),
    color VARCHAR(50),
    quantity INTEGER,
    price integer NOT NULL
);
