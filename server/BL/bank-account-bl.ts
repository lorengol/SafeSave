import * as BankAccountDAL from '../DAL/bank-account-dal';
import { BankAccount } from '../src/entity/BankAccount';
import * as expenseGenerator from '../expenses-generator';
import * as creditCardBL from '../BL/credit-card-bl'
import { User } from '../src/entity/User';
import * as userBL from '../BL/user-bl';

const getAllBankAccounts = async () => {
  return BankAccountDAL.getAll();
};

// const getBankAccount = async (id: number) => {
//   return BankAccountDAL.getBankById(id);
// };

const getBankAccountById = async (id: number) => {
  return BankAccountDAL.getBankAccountById(id);
};

const saveBankAccount = async (bankAccount: BankAccount) => {
  bankAccount.current = 10000
  await BankAccountDAL.saveBankAccount(bankAccount);

  let user: User = await userBL.getUser(bankAccount.user_id);
  var today = new Date();
  var start = new Date(today.getFullYear(), today.getMonth(), 1);

  expenseGenerator.generate(99, bankAccount.user_id, bankAccount.account_number, null, start, today)
 
};

const getBankAccountByUserId = async (userId: number) => {
  return BankAccountDAL.getBankAccountByUserId(userId);
};

const deleteBankAccountById = async (bankAccount: number) => {
  return BankAccountDAL.deleteBankAccountById(bankAccount);
};

export { getAllBankAccounts, getBankAccountById, saveBankAccount, getBankAccountByUserId, deleteBankAccountById };
