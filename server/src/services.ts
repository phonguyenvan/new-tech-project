import { User, Todo } from './refs';
import { Sequelize } from 'sequelize';

export async function queryUserById(id: string | number) {
    const user = await User.findOne({ where: { user_id: id }, include: [{ model: Todo, where: { user_id: Sequelize.col('todos.user_id') } }] });
    return user.toJSON();
}

export async function queryTodoById(id: string | number) {
    const todo = await Todo.findOne({ where: { todo_id: id }, include: [{ model: User, where: { user_id: Sequelize.col('todos.user_id') } }] });
    return todo.toJSON();
}

export async function queryAllTodos() {
    const todos = await Todo.findAll({});
    const data = todos.map(todo => todo.toJSON());
    return data;
}

export async function queryAllUsers() {
    const users = await User.findAll({ include: [{ model: Todo, where: { user_id: Sequelize.col('todos.user_id') } }] });
    const data = users.map(todo => todo.toJSON());
    return data;
}
