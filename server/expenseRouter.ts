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

expenseRoutes.get('/userExpenses', async (req, res) => {
    try {
        res.status(200).send(await ExpenseBL.getExpensesByUserId(req.query.userId));
    } catch (e) {
        res.status(400).send(e.message);
    }
});

expenseRoutes.get('/monthlyExpenses', async (req, res) =>{
    try {
        res.status(200).send(await ExpenseBL.getUserMonthlyExpenses(req.query.userId));
    } catch (e) {
        res.status(400).send(e.message);
    }
})
