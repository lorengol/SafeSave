import * as TipDAL from '../DAL/tip-dal';
import { getCurrentUserLimitation } from './limitation-bl';

const getAllTips = async () => {
  return TipDAL.getAllTips();
};

const getTipById = async (id: number) => {
  return TipDAL.getTipById(id);
};

const tipsAI = (userId: number) => {
  const userLimitations = getCurrentUserLimitation(userId);
  
}

export { getAllTips, getTipById };
