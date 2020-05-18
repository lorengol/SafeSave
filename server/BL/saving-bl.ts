import * as SavingDAL from '../DAL/saving-dal';

const getSavingsByAccount = async (accountNumer: number) => {
  return SavingDAL.getSavingsByAccount(accountNumer);
};

export { getSavingsByAccount };
