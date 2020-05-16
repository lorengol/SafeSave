import { userDAL } from "../DAL/user-dal";
import { User } from "../src/entity/User";
var passwordHash = require('password-hash');

export class userBl{

    private userRepository:userDAL = new userDAL();

    getUsers() {
        return this.userRepository.getAll();
    }

    public getUser(id:number){
        return this.userRepository.getUserById(id);
    }

    saveUser(user:User) {
        var hashedPassword = passwordHash.generate(user.password); 
        user.password = hashedPassword;
        this.userRepository.saveUser(user); 
    }

    getUserByEmail(email) {
        this.userRepository.getUserByEmail(email)
    }
}