import { getRepository } from 'typeorm';
import { Tip } from '../src/entity/Tip';

export const getAllTips = async () => {
  return getRepository(Tip).find();
};

export const getTipById = async (id: number) => {
  return getRepository(Tip).findOne(id);
};
