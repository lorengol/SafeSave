import { getRepository } from 'typeorm';
import { Category } from '../src/entity/Category';

export const getAllCategories = async () => {
  return getRepository(Category).find();
};

export const saveCategory = async (category: Category) => {
  return getRepository(Category).insert(category);
};

export const getCategoryById = async (id: number) => {
  return getRepository(Category).findOne(id);
};
