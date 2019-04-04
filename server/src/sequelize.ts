import { Sequelize, Options } from 'sequelize';
const { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD } = process.env;
const options: Options = {
    database: MYSQL_DATABASE,
    port: +MYSQL_PORT,
    host: MYSQL_HOST,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    dialect: 'mysql',
    logging: false
}
export const sequelize = new Sequelize(options);
