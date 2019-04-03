
exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    { name: 'Pho', email: 'phonguyen@gmail.com', language: 'vn' },
    { name: 'Ngan', email: 'ngannguyen@gmail.com', language: 'en' },
    { name: 'Tran', email: 'trannguyen@gmail.com', language: 'fn' },
  ]);
  await knex('todos').del();
  await knex('todos').insert([
    { description: 'Pho creates users.', user_id: 1 },
    { description: 'Pho creates more users.', user_id: 1 },
    { description: 'Pho creates more clients.', user_id: 1 },
    { description: 'Ngan creates Todos.', user_id: 2 },
    { description: 'Ngan creates big mistake.', user_id: 2 },
    { description: 'Tran creates Migrations.', user_id: 3 },
  ]);
};
