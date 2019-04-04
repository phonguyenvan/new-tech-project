import test from 'ava';
import { queryTodoById, TodoModel, queryUserById, UserModel, queryAllTodos, queryAllUsers, knex } from '../refs';

async function removeData() {
    await knex('todos').del();
    await knex('users').del();
}

async function importData() {
    await knex('users').insert([
        { name: 'Pho', email: 'phonguyen@gmail.com', language: 'vn' },
        { name: 'Ngan', email: 'ngannguyen@gmail.com', language: 'en' },
        { name: 'Tran', email: 'trannguyen@gmail.com', language: 'fn' },
    ]);
    await knex('todos').insert([
        { description: 'Pho creates users.', user_id: 1 },
        { description: 'Pho creates more users.', user_id: 1 },
        { description: 'Pho creates more clients.', user_id: 1 },
        { description: 'Ngan creates Todos.', user_id: 2 },
        { description: 'Ngan creates big mistake.', user_id: 2 },
        { description: 'Tran creates Migrations.', user_id: 3 },
    ]);
}

test.serial.beforeEach('Import data for test', async () => {
    await removeData();
    await importData();
});

test('get todo by id', async (t) => {
    const todo = await queryTodoById(1) as TodoModel;
    t.is(todo.todo_id, 1);
});

test('get user by id', async (t) => {
    const user = await queryUserById(2) as UserModel;
    t.is(user.user_id, 2);
});

test('get all users', async (t) => {
    const users = await queryAllUsers() as UserModel[];
    t.is(users.length, 3);
});

test('get all todos', async (t) => {
    const todos = await queryAllTodos() as TodoModel[];
    t.is(todos.length, 6);
});
