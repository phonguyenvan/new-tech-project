# Prerequisite
1. Mariadb
2. Node v8.9.4 npm v5.6.0

# How to run
1. Database

    `npm install -g knex`
    `yarn`
    `knex migrate:latest`
    `knex seed:run`
2. Server

    `yarn`
    `yarn dev`
3. Test

    `yarn test`