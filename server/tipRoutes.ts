import * as express from 'express';
import { tipsAI } from './BL/tip-bl';

export const tipRoutes = express.Router();

tipRoutes.get('/', async (req, res) => {
    try {
        const tip = await tipsAI(req.query.userId, req.query.birthYear);
        
        res.status(202).send(tip);
    } catch (e) {
        res.status(404).send(e.message);
    }
})