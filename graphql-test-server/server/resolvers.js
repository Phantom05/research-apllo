import { getUsers, findUser, deleteUser, addUser, updateUser } from 'operations/users-operations';
import { getTodos, findTodo, addTodo, deleteTodo, updateTodo } from 'operations/todos-operations';

const resolvers = {
  Query: {
    users: getUsers,
    findUser: findUser,
    todos: getTodos,
    findTodo: findTodo,
    ping: () => 'pon122g',
  },

  Mutation: {
    deleteUser: deleteUser,
    addUser: addUser,
    updateUser: updateUser,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo,
  },
};

export default resolvers;

// module.exports = {
//   Query: {
//     users: getUsers,
//     findUser: findUser,
//     todos: getTodos,
//     findTodo: findTodo,
//     ping: () => 'pon122g',
//   },

//   Mutation: {
//     deleteUser: deleteUser,
//     addUser: addUser,
//     updateUser: updateUser,
//     addTodo: addTodo,
//     deleteTodo: deleteTodo,
//     updateTodo: updateTodo,
//   },
// };
