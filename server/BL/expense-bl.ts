import * as ExpenseDAL from '../DAL/expense-dal';
import * as LimitationDAL from '../DAL/limitation-dal';
import { Expense } from '../src/entity/Expense';

const getExpensesByUserId = async (userId: number) => {
  return ExpenseDAL.getExpensesByUserId(userId);
};

const getExpensesByCreditcardId = async (creditCardId: number) => {
  const expenses =  (await ExpenseDAL.getExpensesByCreditcardId(creditCardId));
  expenses.sort((a,b) => a.date > b.date ? 1 : -1);
  return expenses;
};

const getAllExpensesByCategory = async (userId: number, categoryId: number ) => {
  const allExpensesByUser = await getExpensesByUserId(userId);
  return allExpensesByUser.map(expense => expense.business.category_id === categoryId);
}

const getUserSavings = async (userId: number) => {
  var today = new Date();
  var month =  today.getMonth();
  var year = today.getFullYear();
  var firstDay = new Date(today.getFullYear(), today.getMonth(), 1).toLocaleString().substring(0,8);

  console.log(today)
  console.log('month:' + month)
  console.log('year:' + year)
  console.log('first:' + firstDay)

  if(month == 0) {
    month = 12;
    year = year - 1;
  }

  let expanses = (await ExpenseDAL.getExpensesByUserAndMonthAndYear(userId, month, year))[0].expense;
  let limitations = (await  LimitationDAL.getLastMonthLimitations(userId, firstDay))[0].limitation;

  console.log(expanses)
  console.log(limitations)
  console.log(limitations - expanses)

  return (limitations - expanses);
}
  
const getUserMonthlyExpenses = async (userId: number) => {
  return ExpenseDAL.getUserMonthlyExpenses(userId);
};

export { getExpensesByUserId, getExpensesByCreditcardId, getAllExpensesByCategory, getUserMonthlyExpenses, getUserSavings };
