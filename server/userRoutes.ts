import * as express from 'express';
import * as userBl from "./BL/user-bl";
import { User } from './src/entity/User';

export const userRoutes = express.Router();

userRoutes.get('/', async (req, res) => {
    try {
        let users = await userBl.getAllUsers();
        
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

userRoutes.get('/verifyUserLogin', async (req, res) => {
    try {
        let resJson = await userBl.verifyUserLogin(req.query.email, req.query.password);

        res.status(200).send(resJson);
    } catch (e) {
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

