import { getRepository } from 'typeorm';
import { Limitation } from '../src/entity/Limitation';

export const getLimitationById = async (id: number) => {
  return getRepository(Limitation).findOne(id);
};

export const getAllUserLimitations = async (userId: number) => {
  return getRepository(Limitation).find({where: { user_id: userId, date_deleted: null } });
};

export const saveNewLimitation = async (newLimitation: Limitation) => {
  return getRepository(Limitation).insert(newLimitation);
};

export const deleteLimitationById = async (id: number) => {
  let limitationToDelete = await getRepository(Limitation).findOne(id);
  limitationToDelete.date_deleted = new Date();
  return getRepository(Limitation).save(limitationToDelete);
};

export const updateLimitation = async (updatedLimitation) => {
  return getRepository(Limitation).save(updatedLimitation);
};

export const getLastMonthLimitations = async (userId: number, firstDayOfMonth: string) => {  
  return getRepository(Limitation).query(`select ifnull(sum(l.limit),0) as limitation from limitations l where l.date_created < '${firstDayOfMonth}'
                                          and (l.date_deleted >= '${firstDayOfMonth}' or l.date_deleted is null)
                                          and l.user_id = ${userId}`);
};