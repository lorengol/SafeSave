import {getRepository} from "typeorm";
import {User} from "../src/entity/User";

export class userDAL {
  async getAll() {
    return getRepository(User).find();
  };
  
  async getUserById (id: number) {
      return getRepository(User).findOne(id);
  };
  
  async saveUser(user: User) {
      return getRepository(User).insert(user);
  };
}



  