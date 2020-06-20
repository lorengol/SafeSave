import { getRepository } from 'typeorm';
import { Saving } from '../src/entity/Saving';

export const getSavingsByUser = async (userId: number) => {
  return getRepository(Saving).find({user_id: userId});
};

export const addNewSavings = async (newSavings: Saving) => {
  return getRepository(Saving).insert(newSavings);
};
