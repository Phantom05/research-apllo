import { gql } from 'apollo-server';
module.exports = gql`
  type User {
    id: ID!
    name: String!
  }
  type List {
    id: ID!
    name: String!
  }
  type Obj {
    id: ID!
  }

  type Todo {
    id: ID!
    title: String
    completed: Boolean
    # list: [List]
    # obj: Obj
  }

  type Query {
    users: [User]
    todos: [Todo]
    findUser(id: ID!): User
    findTodo(id: ID!): Todo
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
