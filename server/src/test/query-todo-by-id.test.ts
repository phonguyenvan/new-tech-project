import { equal } from 'assert';
import { queryTodoById, TodoModel } from '../refs';

describe('mock', () => {
    it('add', async () => {
        const todo = await queryTodoById(1) as TodoModel;
        equal(todo.todo_id, 1);
    });
});
