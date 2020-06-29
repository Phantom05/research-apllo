// const { gql } = require("apollo-server");
import { gql } from "apollo-server";
module.exports = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    findUser(id: ID!): User
    ping: String
  }

  type Mutation {
    deleteUser(id: ID!): Boolean
  }
`;
