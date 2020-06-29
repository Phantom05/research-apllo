import { users, todos } from "./db";

module.exports = {
  Query: {
    users: () => users,
    findUser: (parent, { id }) => {
      const user = users.find((user) => user.id === id);
      if (user) {
        return user;
      } else {
        throw new Error("Not Found!");
      }
    },
    ping: () => "pon122g",
    todos: () => todos,
  },

  Mutation: {
    deleteUser: (parent, { id }) => {
      const index = users.findIndex((user) => user.id === id);
      if (index < 0) return false;
      users.splice(index, 1);
      return true;
    },
    addUser: (parent, { name }) => {
      const addFormat = {
        id: users.length, // uuid로 변경
        name,
      };
      if (!name) return false;
      users.push(addFormat);
      return true;
    },
    updateUser: (parent, { id, name }) => {
      const index = users.findIndex((user) => user.id === id);
      if (index < 0) return false;
      const updateFormat = {
        id,
        name,
      };
      users.splice(index, 1, updateFormat);
      return true;
    },
  },
};
