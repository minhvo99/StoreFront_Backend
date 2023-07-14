# udacity-build-a-storefront-backend

Build a JavaScript API based on a requirements given by the stakeholders.

## Installation Instructions:

This section contains all the packages used in this project and how to install them.
`npm install`


## Set up Database

`docker-compose up` to start the docker container
`npm install` to install all dependencies
`db-migrate up` to set up the database and get access via http://127.0.0.1:5432
`npm run build` to build the app

### Start

`npm run start` to start the app and get access via http://localhost:3000:

### Create Databases

We shall create the dev and test database.

- connect to the default postgres database as the server's root user `psql -U postgres`

### Migrate Database

Navigate to the root directory and run the command below to migrate the database

`npm db-up`

## Environmental Variables Set up

Bellow are the environmental variables that needs to be set in a `.env` file. This is the default setting that I used for development, but you can change it to what works for you.

**NB:** The given values are used in development and testing but not in production.

```
POSTGRES_HOST=localhost
POSTGRES_DB=book_store
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
ENV=dev
SECRET_KEY=JWTABC
BCRYPT_PASSWORD=minhdeptrai123   
SALT_ROUNDS=10

```

## Start App

`npm run watch` 

### Running Ports

After start up, the server will start on port `3000` and the database on port `5432`

## Endpoint Access

All endpoints are described in the [REQUIREMENT.md](REQUIREMENTS.md) file.

## Token and Authentication

Tokens are passed along with the http header as

```
Authorization   Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMSwidXNlcm5hbWUiOiJBQk5WIiwiZmlyc3RuYW1lIjoiQiIsImxhc3RuYW1lIjoiTmd1eWVuIFZhbiIsInBhc3N3b3JkX2RpZ2VzdCI6IiQyYiQxMCRVRUZodExFNTNZQTc3UHBVNHczQzB1dW1VR1M4SjJuc1MzTjQvdFJSd3UwMWlYd3IycWl4bSJ9LCJpYXQiOjE2ODkxNTQ2OTF9.VOi3RLqeOoYLMbq56NbxdPHSRh3YuASsO7fFAeJ1LhM
```

## Testing

Run test with

`npm run test`

It sets the environment to `test`, migrates up tables for the test database, run the test then migrate down all the tables for the test database.
