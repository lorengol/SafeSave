import * as LimitationDAL from '../DAL/limitation-dal';
import { Limitation } from '../src/entity/Limitation';

const getAllUserLimitations = async (usreId: number) => {
  return LimitationDAL.getAllUserLimitations(usreId);
};

const getLimitationById = async (id: number) => {
  return LimitationDAL.getLimitationById(id);
};

const saveNewLimitation = async (newLimiation: Limitation) => {
  return LimitationDAL.saveNewLimitation(newLimiation);
};

const deleteLimitationById = async (id: number) => {
  return LimitationDAL.deleteLimitationById(id);
};
export {
  getAllUserLimitations,
  getLimitationById,
  saveNewLimitation,
  deleteLimitationById,
};
