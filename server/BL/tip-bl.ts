import * as TipDAL from '../DAL/tip-dal';
import { getCurrentUserLimitation, getSimilarUsersData } from './limitation-bl';
import bayes from 'bayes';

const getAllTips = async () => {
  return TipDAL.getAllTips();
};

const getTipById = async (id: number) => {
  return TipDAL.getTipById(id);
};

const getTipByCategory = async (id: number) => {
  return TipDAL.getTipByCategory(id);
};

const tipsAI = async (userId: number, birthYear: number) => {
  const userLimitations = await getCurrentUserLimitation(userId);
  const similarLimitation = await getSimilarUsersData(birthYear);

  var classifier = bayes();
  similarLimitation.forEach(async (limit) => {
    const percentage = getRoundedExpensePercentage(limit.expense, limit.limit);
    await classifier.learn(
      `${limit.user_id}, ${limit.category}, ${percentage}`,
      `${limit.overlapsed}`
    );
  });

  let willOverlap;
  for (let i = 0; i < userLimitations.length; i++) {
    const limitation = userLimitations[i];

    const percentage = getRoundedExpensePercentage(limitation.expense, limitation.limit);
    let p = await classifier.categorize(
      `${userId}, ${limitation.category}, ${percentage}`
    );
    
    if (p === 'yes') {
      willOverlap = limitation;
      break;
    }
  }

  return await getTipByCategory(willOverlap ? willOverlap.id : 9);
};

const getRoundedExpensePercentage = (expense, limit) => {
  return expense > limit ? 100 : Math.round(expense / limit * 10) * 10;
}

export { getAllTips, getTipById, tipsAI };
