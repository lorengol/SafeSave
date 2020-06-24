import { getRepository } from 'typeorm';
import { Saving } from '../src/entity/Saving';

export const getSavingsByUser = async (userId: number) => {
  return getRepository(Saving).find({user_id: userId});
};

export const addNewSavings = async (newSavings: Saving) => {
  return getRepository(Saving).insert(newSavings);
};

export const getTotalSavingsForUser = async (userId: number) => {
  return getRepository(Saving).query(`select ifnull(sum(s.savings),0) as sum from savings s where s.user_id = ${userId}`);
};

export const getSavingsByCurrMonthAndUser = async (userId: number) => {
  return getRepository(Saving).query(`SELECT 
                                          IF(EXISTS( SELECT 
                                                      *
                                                  FROM
                                                      savings s
                                                  WHERE
                                                      s.user_id = ${userId}
                                                          AND MONTH(s.date) = MONTH(CURDATE())),
                                              1, 0) AS indExists`);
};



