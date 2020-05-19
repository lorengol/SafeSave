import * as express from 'express';
import * as creditCardBL from "./BL/credit-card-bl";
import { CreditCard } from './src/entity/CreditCard';

export const creditCardRoutes = express.Router();

creditCardRoutes.post('/', async (req, res) => {
    try {
        const creditCard: CreditCard = req.body;
    
        await creditCardBL.saveCreditCard(creditCard);
    
        res.sendStatus(201);
      } catch (e) {
        res.status(404).send(e.message);
      }
});
