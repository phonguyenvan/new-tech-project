"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_1 = require("graphql");
var refs_1 = require("./refs");
var userType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: function () { return ({
        user_id: { type: graphql_1.GraphQLInt },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        language: { type: graphql_1.GraphQLString },
        todos: { type: new graphql_1.GraphQLList(todoType) }
    }); }
});
var todoType = new graphql_1.GraphQLObjectType({
    name: 'Todo',
    fields: function () { return ({
        todo_id: { type: graphql_1.GraphQLInt },
        description: { type: graphql_1.GraphQLString },
    }); }
});
var rootQueryType = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: userType,
            args: { user_id: { type: graphql_1.GraphQLInt } },
            resolve: function (parent, args) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var user;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, refs_1.queryUserById(args.user_id)];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, user];
                    }
                });
            }); }
        },
        todo: {
            type: todoType,
            args: { todo_id: { type: graphql_1.GraphQLInt } },
            resolve: function (parent, args) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var todo;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, refs_1.queryTodoById(args.todo_id)];
                        case 1:
                            todo = _a.sent();
                            return [2 /*return*/, todo];
                    }
                });
            }); }
        },
        users: {
            type: new graphql_1.GraphQLList(userType),
            resolve: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var users;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, refs_1.queryAllUsers()];
                        case 1:
                            users = _a.sent();
                            return [2 /*return*/, users];
                    }
                });
            }); }
        },
        todos: {
            type: new graphql_1.GraphQLList(todoType),
            resolve: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var todos;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, refs_1.queryAllTodos()];
                        case 1:
                            todos = _a.sent();
                            return [2 /*return*/, todos];
                    }
                });
            }); }
        }
    }
});
exports.schema = new graphql_1.GraphQLSchema({ query: rootQueryType });
//# sourceMappingURL=schema.js.map