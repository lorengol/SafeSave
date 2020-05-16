import * as express from 'express';
import * as creditCardBL from "./BL/credit-card-bl";
import { User } from './src/entity/User';
import { CreditCard } from './src/entity/CreditCards';

export const creditCardRoutes = express.Router();

// creditCardRoutes.get('/', async (req, res) => {
//     try {
//         let users = await userBl.getAllUsers();
//         res.status(200).send(users);
//     } catch(e) {
//         res.status(400).send(e.message);
//     }
// });

creditCardRoutes.post('/', async (req, res) => {
    try {
        const creditCard: CreditCard = req.body;
    
        await creditCardBL.saveCreditCard(creditCard);
    
        res.sendStatus(201);
      } catch (e) {
        res.status(404).send(e.message);
      }
});

