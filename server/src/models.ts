import { Model, DataTypes, ModelAttributes, BuildOptions } from 'sequelize';
import { sequelize } from './refs';

export class TodoModel extends Model {
    public todo_id: number;
    public description: string;
}

const todoAttributes: ModelAttributes = {
    todo_id: {
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

export const Todo = <TodoStatic>sequelize.define('todos', todoAttributes, { createdAt: 'created', updatedAt: 'modified' });

export class UserModel extends Model {
    public user_id: number;
    public email: string;
    public name: string;
    public language: 'en' | 'vn' | 'fr';
}

const userAttributes: ModelAttributes = {
    user_id: {
        type: new DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: new DataTypes.STRING(128),
        unique: true,
        allowNull: false
    },
    name: {
        type: new DataTypes.STRING(128),
        unique: true,
        allowNull: false
    },
    language: {
        type: new DataTypes.STRING(5),
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

type UserStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): UserModel;
}

export const User = <UserStatic>sequelize.define('users', userAttributes, { createdAt: 'created', updatedAt: 'modified' });
Todo.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Todo, {foreignKey: 'user_id', sourceKey: 'user_id'});
