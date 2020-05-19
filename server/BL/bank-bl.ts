import * as BankDAL from '../DAL/bank-dal';

const getAllBanks = async () => {
  return BankDAL.getAll();
};

const getBank = async (id: number) => {
  return BankDAL.getBankById(id);
};

export { getAllBanks, getBank };
