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

const getAllExpensesByCategory = async (userId: number, categoryId: number) => {
  return ExpenseDAL.getUserMonthlyExpensesByCategory(userId, categoryId);
 };

const getUserSavings = async (userId: number) => {
  var today = new Date();
  var month =  today.getMonth();
  var year = today.getFullYear();
  let a : string[] = new Date(today.getFullYear(), today.getMonth(), 1).toLocaleString().substring(0,8).split('/');
  let firstDay = a[2] + '-0' + a[0] + '-0' + a[1];

  if(month == 0) {
    month = 12;
    year = year - 1;
  }

  let expanses = (await ExpenseDAL.getExpensesByUserAndMonthAndYear(userId, month, year))[0].expense;
  let limitations = (await  LimitationDAL.getLastMonthLimitations(userId, firstDay))[0].limitation;

  return (limitations - expanses);
}
  
const getUserMonthlyExpenses = async (userId: number) => {
  return ExpenseDAL.getUserMonthlyExpenses(userId);
};

const insertExpense = async (newExpense: Expense) => {
   ExpenseDAL.insertExpense(newExpense);
};

const getUserExpensesByMonths = async (userId: number) => {
  return ExpenseDAL.getUserExpensesByMonths(userId);
};

const getTopExpensesPerBusiness = async (userId: number) => {
  return ExpenseDAL.getTopExpensesPerBusiness(userId);
};

const getBalance = async (userId: number) => {
  return ExpenseDAL.getBalance(userId);
};
  
export { getExpensesByUserId, getExpensesByCreditcardId, getAllExpensesByCategory, getUserMonthlyExpenses, getUserExpensesByMonths, getTopExpensesPerBusiness, getBalance };
