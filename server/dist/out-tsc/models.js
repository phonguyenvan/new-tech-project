"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var sequelize_1 = require("sequelize");
var refs_1 = require("./refs");
var TodoModel = /** @class */ (function (_super) {
    tslib_1.__extends(TodoModel, _super);
    function TodoModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TodoModel;
}(sequelize_1.Model));
exports.TodoModel = TodoModel;
var todoAttributes = {
    todo_id: {
        type: new sequelize_1.DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: new sequelize_1.DataTypes.STRING(256),
        unique: true,
        allowNull: false
    },
    created: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        field: 'created'
    },
    modified: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        field: 'modified'
    }
};
exports.Todo = refs_1.sequelize.define('todos', todoAttributes, { createdAt: 'created', updatedAt: 'modified' });
var UserModel = /** @class */ (function (_super) {
    tslib_1.__extends(UserModel, _super);
    function UserModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserModel;
}(sequelize_1.Model));
exports.UserModel = UserModel;
var userAttributes = {
    user_id: {
        type: new sequelize_1.DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        unique: true,
        allowNull: false
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        unique: true,
        allowNull: false
    },
    language: {
        type: new sequelize_1.DataTypes.STRING(5),
        unique: true,
        allowNull: false
    },
    created: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        field: 'created'
    },
    modified: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        field: 'modified'
    }
};
exports.User = refs_1.sequelize.define('users', userAttributes, { createdAt: 'created', updatedAt: 'modified' });
exports.Todo.belongsTo(exports.User, { foreignKey: 'user_id' });
exports.User.hasMany(exports.Todo, { foreignKey: 'user_id', sourceKey: 'user_id' });
//# sourceMappingURL=models.js.map