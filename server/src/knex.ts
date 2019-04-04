import * as knexjs from 'knex';

const { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD } = process.env;

export const knex = knexjs({
    client: 'mysql2',
    connection: {
        database: MYSQL_DATABASE,
        port: +MYSQL_PORT,
        host: MYSQL_HOST,
        user: MYSQL_USERNAME,
        password: MYSQL_PASSWORD,
    }
});
