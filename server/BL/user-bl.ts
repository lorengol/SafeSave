import * as UserDAL from '../DAL/user-dal';
import { User } from '../src/entity/User';
import * as passwordHash from 'password-hash';

const getAllUsers = async () => {
  return UserDAL.getAll();
};

const getUser = async (id: number) => {
  return UserDAL.getUserById(id);
};

const saveUser = async (user: User) => {
  let hasedPassword = passwordHash.generate(user.password);
  user.password = hasedPassword;
  return UserDAL.saveUser(user);
};

const getUserByEmail =  async (email:string) => {
  return UserDAL.getUserByEmail(email);
}

export { getUser, getAllUsers, saveUser, getUserByEmail };
