import { getRepository } from 'typeorm';
import { BankBranches } from '../src/entity/BankBranch';

export const getBankBrachNameById = async (id: number) => {
  return getRepository(BankBranches).findOne(id);
};
