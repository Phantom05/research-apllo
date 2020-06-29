import { getUser } from '../../operations/users-operations';

const UserQueries = {
  Query: {
    users: getUser,
    // findUser: (parent, { id }) => {
    //   const user = users.find((user) => user.id === id);
    //   if (user) {
    //     return user;
    //   } else {
    //     throw new Error("Not Found!");
    //   }
    // },
    ping: () => 'pon122g',
  },
};

export default UserQueries;
