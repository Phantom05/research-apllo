import { ApolloServer, gql } from "apollo-server";
// import schema from "./schema";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import UserQueries from "./schema/users/UserQueries";

console.log(resolvers, "resolvers");

// console.log(schema, "schema");
const server = new ApolloServer({
  // schema,
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Run ar ${url}`);
});
