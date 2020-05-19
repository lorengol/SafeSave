import { getRepository } from 'typeorm';
import { Business } from '../src/entity/Business';

export const getBusinessNameById = async (id: number) => {
  return getRepository(Business).findOne(id);
};
