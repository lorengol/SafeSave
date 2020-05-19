import * as ExpenseTypeDAL from '../DAL/expense-type-dal';

const getAllExpensesTypes = async () => {
  return ExpenseTypeDAL.getAllExpensesTypes();
};

const getExpenseTypeById = async (id: number) => {
  return ExpenseTypeDAL.getExpenseTypeById(id);
};

export { getAllExpensesTypes, getExpenseTypeById };
