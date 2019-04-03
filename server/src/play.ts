import { User, Todo } from './refs';
import { Sequelize, Includeable } from 'sequelize';
// insert users

async function insertUser() {
    await User.create({
        email: 'vanpho01@gmail.com',
        name: 'Van Pho Nguyen',
        language: 'vn'
    });
}

async function queryUserById(id: string | number) {
    const user = await User.findOne({ where: { user_id: id }, include: [{ model: Todo, where: { user_id: Sequelize.col('todos.user_id') } }] });
    console.log(user.toJSON());
}

async function queryTodoById(id: string | number) {
    const todo = await Todo.findOne({ where: { todo_id: id }, include: [{ model: User, where: { user_id: Sequelize.col('todos.user_id') } }] });
    console.log(todo.toJSON());
}

async function queryAllTodos() {
    const todos = await Todo.findAll({});
    const data = todos.map(todo => todo.toJSON());
    console.log(data);
}

async function start() {
    await queryAllTodos();
    process.exit(0);
}

start();
