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

savingRoutes.get('/', async (req, res) => {
    try {
        let totalSavings = await savingBl.getTotalSavingsForUser(req.query.userId);
        let indMonthExists = await savingBl.getSavingsByCurrMonthAndUser(req.query.userId);
        res.status(200).json({totalSavings: totalSavings[0],
                              indMonthExists: indMonthExists[0]});
    } catch (e) {
        res.status(400).send(e.message);
    }
});