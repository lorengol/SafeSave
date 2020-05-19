import { getRepository } from 'typeorm';
import { BankBranch } from '../src/entity/BankBranch';

export const getBankBrachNameById = async (id: number) => {
  return getRepository(BankBranch).findOne(id);
};

export const getBankBranchesByBankId = async (bankId: number) => {
  return getRepository(BankBranch).find({ bank_id: bankId });
}
