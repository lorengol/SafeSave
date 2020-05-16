import { getRepository } from 'typeorm';
import { CreditCard } from '../src/entity/CreditCards';

export const saveCreditCard = async (newCreditCard: CreditCard) => {
  return getRepository(CreditCard).insert(newCreditCard);
};

export const getCreditCardById = async (id: number) => {
  return getRepository(CreditCard).findOne(id);
};

export const getCreditCardByUserId = async (userId: number) => {
  return getRepository(CreditCard).find({ user_id: userId });
};
