const { ApolloServer, gql } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { createTestClient } = require("apollo-server-testing");
const { query, mutate } = createTestClient(server);

test("find user", async () => {
  const FIND_USER = gql`
    query {
      findUser(id: "1") {
        id
        name
      }
    }
  `;

  const {
    data: { findUser },
  } = await query({ query: FIND_USER });

  console.log(findUser, "findUser");

  expect(findUser).toEqual({ id: "1", name: "Name1" });
});
