
CREATE TABLE products (
  id    BIGSERIAL PRIMARY KEY,
  name  VARCHAR(250) NOT NULL,
  price INTEGER      NOT NULL,
  description text
);

