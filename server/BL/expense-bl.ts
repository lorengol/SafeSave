import * as ExpenseDAL from '../DAL/expense-dal';

const getExpensesByUserId = async (userId: number) => {
  return ExpenseDAL.getExpensesByUserId(userId);
};

export { getExpensesByUserId };
