import { Model, DataTypes, ModelAttributes, BuildOptions } from 'sequelize';
import { sequelize } from '../refs';

export class TodoModel extends Model {
    public todo_id: number;
    public description: string;
}

const userAttributes: ModelAttributes = {
    user_id: {
        type: new DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: new DataTypes.STRING(256),
        unique: true,
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created'
    },
    modified: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'modified'
    }
}

type TodoStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): TodoModel;
}

export const Todo = <TodoStatic>sequelize.define('todos', userAttributes, { createdAt: 'created', updatedAt: 'modified' });
