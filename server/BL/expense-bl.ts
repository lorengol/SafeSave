import * as ExpenseDAL from '../DAL/expense-dal';
import { Expense } from '../src/entity/Expense';

const getExpensesByUserId = async (userId: number) => {
  return ExpenseDAL.getExpensesByUserId(userId);
};

const getExpensesByCreditcardId = async (creditCardId: number) => {
  const expenses =  (await ExpenseDAL.getExpensesByCreditcardId(creditCardId));
  expenses.sort((a,b) => a.date > b.date ? 1 : -1);
  return expenses;
};

const getUserMonthlyExpenses = async (userId: number) => {
  return ExpenseDAL.getUserMonthlyExpenses(userId);
};

const getAllExpensesByCategory = async (userId: number, categoryId: number) => {
 return ExpenseDAL.getUserMonthlyExpensesByCategory(userId, categoryId);
};
  
export { getExpensesByUserId, getExpensesByCreditcardId, getAllExpensesByCategory, getUserMonthlyExpenses };
