import { gql } from 'apollo-server';

const typeDefs = gql`
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
    addTodo(title: String!): Boolean
    updateUser(id: ID!, name: ID!): Boolean
    deleteTodo(id: ID!): Boolean
    updateTodo(id: ID!, title: String, completed: Boolean): Boolean
    # addTodo(title: String!): [Todo]
    # updateTodo(id: ID!, title: String, completed: Boolean): [Todo]
    # addTodo(title: ID!): Boolean
  }
`;
export default typeDefs;

// module.exports = gql`
//   type User {
//     id: ID!
//     name: String!
//   }
//   type List {
//     id: ID!
//     name: String!
//   }
//   type Obj {
//     id: ID!
//   }

//   type Todo {
//     id: ID!
//     title: String
//     completed: Boolean
//     # list: [List]
//     # obj: Obj
//   }

//   type Query {
//     users: [User]
//     todos: [Todo]
//     findUser(id: ID!): User
//     findTodo(id: ID!): Todo
//     ping: String
//   }
//   type UpdateUser {
//     id: ID!
//     name: String!
//   }

//   type Mutation {
//     deleteUser(id: ID!): Boolean
//     addUser(name: ID!): Boolean
//     addTodo(title: String!): Boolean
//     updateUser(id: ID!, name: ID!): Boolean
//     deleteTodo(id: ID!): Boolean
//     updateTodo(id: ID!, title: String, completed: Boolean): Boolean
//     # addTodo(title: String!): [Todo]
//     # updateTodo(id: ID!, title: String, completed: Boolean): [Todo]
//     # addTodo(title: ID!): Boolean
//   }
// `;
