import { Sequelize } from 'sequelize';
import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from 'graphql';
import { User, Todo } from './refs';

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
                const whereClause = {
                    where: { user_id: args.user_id },
                    include: [{ model: Todo, where: { user_id: Sequelize.col('todos.user_id') } }]
                };
                const user = await User.findOne(whereClause);
                return user.toJSON();
            }
        },
        todo: {
            type: todoType,
            args: { todo_id: { type: GraphQLInt } },
            resolve: async (parent, args) => {
                const todo = await Todo.findOne({ where: { todo_id: args.todo_id } });
                return todo.toJSON();
            }
        },
        users: {
            type: new GraphQLList(userType),
            resolve: async () => {
                const users = await User.findAll({ include: [{ model: Todo, where: { user_id: Sequelize.col('todos.user_id') } }] });
                return users;
            }
        },
        todos: {
            type: new GraphQLList(todoType),
            resolve: async () => {
                const todos = await Todo.findAll({});
                return todos;
            }
        }
    }
});

export const schema = new GraphQLSchema({ query: rootQueryType });
