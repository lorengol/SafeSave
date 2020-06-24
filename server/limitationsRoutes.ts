import * as express from 'express';
import * as limitationBl from "./BL/limitation-bl";
import { Limitation } from './src/entity/Limitation';

export const limitationRoutes = express.Router();

limitationRoutes.get('/', async (req, res) => {
    try {
        let limitations = await limitationBl.getAllUserLimitations(req.query.userId);
        res.status(200).send(limitations);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

limitationRoutes.post('/', async (req, res) => {
    try {
        const limitation: Limitation = req.body;

        const newLimitation = await limitationBl.saveNewLimitation(limitation);

        res.status(201).send(newLimitation);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

limitationRoutes.delete('/delete', async (req, res) => {
    try {
        const limitationId: number = req.query.limitationId;

        console.log(limitationId);

        await limitationBl.deleteLimitationById(limitationId);

        res.sendStatus(201);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

limitationRoutes.post('/update', async (req, res) => {
    try {
        const updatedLimitation: Limitation = req.body;

        await limitationBl.updateLimitation(updatedLimitation);

        res.sendStatus(201);
    } catch (e) {
        res.status(404).send(e.message);
    }
});