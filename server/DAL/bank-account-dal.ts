import { getRepository } from 'typeorm';
import { BankAccount } from '../src/entity/BankAccount';

export const saveBankAccount = async (newBankAccount: BankAccount) => {
  return getRepository(BankAccount).insert(newBankAccount);
};

// export const getBankAccountById = async (id: number) => {
//   return getRepository(BankAccount).findOne(id);
// };

export const getBankAccountByUserId = async (userId: number) => {
  return getRepository(BankAccount).find({ user_id: userId });
};

export const deleteBankAccountById = async (id: number) => {
  return getRepository(BankAccount).delete(id);
};

export const getAll = async () => getRepository(BankAccount).find();
