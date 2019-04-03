
exports.up = async function (knex, Promise) {
    const isExisted = await knex.schema.hasTable('users');
    if (isExisted) return;
    await knex.schema.createTable('users', table => {
        table.increments('user_id').unsigned().primary();
        table.string('name', 50).notNullable();
        table.string('email', 50).notNullable();
        table.string('language', 50).notNullable();
        table.dateTime('created').notNullable();
        table.dateTime('modified').nullable();
    });
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTable('users');
};
