import { users } from 'db/users-db';

export const getUsers = async () => users;

export const findUser = async (parent, { id }) => {
  const user = users.find(user => user.id === id);
  if (user) {
    return user;
  } else {
    throw new Error('Not Found!');
  }
};

export const deleteUser = async (parent, { id }) => {
  const index = users.findIndex(user => user.id === id);
  if (index < 0) return false;
  users.splice(index, 1);
  return true;
};

export const addUser = async (parent, { name }) => {
  const addFormat = {
    id: users.length, // uuid로 변경
    name,
  };
  if (!name) return false;
  users.push(addFormat);
  return { result: true };
};

export const updateUser = async (parent, { id, name }) => {
  const index = users.findIndex(user => user.id === id);
  if (index < 0) return false;
  const updateFormat = {
    id,
    name,
  };
  users.splice(index, 1, updateFormat);
  return true;
};
