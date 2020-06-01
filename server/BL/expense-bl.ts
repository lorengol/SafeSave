import * as ExpenseDAL from '../DAL/expense-dal';

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

const getAllExpensesByCategory = async (userId: number, categoryId: number ) => {
  const allExpensesByUser = await getExpensesByUserId(userId);
  const expensesByCategory = allExpensesByUser.filter(expense => expense.business.category_id == categoryId);
  return expensesByCategory.reduce((total, value) => total + value.expense, 0).toString();
};
  
export { getExpensesByUserId, getExpensesByCreditcardId, getAllExpensesByCategory, getUserMonthlyExpenses };
