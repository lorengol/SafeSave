import * as CreditCardDAL from '../DAL/credit-card-dal';
import * as bankAccountBL  from '../BL/bank-account-bl';
import * as expenseGenerator from '../expenses-generator';
import * as userBL from '../BL/user-bl';
import { CreditCard } from '../src/entity/CreditCard';
import { User } from '../src/entity/User';

const getCreditCardById = async (id: number) => {
  return CreditCardDAL.getCreditCardById(id);
};

const getCreditCardByUserId = async (user_id: number) => {
  return (await CreditCardDAL.getCreditCardByUserId(user_id));
};

const saveCreditCard = async (creditCard: CreditCard) => {
  await CreditCardDAL.saveCreditCard(creditCard);

  let creditCardsNum = (await getCreditCardByUserId(creditCard.user_id)).length;

  if(creditCardsNum == 1) {
    let user: User = await userBL.getUser(creditCard.user_id);
    let timeDiff = Math.abs(Date.now() - user.birth_date.getTime())
    let Age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

    // This month expenses
    var today = new Date();
    var start = new Date(today.getFullYear(), today.getMonth(), 1);
    expenseGenerator.generate(Age, creditCard.user_id, null, creditCard.id, start, today)

    for(let i=1; i<=7; i++) {
      // Last month expenses
      start = new Date(today.getFullYear(), today.getMonth() - i, 1);
      var end = new Date(today.getFullYear(), today.getMonth() - i, 30);

      expenseGenerator.generate(Age, creditCard.user_id, null, creditCard.id, start, end)
    }
    

  } else {
    var end = new Date();
    var start = new Date(end.getFullYear(), end.getMonth(), 1);    
    expenseGenerator.generate(99, creditCard.user_id, null, creditCard.id, start, end)
  }
};

const deleteCreditCard = async (id: number) => {
  return CreditCardDAL.deleteCreditCardById(id);
};

const getCreditCardByCardNumber = async (cardNumber: number) => {
  return CreditCardDAL.getCreditCardByCardNumber(cardNumber);
}

export { getCreditCardByUserId, getCreditCardById, saveCreditCard, deleteCreditCard, getCreditCardByCardNumber };