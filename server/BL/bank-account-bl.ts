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

const saveBankAccount = async (bankAccount: BankAccount) => {
  bankAccount.current = 10000
  await BankAccountDAL.saveBankAccount(bankAccount);

  let creditCardsNum = (await creditCardBL.getCreditCardByUserId(bankAccount.user_id)).length;
  let bankAccountsNum = (await getBankAccountByUserId(bankAccount.user_id)).length

  if((creditCardsNum + bankAccountsNum) == 1) {
    let user: User = await userBL.getUser(bankAccount.user_id);
    let timeDiff = Math.abs(Date.now() - user.birth_date.getTime())
    let Age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

    expenseGenerator.generate(Age, bankAccount.user_id, bankAccount.account_number, null)
  } else {
    expenseGenerator.generate(99, bankAccount.user_id, bankAccount.account_number, null)
  }
};

const getBankAccountByUserId = async (userId: number) => {
  return BankAccountDAL.getBankAccountByUserId(userId);
};

const deleteBankAccountById = async (bankAccount: number) => {
  return BankAccountDAL.deleteBankAccountById(bankAccount);
};

export { getAllBankAccounts, saveBankAccount, getBankAccountByUserId, deleteBankAccountById };
