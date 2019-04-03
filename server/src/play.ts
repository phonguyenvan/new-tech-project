import { User, Todo } from './refs';
import { Sequelize } from 'sequelize';
// insert users

async function insertUser() {
    await User.create({
        email: 'vanpho01@gmail.com',
        name: 'Van Pho Nguyen',
        language: 'vn'
    });
}

async function queryUserById(id: string | number) {
    const user = await User.findOne({ where: { user_id: id } }) as any;
    console.log(user.dataValues);
}

async function queryTodoById(id: string | number) {
    const todo = await Todo.findOne({ where: { todo_id: id }, include: [{ model: User, where: { user_id: Sequelize.col('todos.user_id') } }] });
    console.log(todo.toJSON());
}

async function start() {
    await queryTodoById(1);
    process.exit(0);
}

start();
