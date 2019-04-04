import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from 'graphql';
import { queryAllTodos, queryTodoById, queryUserById, queryAllUsers } from './refs';

const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        user_id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        language: { type: GraphQLString },
        todos: { type: new GraphQLList(todoType) }
    })
});

const todoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        todo_id: { type: GraphQLInt },
        description: { type: GraphQLString },
    })
});

const rootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: userType,
            args: { user_id: { type: GraphQLInt } },
            resolve: async (parent, args) => {
                const user = await queryUserById(args.user_id);
                return user;
            }
        },
        todo: {
            type: todoType,
            args: { todo_id: { type: GraphQLInt } },
            resolve: async (parent, args) => {
                const todo = await queryTodoById(args.todo_id);
                return todo;
            }
        },
        users: {
            type: new GraphQLList(userType),
            resolve: async () => {
                const users = await queryAllUsers();
                return users;
            }
        },
        todos: {
            type: new GraphQLList(todoType),
            resolve: async () => {
                const todos = await queryAllTodos();
                return todos;
            }
        }
    }
});

export const schema = new GraphQLSchema({ query: rootQueryType });
