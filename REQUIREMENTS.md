# API Endpoints

## User

- Index [token required] (GET `/users`)
- Show [token required] (GET `/users/:id`)
- Create [token required]  (POST `/users`)
- Update [token required] (PUT `/users/:id`)
- Delete [token required] (DELETE `/users/:id`)

## Product

- Index (GET `/products`)
- Show (GET `/products/:id`)
- Create [token required] (POST `/products`)
- Update [token required] (PUT `/products/:id`)
- Delete [token required] (DELETE `/products/:id`)

## Order

- Index [token required] (GET `/order`)
- Show [token required] (GET `/order/:id`)
- Current Order by user (args: user id)[token required] (GET `/order/current-order/:id`)
- Create order(POST `/order/`)
- Create order by id[token required](POST `/order/add-to-order/:id`)
- Update [token required](PUT `/order/:id`)
- Delete [token required](DELETE `/order/:id`)

# Data Shapes

### User
- id
- username
- firstname
- lastname
- password_digest
The SQL schema for this table is as follows: 
```sql
CREATE TABLE users (
  id              BIGSERIAL PRIMARY KEY,
  username        VARCHAR(250) NOT NULL,
  firstname       VARCHAR(250) NOT NULL,
  lastname        VARCHAR(250) NOT NULL,
  password_digest VARCHAR(250) NOT NULL
);
```

### Product
- id
- name
- price
- description
The SQL schema for this table is as follows: 
```sql

CREATE TABLE products (
  id    BIGSERIAL PRIMARY KEY,
  name  VARCHAR(250) NOT NULL,
  price INTEGER      NOT NULL,
  description text
);
```

### Order
- id
- user_id
- status
The SQL schema for this table is as follows: 
```sql
CREATE TABLE orders (
  id      BIGSERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users (id),
  status  BOOLEAN NOT NULL
);
```

### Order_Product
- order_id
- product_id
- quantity
The SQL schema for this table is as follows: 
```sql
CREATE TABLE order_products (
  order_id   INTEGER NOT NULL REFERENCES orders (id),
  product_id INTEGER NOT NULL REFERENCES products (id),
  quantity   INTEGER NOT NULL
);  
```


