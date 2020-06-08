import * as express from 'express';
import * as ExpenseBL from "./BL/expense-bl";

export const expenseRoutes = express.Router();

expenseRoutes.get('/', async (req, res) => {
    try {
        let users = await ExpenseBL.getExpensesByCreditcardId(req.query.creditCardId);
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

expenseRoutes.get('/getSavings', async (req, res) => {
    try {
        let savings = await ExpenseBL.getUserSavings(req.query.userId);
        res.status(200).send(savings);
    } catch (e) {
        res.status(400).send(e.message);
    }

});

