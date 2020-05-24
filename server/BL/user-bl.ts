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
  let Existinguser = await UserDAL.getUserByEmail(user.email);
  if(Existinguser == null) {
    let hasedPassword = passwordHash.generate(user.password);
    user.password = hasedPassword;
    return UserDAL.saveUser(user);
  } else {
    throw new Error("Email already in use");
  }
};

const verifyUserLogin = async (email: string, password: string) => {
  let user = await UserDAL.getUserByEmail(email);
  if (user != null) {
    if (passwordHash.verify(password, user.password)) {
      return user;
    } else {
      throw new Error("Incorrect password");
    }
  } else {
    throw new Error("User not found");
  }
}

export { getUser, getAllUsers, saveUser, verifyUserLogin };
