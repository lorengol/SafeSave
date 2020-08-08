import * as TipDAL from '../DAL/tip-dal';
import { getCurrentUserLimitation, getSimilarUsersData } from './limitation-bl';
import bayes from 'bayes';

// const bayes = require('bayes');

const getAllTips = async () => {
  return TipDAL.getAllTips();
};

const getTipById = async (id: number) => {
  return TipDAL.getTipById(id);
};

const getTipByCategory = async (id: number) => {
  return TipDAL.getTipByCategory(id);
};

// const tipsAI = async (userId: number, birthYear: number) => {
//   const userLimitations = await getCurrentUserLimitation(userId);
//   const similarLimitation = await getSimilarUsersData(birthYear);
//   let classifier = new NaiveBayes();
//   similarLimitation.forEach((limit) => {
//     classifier.train({
//       user_id: String(limit.user_id),
//       category_id: String(limit.id),
//       expense: String(limit.expense),
//       limit: String(limit.limit),
//       month: String(limit.expense_month),
//       overlapsed: limit.overlapsed,
//     });
//   });

//   const willOverlap = userLimitations.find((limitation) => {
//     let p = classifier.classify('overlapsed', {
//       user_id: String(userId),
//       category_id: String(limitation.id),
//       expense: String(limitation.expense),
//       limit: String(limitation.limit),
//       month: String(7),
//     });
//     console.log(p);
//     return p.true > 0.5;
// });

//   const category = willOverlap ? willOverlap.id : 9;
//   return getTipByCategory(category);
// };

const tipsAI = async (userId: number, birthYear: number) => {
  const userLimitations = await getCurrentUserLimitation(userId);
  const similarLimitation = await getSimilarUsersData(birthYear);

  var classifier = bayes();

  console.log('similar');
  similarLimitation.forEach(async (limit) => {
    const percentage = getRoundedExpensePercentage(limit.expense, limit.limit);
    await classifier.learn(
      `${limit.user_id}, ${limit.category}, ${percentage}`,
      `${limit.overlapsed}`
    );
  });

  console.log('user');
  const willOverlap = userLimitations.forEach(async (limitation) => {
    const percentage = getRoundedExpensePercentage(limitation.expense, limitation.limit);
    let p = await classifier.categorize(
      `${userId}, ${limitation.category}, ${percentage}`
    );
    console.log(p);
  });
  
};

const getRoundedExpensePercentage = (expense, limit) => {
  console.log(expense, limit, expense / limit, Math.round(expense / limit * 10) * 10);
  return Math.round(expense / limit * 10) * 10;
}
export { getAllTips, getTipById, tipsAI };
