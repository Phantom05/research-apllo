import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: 'src/server/graphql/schema.graphql',
  resolvers
});

server.start(() => {
  console.log('GraphQL Server Running');
});
