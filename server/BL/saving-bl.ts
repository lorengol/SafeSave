import * as SavingDAL from '../DAL/saving-dal';
import { Saving } from '../src/entity/Saving';

const addMonthlySavings = async (userId: number, amount: number) => {
  let newSavings: Saving = new Saving();
  newSavings.savings = amount;
  newSavings.user_id = userId;
  newSavings.date = new Date();

  return SavingDAL.addNewSavings(newSavings);
};

const getSavingsByCurrMonthAndUser = async (userId: number) => {
  return SavingDAL.getSavingsByCurrMonthAndUser(userId);
};

const getTotalSavingsForUser = async (userId: number) => {
  return SavingDAL.getTotalSavingsForUser(userId);
}

export { addMonthlySavings,  getSavingsByCurrMonthAndUser, getTotalSavingsForUser};
