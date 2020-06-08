import { getRepository } from 'typeorm';
import { Limitation } from '../src/entity/Limitation';

export const getLimitationById = async (id: number) => {
  return getRepository(Limitation).findOne(id);
};

export const getAllUserLimitations = async (userId: number) => {
  return getRepository(Limitation).find({where: { user_Id: userId, date_deleted: null } });
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

export const getLastMonthLimitations = async (userId: number, firstDayOfMonth: Date) => {
  return getRepository(Limitation).query('select sum(l.limit) from limitations l where l.date_created < ${firstDayOfMonth}' +
                                         'and (l.date_deleted >= ${firstDayOfMonth} or l.date_deleted is null)' +
                                         'and l.user_id = ${userId}');
};