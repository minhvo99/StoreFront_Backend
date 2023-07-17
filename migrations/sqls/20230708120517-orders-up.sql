CREATE TABLE orders (
  id      BIGSERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users (id),
  status  TEXT NOT NULL
);