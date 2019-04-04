"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var refs_1 = require("./refs");
var sequelize_1 = require("sequelize");
function queryUserById(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var user;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, refs_1.User.findOne({ where: { user_id: id }, include: [{ model: refs_1.Todo, where: { user_id: sequelize_1.Sequelize.col('todos.user_id') } }] })];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, user.toJSON()];
            }
        });
    });
}
exports.queryUserById = queryUserById;
function queryTodoById(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var todo;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, refs_1.Todo.findOne({ where: { todo_id: id }, include: [{ model: refs_1.User, where: { user_id: sequelize_1.Sequelize.col('todos.user_id') } }] })];
                case 1:
                    todo = _a.sent();
                    return [2 /*return*/, todo.toJSON()];
            }
        });
    });
}
exports.queryTodoById = queryTodoById;
function queryAllTodos() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var todos, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, refs_1.Todo.findAll({})];
                case 1:
                    todos = _a.sent();
                    data = todos.map(function (todo) { return todo.toJSON(); });
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.queryAllTodos = queryAllTodos;
function queryAllUsers() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var users, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, refs_1.User.findAll({ include: [{ model: refs_1.Todo, where: { user_id: sequelize_1.Sequelize.col('todos.user_id') } }] })];
                case 1:
                    users = _a.sent();
                    data = users.map(function (todo) { return todo.toJSON(); });
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.queryAllUsers = queryAllUsers;
//# sourceMappingURL=services.js.map