DROP TABLE IF EXISTS users,
searches,
results;
CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT NOT NULL,
  password_hash TEXT NOT NULL
);
CREATE TABLE searches (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id BIGINT REFERENCES users(id),
  search_terms TEXT NOT NULL,
  search_location TEXT
);
CREATE TABLE results (
  results_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id BIGINT,
  results JSON [] NOT NULL
)