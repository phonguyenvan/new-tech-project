
exports.up = async function(knex, Promise) {
    const isExisted = await knex.schema.hasTable('todos');
    if (isExisted) return;
    await knex.schema.createTable('todos', table => {
        table.increments('todo_id').unsigned().primary();
        table.string('description', 50).notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.dateTime('created').notNullable().defaultTo(knex.fn.now(6));
        table.dateTime('modified').nullable();
        table.foreign('user_id').references('user_id').inTable('users');
    });
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTable('todos');
};
