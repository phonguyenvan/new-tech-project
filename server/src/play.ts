import { User } from './refs';

// insert users

async function insertUser() {
    await User.create({
        email: 'vanpho01@gmail.com',
        name: 'Van Pho Nguyen',
        language: 'vn'
    });
}

async function start() {
    await insertUser().catch(console.log)
    process.exit(0);
}

start();
