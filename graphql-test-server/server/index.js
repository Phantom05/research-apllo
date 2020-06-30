import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from 'typeDefs';
import resolvers from 'resolvers';

const PORT = 4000;
const schema = { typeDefs, resolvers };
const server = new ApolloServer(schema);

const app = express();
app.use(cors());

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
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
