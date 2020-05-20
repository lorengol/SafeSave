import * as CategoryDAL from '../DAL/category-dal';
import { Category } from '../src/entity/Category';

const getAllCategories = async () => {
  return CategoryDAL.getAllCategories();
};

const getCategoryById = async (id: number) => {
  return CategoryDAL.getCategoryById(id);
};

const saveCategory = async (categoty: Category) => {
  return CategoryDAL.saveCategory(categoty);
};

export { getCategoryById, getAllCategories, saveCategory };
