import { getRepository } from 'typeorm';
import { Expense } from '../src/entity/Expense';

export const getExpensesByUserId = async (userId: number) => {
  return getRepository(Expense).find({user_id: userId});
};

export const getExpensesByCreditcardId = async (creditCardId: number) => {
  return getRepository(Expense).find({credit_card_id: creditCardId});
};

export const getUserMonthlyExpenses = async (userId: number) => {
  return getRepository(Expense).query(`select c.name as category, sum(e.expense) as expense
                                       from safe_save.expenses e, safe_save.businesses b, safe_save.categories c
                                       where e.business_id = b.id
                                       and b.category_id = c.id
                                       and e.user_id = ${userId}
                                       and year(e.date) = year(curdate())
                                       and month(e.date) = month(curdate())
                                       group by c.name`);
};

export const getUserMonthlyExpensesByCategory = async (userId: number, categoryId: number) => {
  return getRepository(Expense).query(`select c.name as category, sum(e.expense) as expense
                                      from safe_save.expenses e, safe_save.businesses b, safe_save.categories c
                                      where e.business_id = b.id
                                      and b.category_id = c.id
                                      and e.user_id = ${userId}
                                      and c.id = ${categoryId}
                                      and year(e.date) = year(curdate())
                                      and month(e.date) = month(curdate())
                                      group by c.name`);
};
