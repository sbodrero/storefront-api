#Storefront api project
# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to get started

### 1. set up node project

Install dependencies `yarn install`;

### 2. set up database

- in the folder `docker` creta a .env file with the following:  
  `POSTGRES_PASSWORD=postgres`  
  `POSTGRES_HOST_AUTH_METHOD=trust` 
  

- lauch `docker-compose up` command to start docker image.
- open a shell session and enter the following commands.

`CREATE USER shopping_user WITH PASSWORD 'password123';`  
`CREATE DATABASE shopping;`  
`CREATE DATABASE shopping_test;`  
`GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;`  
`GRANT ALL PRIVILEGES ON DATABASE shopping_test TO shopping_user;`

- create a .env file with the following values

`POSTGRES_HOST=127.0.0.1`  
`POSTGRES_DB=shopping`  
`POSTGRES_USER=shopping_user`  
`POSTGRES_USER_PASSWORD=password123`  
`POSTGRES_PASSWORD=storefront@admin`  
`POSTGRES_TEST_DB=shopping_test`  
`BCRYPT_PASSWORD=sbodrero`    
`SALT_ROUNDS=10`  
`TOKEN_SECRET=storefront` 
`TEST_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJzZWIiLCJsYXN0X25hbWUiOiJib2QiLCJwYXNzd29yZCI6ImxvbGl0byJ9LCJpYXQiOjE2MjU1MDEzMjd9.kKu84DFNxDU9NQE-Sfu8MnCyRMbhWU0HE8k4rJJjVjw`  
`ENV=dev`

- create a `database.json` file with the following content:

`{
"dev": {
"driver": "pg",
"host": "127.0.0.1",
"database": "shopping",
"user": "shopping_user",
"password": "password123"
},
"test": {
"driver": "pg",
"host": "127.0.0.1",
"database": "shopping_test",
"user": "shopping_user",
"password": "password123"
}
}`

- launch the database migration to construct needed tables `yarn migrate`


### 3. launch project

`yarn start` or `yarn watch`

The backend will listen on port `3000` and postgres on port `5432`

## Testing

Before launching tests, make sure to edit your .env file and change  
`POSTGRES_DB` fom `shopping` to `shopping_test` 

This modification is needed because, at the moment, `jasmine-ts` deosn't support  
dynamic `ENV=test` 

Then launch the command `yarn test`

