import { Model, DataTypes, ModelAttributes, BuildOptions } from 'sequelize';
import { sequelize, TodoModel } from '../refs';

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
