import * as BankAccountDAL from '../DAL/bank-account-dal';
import { BankAccount } from '../src/entity/BankAccount';

const getAllBankAccounts = async () => {
  return BankAccountDAL.getAll();
};

// const getBankAccount = async (id: number) => {
//   return BankAccountDAL.getBankById(id);
// };

const saveBankAccount = async (bankAccount: BankAccount) => {
  bankAccount.current = 10000
  return BankAccountDAL.saveBankAccount(bankAccount);
};

const getBankAccountByUserId = async (userId: number) => {
  return BankAccountDAL.getBankAccountByUserId(userId);
};

export { getAllBankAccounts, saveBankAccount, getBankAccountByUserId };
