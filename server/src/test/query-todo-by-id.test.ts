import test, { todo } from 'ava';
import { queryTodoById, TodoModel, queryUserById, UserModel, queryAllTodos, queryAllUsers, knex } from '../refs';

let user1, user2, user3, todo1;

async function importData() {
    await knex('todos').del();
    await knex('users').del();
    await knex('users').insert([
        { name: 'Pho', email: 'phonguyen@gmail.com', language: 'vn' },
        { name: 'Ngan', email: 'ngannguyen@gmail.com', language: 'en' },
        { name: 'Tran', email: 'trannguyen@gmail.com', language: 'fn' },
    ]);
    [user1, user2, user3] = await knex.select('user_id', 'name').from('users');
    await knex('todos').insert([
        { description: 'Pho creates users.', user_id: user1.user_id },
        { description: 'Pho creates more users.', user_id: user1.user_id },
        { description: 'Pho creates more clients.', user_id: user1.user_id },
        { description: 'Ngan creates Todos.', user_id: user2.user_id },
        { description: 'Ngan creates big mistake.', user_id: user2.user_id },
        { description: 'Tran creates Migrations.', user_id: user3.user_id },
    ]);
    [todo1] = await knex.select('todo_id', 'description').from('todos');
}

test.before('Import data for test', async () => {
    await importData();
});

test('get todo by id', async (t) => {
    const todo = await queryTodoById(todo1.todo_id) as TodoModel;
    t.is(todo.todo_id, todo1.todo_id);
});

test('get user by id', async (t) => {
    const user = await queryUserById(user2.user_id) as UserModel;
    t.is(user.user_id, user2.user_id);
});

test('get all users', async (t) => {
    const users = await queryAllUsers() as UserModel[];
    t.is(users.length, 3);
});

test('get all todos', async (t) => {
    const todos = await queryAllTodos() as TodoModel[];
    t.is(todos.length, 6);
});
