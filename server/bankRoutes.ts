import * as express from 'express';
import * as bankBl from "./BL/bank-bl";

export const bankRoutes = express.Router();

bankRoutes.get('/', async (req, res) => {
    try {
        let users = await bankBl.getAllBanks();
        res.status(200).send(users);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

