import * as express from 'express';
import * as CreditCardBL from "./BL/credit-card-bl";
import { CreditCard } from './src/entity/CreditCard';

export const creditCardRoutes = express.Router();

creditCardRoutes.post('/', async (req, res) => {
    try {
        const creditCard: CreditCard = req.body;
    
        await CreditCardBL.saveCreditCard(creditCard);
    
        res.sendStatus(201);
      } catch (e) {
        res.status(404).send(e.message);
      }
});

creditCardRoutes.get('/', async (req, res) => {
  try {
      let users = await CreditCardBL.getCreditCardByUserId(req.query.userId);
      res.status(200).send(users);
  } catch (e) {
      res.status(400).send(e.message);
  }
});
