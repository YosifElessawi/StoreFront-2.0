# Storefront Backend Project


## Technologies

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Setup
- Express port : 3000
- Postgres port : default (5432)

## Steps
1)
    - run db-migrate up to create tables
    - schemas used in migrations are mentioned in REQUIRMENTS file

2)
    - "npm run dev" will run the server on the mentioned port
    - Endpoints can be accessed all mention in REQUIRMENTS file

3)
    - I personally used postman to test endpoints and routes with CRUD operations

4)
    - Testing can be done by "npm run test"

5) 
    - lint and prettier are also configured with the project check scripts in json file. 