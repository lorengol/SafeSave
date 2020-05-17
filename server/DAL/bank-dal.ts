import { getRepository } from 'typeorm';
import { Bank } from '../src/entity/Bank';

export const saveBank = async (newCreditCard: Bank) => {
  return getRepository(Bank).insert(newCreditCard);
};

export const getBankById = async (id: number) => {
  return getRepository(Bank).findOne(id);
};

export const getAll = async () => getRepository(Bank).find();


