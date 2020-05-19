import * as BusinessDAL from '../DAL/business-dal';

const getBusinessNameById = async (id: number) => {
  return BusinessDAL.getBusinessNameById(id);
};

export { getBusinessNameById };
