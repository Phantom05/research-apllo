import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }
  type List {
    id: String
    title: String
  }
  type Obj {
    id: ID!
  }

  type Todo {
    id: ID!
    title: String
    completed: Boolean
    list: [List]
    findList(id: String): List
    # obj: Obj
  }

  type Query {
    ping: String
    users: [User]
    todos: [Todo]
    findUser(id: ID!): User
    findTodo(id: ID!): Todo
    findList(id: String): List
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

// gql`
// type Query {
//   Movie(_id: String, movieId: ID, title: String, year: Int, description: String, first: Int, offset: Int, orderBy: [_MovieOrdering]): [Movie]
//   Actor(actorId: ID, name: String, _id: String, first: Int, offset: Int, orderBy: [_ActorOrdering]): [Actor]
//   User(userId: ID, name: String, _id: String, first: Int, offset: Int, orderBy: [_UserOrdering]): [User]
// }

// type Mutation {
//   CreateMovie(movieId: ID, title: String, year: Int, description: String): Movie
//   UpdateMovie(movieId: ID!, title: String, year: Int, description: String): Movie
//   DeleteMovie(movieId: ID!): Movie
//   AddMovieActors(from: _ActorInput!, to: _MovieInput!): _AddMovieActorsPayload
//   RemoveMovieActors(from: _ActorInput!, to: _MovieInput!): _RemoveMovieActorsPayload
//   AddMovieRatings(from: _UserInput!, to: _MovieInput!, data: _RatedInput!): _AddMovieRatingsPayload
//   CreateActor(actorId: ID, name: String): Actor
//   UpdateActor(actorId: ID!, name: String): Actor
//   DeleteActor(actorId: ID!): Actor
//   AddActorMovies(from: _ActorInput!, to: _MovieInput!): _AddActorMoviesPayload
//   RemoveActorMovies(from: _ActorInput!, to: _MovieInput!): _RemoveActorMoviesPayload
//   CreateUser(userId: ID, name: String): User
//   UpdateUser(userId: ID!, name: String): User
//   DeleteUser(userId: ID!): User
//   AddUserRated(from: _UserInput!, to: _MovieInput!, data: _RatedInput!): _AddUserRatedPayload
//   RemoveUserRated(from: _UserInput!, to: _MovieInput!): _RemoveUserRatedPayload
// }
// `
