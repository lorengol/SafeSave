import { userDAL } from "../DAL/user-dal";
import { User } from "../src/entity/User";

export class userBl{

    private userRepository:userDAL = new userDAL();

    getUsers() {
        return this.userRepository.getAll();
    }

    public getUser(id:number){
        return this.userRepository.getUserById(id);
    }

    saveUser(user:User) {
        this.userRepository.saveUser(user); 
    }
}