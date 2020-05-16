import * as UserDAL from '../DAL/user-dal';
import { User } from '../src/entity/User';

const getAllUsers = async () => {
  return UserDAL.getAll();
};

const getUser = async (id: number) => {
  return UserDAL.getUserById(id);
};

const saveUser = async (user: User) => {
  return UserDAL.saveUser(user);
};

export { getUser, getAllUsers, saveUser };
