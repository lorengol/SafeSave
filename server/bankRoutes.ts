import * as express from 'express';
import * as BankBl from "./BL/bank-bl";
import * as BankBranchBl from "./BL/bank-branch-bl";
import * as BankAccountBL from "./BL/bank-account-bl";

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

bankRoutes.get('/UserBankAcounts', async (req, res) => {
    try {
        res.status(200).send(await BankAccountBL.getBankAccountByUserId(req.query.userId));
    } catch (e) {
        res.status(400).send(e.message);
    }
});

bankRoutes.get('/deleteBankAcount', async (req, res) => {
    try {
        BankAccountBL.deleteBankAccountById(req.query.bankAccountId)
        res.status(201).send({message: 'deleted successfully'});
    } catch (e) {
        res.status(400).send(e.message);
    }
});

