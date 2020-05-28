import { getRepository } from 'typeorm';
import { Expense } from '../src/entity/Expense';

export const getExpensesByUserId = async (userId: number) => {
  return getRepository(Expense).find({user_id: userId});
};

export const getExpensesByCreditcardId = async (creditCardId: number) => {
  return getRepository(Expense).find({credit_card_id: creditCardId});
};
