import * as express from 'express';
import * as limitationBl from "./BL/limitation-bl";
import { Limitation } from './src/entity/Limitation';

export const limitationRoutes = express.Router();

limitationRoutes.get('/', async (req, res) => {
    try {
        let users = await limitationBl.getAllUserLimitations(req.query.userId);
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

limitationRoutes.post('/', async (req, res) => {
    try {
        const limitation: Limitation = req.body;

        await limitationBl.saveNewLimitation(limitation);

        res.sendStatus(201);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

