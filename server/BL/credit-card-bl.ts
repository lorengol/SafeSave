import * as CreditCardDAL from '../DAL/credit-card-dal';
import { CreditCard } from '../src/entity/CreditCard';

const getCreditCardById = async (id: number) => {
  return CreditCardDAL.getCreditCardById(id);
};

const getCreditCardByUserId = async (user_id: number) => {
  return (await CreditCardDAL.getCreditCardByUserId(user_id));
};

const saveCreditCard = async (creditCard: CreditCard) => {
  return CreditCardDAL.saveCreditCard(creditCard);
};

export { getCreditCardByUserId, getCreditCardById, saveCreditCard };
