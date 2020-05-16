import * as LimitationDAL from '../DAL/limitatoin-dal';
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
export { getAllUserLimitations, getLimitationById, saveNewLimitation };
