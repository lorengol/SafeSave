import * as ExpenseDAL from '../DAL/expense-dal';

const getExpensesByUserId = async (userId: number) => {
  return ExpenseDAL.getExpensesByUserId(userId);
};

const getExpensesByCreditcardId = async (creditCardId: number) => {
  return ExpenseDAL.getExpensesByCreditcardId(creditCardId);
};

export { getExpensesByUserId, getExpensesByCreditcardId };
