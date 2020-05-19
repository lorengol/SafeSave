import * as TipDAL from '../DAL/tip-dal';
import { Tip } from '../src/entity/Tip';

const getAllTips = async () => {
  return TipDAL.getAllTips();
};

const getTipById = async (id: number) => {
  return TipDAL.getTipById(id);
};

export { getAllTips, getTipById };
