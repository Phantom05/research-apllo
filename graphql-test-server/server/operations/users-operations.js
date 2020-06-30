import { users } from 'db/users-db';

export const getUsers = () => users;

export const findUser = (parent, { id }) => {
  const user = users.find(user => user.id === id);
  if (user) {
    return user;
  } else {
    throw new Error('Not Found!');
  }
};

export const deleteUser = (parent, { id }) => {
  const index = users.findIndex(user => user.id === id);
  if (index < 0) return false;
  users.splice(index, 1);
  return true;
};

export const addUser = (parent, { name }) => {
  const addFormat = {
    id: users.length, // uuid로 변경
    name,
  };
  if (!name) return false;
  users.push(addFormat);
  return true;
};

export const updateUser = (parent, { id, name }) => {
  const index = users.findIndex(user => user.id === id);
  if (index < 0) return false;
  const updateFormat = {
    id,
    name,
  };
  users.splice(index, 1, updateFormat);
  return true;
};
