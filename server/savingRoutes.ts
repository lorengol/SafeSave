import * as express from 'express';
import * as savingBl from "./BL/saving-bl";


export const savingRoutes = express.Router();

savingRoutes.post('/', async (req, res) => {
    try {
        await savingBl.addMonthlySavings(req.body.userId, req.body.amount);

        res.sendStatus(201);
    } catch (e) {
        res.status(404).send(e.message);
    }
});