import * as ExpenseDAL from '../DAL/expense-dal';

const getExpensesByUserId = async (userId: number) => {
  return ExpenseDAL.getExpensesByUserId(userId);
};

const getExpensesByCreditcardId = async (creditCardId: number) => {
  // return (await ExpenseDAL.getExpensesByCreditcardId(creditCardId));
  const expenses =  (await ExpenseDAL.getExpensesByCreditcardId(creditCardId));
  expenses.sort((a,b) => a.date > b.date ? 1 : -1);
  return expenses;
};

const getAllExpensesByCategory = async (userId: number, categoryId: number ) => {
  const allExpensesByUser = await getExpensesByUserId(userId);
  return allExpensesByUser.map(expense => expense.business.category_id === categoryId);
}
  
export { getExpensesByUserId, getExpensesByCreditcardId, getAllExpensesByCategory };
