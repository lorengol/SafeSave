import { getRepository } from 'typeorm';
import { Expense } from '../src/entity/Expense';

export const getExpensesByUserId = async (userId: number) => {
  return getRepository(Expense).find({user_id: userId});
};

export const getExpensesByCreditcardId = async (creditCardId: number) => {
  return getRepository(Expense).find({credit_card_id: creditCardId});
};

export const getExpensesByUserAndMonthAndYear = async (userId: number, month: number, year: number) => {
  return getRepository(Expense).query('select sum(e.expense) from expenses e where e.user_id = ${userId}' +
                                      'and year(e.date) = ${year} and month(e.date) = ${month}');
};
