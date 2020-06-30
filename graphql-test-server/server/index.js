import { ApolloServer } from 'apollo-server';
import typeDefs from 'typeDefs';
import resolvers from 'resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Run ar ${url}`);
});

// import { typeDefs, resolvers } from './schema';
// import { GraphQLSchema, GraphQLObjectType } from 'graphql';
// schema,
// resolvers: combineQueris,

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
