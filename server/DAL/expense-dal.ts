import { getRepository } from 'typeorm';
import { Expense } from '../src/entity/Expense';

export const getExpensesByUserId = async (userId: number) => {
  return getRepository(Expense).find({user_id: userId});
};

export const getExpensesByCreditcardId = async (creditCardId: number) => {
  return getRepository(Expense).find({credit_card_id: creditCardId});
};

export const getExpensesByUserAndMonthAndYear = async (userId: number, month: number, year: number) => {
  return getRepository(Expense).query(`select ifnull(sum(e.expense), 0) as expense from expenses e where e.user_id = ${userId} 
                                      and year(e.date) = ${year} and month(e.date) = ${month}`);
}

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

export const getUserExpensesByMonths = async (userId: number) => {
  return getRepository(Expense).query(`select monthname(e.date) as month, year(e.date), month(e.date), sum(e.expense) as expense
  from expenses e
  where e.user_id = ${userId}
  and year(e.date) = year(curdate()) or (year(e.date) = (year(curdate()) - 1) and month(e.date) > month(curdate()))
  group by monthname(e.date), year(e.date), month(e.date)
  order by year(e.date), month(e.date);`);
};

export const getTopExpensesPerBusiness = async (userId: number) => {
  return getRepository(Expense).query(`select b.name, sum(e.expense) as expenses, c.name as category
  from expenses e, businesses b, categories c
  where e.business_id = b.id and b.category_id = c.id
  and e.user_id = ${userId}
  and year(e.date) = year(curdate())
  and month(e.date) = month(curdate())
  group by b.name, c.name
  order by expenses desc
  LIMIT 3;`);
};

export const getBalance = async (userId: number) => {
  return getRepository(Expense).query(`select u.income, monthname(curdate()) as month, (select sum(e.expense)
  from expenses e
  where e.user_id = ${userId}
  and year(e.date) = year(curdate())
  and month(e.date) = month(curdate())) as monthlyExpenses
  from users u
  where u.id = ${userId}`);
};
export const insertExpense = async (newExpense: Expense) => {
  return getRepository(Expense).insert(newExpense);
};
