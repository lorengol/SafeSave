import * as express from 'express';
import * as userBl from "./BL/user-bl";
import { User } from './src/entity/User';
import * as passwordHash from 'password-hash';

export const userRoutes = express.Router();

userRoutes.get('/', async (req, res) => {
    try {
        let users = await userBl.getAllUsers();
        res.status(200).send(users);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

userRoutes.get('/getUserByEmail', async (req, res) => {
    try {
        let resJson
        let user = await userBl.getUserByEmail(req.query.email);
        
        if(user != null) {
            if(passwordHash.verify(req.query.password,user.password)) {
                resJson = {validation : 'Valid' , user : user}
            } else {
                resJson = {validation : 'Worng Password' , user : user}
            }
        } else {
            resJson = {validation : 'User Not Found' , user : null}
        }
        
        res.status(200).send(resJson);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

userRoutes.post('/', async (req, res) => {
    try {
        const user: User = req.body;
    
        await userBl.saveUser(user);
    
        res.sendStatus(201);
      } catch (e) {
        res.status(404).send(e.message);
      }
});

