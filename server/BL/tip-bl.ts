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

  similarLimitation.forEach(async (limit) => {
    await classifier.learn(
      `${limit.user_id} ${limit.id} ${limit.expense} ${limit.limit}`,
      `${limit.overlapsed}`
    );
  });

  const willOverlap = userLimitations.find(async (limitation) => {
    let p = await classifier.categorize(
      `${userId} ${limitation.id} ${limitation.expense} ${limitation.limit}`
    );
    console.log(p);
  });

};
export { getAllTips, getTipById, tipsAI };
