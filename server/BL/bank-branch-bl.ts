import * as BankBranchDAL from '../DAL/bank-branch-dal';

export const getBankBrachNameById = async (id: number) => {
  return BankBranchDAL.getBankBrachNameById(id);
};

export const getBankBranchesByBankId = async (bankId: number) => {
  return BankBranchDAL.getBankBranchesByBankId(bankId);
}
