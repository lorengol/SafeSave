import * as BankBranchDAL from '../DAL/bank-branch-dal';

const getBankBrachNameById = async (id: number) => {
  return BankBranchDAL.getBankBrachNameById(id);
};

export { getBankBrachNameById };
