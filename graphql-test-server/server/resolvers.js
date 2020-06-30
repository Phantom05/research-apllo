import { getTodos, findTodo } from 'operations/todos-operations';
import { getUsers, findUser, deleteUser, addUser, updateUser } from 'operations/users-operations';

module.exports = {
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
    // deleteTodo: (_, { id }) => {
    //   const index = todos.findIndex(todo);
    // },
  },
};
