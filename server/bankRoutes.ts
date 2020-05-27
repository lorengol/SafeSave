import * as express from 'express';
import * as BankBl from "./BL/bank-bl";
import * as BankBranchBl from "./BL/bank-branch-bl";
import * as BankAccountBL from "./BL/bank-account-bl";
import * as ExpensesBL from "./BL/expense-bl";

export const bankRoutes = express.Router();

bankRoutes.get('/', async (req, res) => {
    try {
        let users = await BankBl.getAllBanks();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

bankRoutes.post('/', async (req, res) => {
    try {
        await BankAccountBL.saveBankAccount(req.body);
        res.sendStatus(201);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

bankRoutes.get('/bankBranches', async (req, res) => {
    try {
        res.status(200).send(await BankBranchBl.getBankBranchesByBankId(req.query.bankId));
    } catch (e) {
        res.status(400).send(e.message);
    }
});

bankRoutes.get('/expenses', async (req, res) => {
    try {
        res.status(200).send(await ExpensesBL.getExpensesByUserId(req.query.userId));
    } catch (e) {
        res.status(400).send(e.message);
    }
});
