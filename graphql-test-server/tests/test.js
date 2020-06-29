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
      findUser(id: "2") {
        id
        name
      }
    }
  `;

  const {
    data: { findUser },
  } = await query({ query: FIND_USER });

  expect(findUser).toEqual({ id: "2", name: "Name2" });
});

// test("delete user", async () => {
//   const DELETE_USER = gql`
//     mutation($id: ID!) {
//       deleteUser(id: $id)
//     }
//   `;

//   const {
//     data: { deleteUser },
//   } = await mutate({ mutation: DELETE_USER, variables: { id: "1" } });

//   expect(deleteUser).toBeTruthy();
// });
