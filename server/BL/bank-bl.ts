import * as BankDAL from '../DAL/bank-dal';
import { Bank } from '../src/entity/Bank';

const getAllBanks = async () => {
  return BankDAL.getAll();
};

const getBank = async (id: number) => {
  return BankDAL.getBankById(id);
};

export { getAllBanks, getBank };
