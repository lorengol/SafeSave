import * as BankAccountDAL from '../DAL/bank-acount-dal';
import { BankAccount } from '../src/entity/BankAccount';

const getAllBankAccounts = async () => {
  return BankAccountDAL.getAll();
};

const getBank = async (id: number) => {
  return BankAccountDAL.getBankById(id);
};

const saveBankAccount = async (bankAccount: BankAccount) => {
  return BankAccountDAL.saveBankAccount(bankAccount);
};

export { getAllBankAccounts, getBank, saveBankAccount };
