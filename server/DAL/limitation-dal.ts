import { getRepository } from 'typeorm';
import { Limitation } from '../src/entity/Limitation';

export const getLimitationById = async (id: number) => {
  return getRepository(Limitation).findOne(id);
};

export const getAllUserLimitations = async (userId: number) => {
  return getRepository(Limitation).find({ user_id: userId });
};

export const saveNewLimitation = async (newLimitation: Limitation) => {
  return getRepository(Limitation).insert(newLimitation);
};

export const deleteLimitationById = async (id: number) => {
  return getRepository(Limitation).delete(id);
};

export const updateLimitation = async (updatedLimitation) => {
  return getRepository(Limitation).save(updatedLimitation);
};