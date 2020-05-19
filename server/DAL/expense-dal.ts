import { getRepository } from 'typeorm';
import { Expense } from '../src/entity/Expense';

export const getExpensesByUserId = async (userId: number) => {
  return getRepository(Expense).find({user_id: userId});
};
