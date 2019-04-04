import test from 'ava';
import { queryTodoById, TodoModel, queryUserById, UserModel, queryAllTodos, queryAllUsers } from '../refs';

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
