import * as CreditCardDAL from '../DAL/credit-card-dal';
import { CreditCard } from '../src/entity/CreditCard';

const getCreditCardById = async (id: number) => {
  return CreditCardDAL.getCreditCardById(id);
};

const getCreditCardByUserId = async (userId: number) => {
  return CreditCardDAL.getCreditCardByUserId(userId);
};

const saveCreditCard = async (creditCard: CreditCard) => {
  return CreditCardDAL.saveCreditCard(creditCard);
};

export { getCreditCardByUserId, getCreditCardById, saveCreditCard };
