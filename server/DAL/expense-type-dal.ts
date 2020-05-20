import { getRepository } from 'typeorm';
import { ExpenseType } from '../src/entity/ExpenseType';

export const getAllExpensesTypes = async () => {
  return getRepository(ExpenseType).find();
};

export const getExpenseTypeById = async(id: number) =>{
    return getRepository(ExpenseType).findOne(id);
}
