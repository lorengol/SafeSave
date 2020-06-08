import * as ExpenseDAL from '../DAL/expense-dal';
import * as LimitationDAL from '../DAL/limitatoin-dal';

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

const getUserSavings = async (userId: number) => {
  var today = new Date();
  var month =  +today.getMonth;
  var year = +today.getFullYear;
  var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

  if(month == 0) {
    month = 12;
    year = year - 1;
  }

  let expanses = +ExpenseDAL.getExpensesByUserAndMonthAndYear(userId, month, year);
  let limitations =  +LimitationDAL.getLastMonthLimitations(userId, firstDay);
  
  return (limitations - expanses);
}
  
export { getExpensesByUserId, getExpensesByCreditcardId, getAllExpensesByCategory, getUserSavings };
