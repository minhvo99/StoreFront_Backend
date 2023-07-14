# API Endpoints

## User

#### Get list Users

- GET /users

#### Get user by id

- GET  /users/:id
#### Add user

- POST /users

#### Update user by id

- PUT /users/:id

#### Delete user by id

- DELETE /users/:id

## Product

#### Get all products

- GET /products

#### Get product by id
- GET /products/:id

#### Add product

- POST /products
#### Update product by id

- PUT /products/:id
#### Delete product by id


- DELETE /products/:id

## Order

#### Get list orders

- GET /order

#### Get order by id

- GET /order/:id

#### Get current by id

- GET /order/current-order/:id
#### Add order

- POST /order/

#### Add product to order by id


- POST /order/add-to-order/:id
####  Update order

- PUT /order/:id
#### Delete order

- DELETE /order/:id

# Data Shapes

### User
- id
- username
- firstname
- lastname
- password_digest

### Product
- id
- name
- price
- description

### Order
- id
- user_id
- status

### Order_Product
- order_id
- product_id
- quantity


