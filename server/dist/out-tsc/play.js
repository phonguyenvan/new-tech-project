"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var refs_1 = require("./refs");
var sequelize_1 = require("sequelize");
// insert users
function insertUser() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, refs_1.User.create({
                        email: 'vanpho01@gmail.com',
                        name: 'Van Pho Nguyen',
                        language: 'vn'
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function queryUserById(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var user;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, refs_1.User.findOne({ where: { user_id: id }, include: [{ model: refs_1.Todo, where: { user_id: sequelize_1.Sequelize.col('todos.user_id') } }] })];
                case 1:
                    user = _a.sent();
                    console.log(user.toJSON());
                    return [2 /*return*/];
            }
        });
    });
}
function queryTodoById(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var todo;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, refs_1.Todo.findOne({ where: { todo_id: id }, include: [{ model: refs_1.User, where: { user_id: sequelize_1.Sequelize.col('todos.user_id') } }] })];
                case 1:
                    todo = _a.sent();
                    console.log(todo.toJSON());
                    return [2 /*return*/];
            }
        });
    });
}
function queryAllTodos() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var todos, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, refs_1.Todo.findAll({})];
                case 1:
                    todos = _a.sent();
                    data = todos.map(function (todo) { return todo.toJSON(); });
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function start() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, queryAllTodos()];
                case 1:
                    _a.sent();
                    process.exit(0);
                    return [2 /*return*/];
            }
        });
    });
}
start();
//# sourceMappingURL=play.js.map