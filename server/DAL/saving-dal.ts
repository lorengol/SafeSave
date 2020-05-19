import { getRepository } from 'typeorm';
import { Saving } from '../src/entity/Saving';

export const getSavingsByAccount = async (accountNumber: number) => {
  return getRepository(Saving).find({account_number: accountNumber});
};
