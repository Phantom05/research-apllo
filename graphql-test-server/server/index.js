import express from 'express';
import { ApolloServer, gql } from 'apollo-server';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({
  // schema,
  typeDefs,
  resolvers,
  // resolvers: combineQueris,
});

server.listen().then(({ url }) => {
  console.log(`Run ar ${url}`);
});

// import TodoQueries from './schema/todos/TodoQueries';
// import UserQueries from './schema/users/UserQueries';

// console.log(TodoQueries, 'TodoType');
// console.log(UserQueries, 'UserQueries');
// console.log(resolvers, 'resolvers');

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'Query',
//     fields: () => ({
//       ...TodoQueries,
//       ...UserQueries,
//     }),
//   }),
// });
// const combineQueris = {
//   ...TodoQueries,
//   ...UserQueries,
// };
// const app = express();
// app.use('*', server);
// server.applyMiddleware({ app, path: '/graphql' });
