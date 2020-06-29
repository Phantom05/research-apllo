import { gql } from "apollo-server";
module.exports = gql`
  type User {
    id: ID!
    name: String!
  }

  type Todo {
    id: String!
    title: String!
    completed: Boolean
  }

  type Query {
    users: [User]
    todos: [Todo]
    findUser(id: ID!): User
    ping: String
  }
  type UpdateUser {
    id: ID!
    name: String!
  }

  type Mutation {
    deleteUser(id: ID!): Boolean
    addUser(name: ID!): Boolean
    updateUser(id: ID!, name: ID!): Boolean
  }
`;
