import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from 'graphql';

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
        users: {
            type: new GraphQLList(userType),
            resolve: async () => {
                const mockUsers1: any = {
                    user_id: 1,
                    email: 'phonguyen@gmail.com',
                    name: 'Pho',
                    language: 'vn',
                    created: '2019-04-04T00:24:24.000Z',
                    modified: null,
                    todos:
                        [{
                            todo_id: 1,
                            description: 'Pho creates users.',
                            created: '2019-04-04T00:24:24.000Z',
                            modified: null,
                            user_id: 1
                        },
                        {
                            todo_id: 2,
                            description: 'Pho creates more users.',
                            created: '2019-04-04T00:24:24.000Z',
                            modified: null,
                            user_id: 1
                        },
                        {
                            todo_id: 3,
                            description: 'Pho creates more clients.',
                            created: '2019-04-04T00:24:24.000Z',
                            modified: null,
                            user_id: 1
                        }]
                }
                const mockUsers2: any = {
                    user_id: 2,
                    email: 'ngannguyen@gmail.com',
                    name: 'Ngan',
                    language: 'en',
                    created: '2019 - 04 - 04T00: 24: 24.000Z',
                    modified: null,
                    todos:
                        [{
                            todo_id: 4,
                            description: 'Ngan creates Todos.',
                            created: '2019 - 04 - 04T00: 24: 24.000Z',
                            modified: null,
                            user_id: 2
                        },
                        {
                            todo_id: 5,
                            description: 'Ngan creates big mistake.',
                            created: '2019 - 04 - 04T00: 24: 24.000Z',
                            modified: null,
                            user_id: 2
                        }]
                }
                const mockUsers3: any = {
                    user_id: 3,
                    email: 'trannguyen@gmail.com',
                    name: 'Tran',
                    language: 'fn',
                    created: '2019-04-04T00:24:24.000Z',
                    modified: null,
                    todos:
                        [{
                            todo_id: 6,
                            description: 'Tran creates Migrations.',
                            created: '2019-04-04T00:24:24.000Z',
                            modified: null,
                            user_id: 3
                        }]
                }
                return [mockUsers1, mockUsers2, mockUsers3];
            }
        },
        todos: {
            type: new GraphQLList(userType),
            resolve: async () => {
                return [{
                    todo_id: 1,
                    description: 'Pho creates users.',
                    created: '2019-04-04T00:24:24.000Z',
                    modified: null,
                    user_id: 1
                },
                {
                    todo_id: 2,
                    description: 'Pho creates more users.',
                    created: '2019-04-04T00:24:24.000Z',
                    modified: null,
                    user_id: 1
                },
                {
                    todo_id: 3,
                    description: 'Pho creates more clients.',
                    created: '2019-04-04T00:24:24.000Z',
                    modified: null,
                    user_id: 1
                },
                {
                    todo_id: 4,
                    description: 'Ngan creates Todos.',
                    created: '2019-04-04T00:24:24.000Z',
                    modified: null,
                    user_id: 2
                },
                {
                    todo_id: 5,
                    description: 'Ngan creates big mistake.',
                    created: '2019-04-04T00:24:24.000Z',
                    modified: null,
                    user_id: 2
                },
                {
                    todo_id: 6,
                    description: 'Tran creates Migrations.',
                    created: '2019-04-04T00:24:24.000Z',
                    modified: null,
                    user_id: 3
                }];
            }
        }
    }
});

export const schema = new GraphQLSchema({ query: rootQueryType });
