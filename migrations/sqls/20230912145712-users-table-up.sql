/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email varchar(100) UNIQUE,
    password varchar (80),
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)