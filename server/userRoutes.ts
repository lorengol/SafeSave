import * as express from 'express';
import * as userBl from "./BL/user-bl";
import { User } from './src/entity/User';

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
        console.log(req.body)
        let user = await userService.getUserByEmail(req.body);
        res.status(200).send(user);
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

