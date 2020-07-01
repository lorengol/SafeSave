import { getRepository } from 'typeorm';
import { Limitation } from '../src/entity/Limitation';

export const getLimitationById = async (id: number) => {
  return getRepository(Limitation).findOne(id);
};

export const getAllUserLimitations = async (userId: number) => {
  return getRepository(Limitation).find({
    where: { user_id: userId, date_deleted: null },
  });
};

export const saveNewLimitation = async (newLimitation: Limitation) => {
  return getRepository(Limitation).insert(newLimitation);
};

export const deleteLimitationById = async (id: number) => {
  let limitationToDelete = await getRepository(Limitation).findOne(id);
  limitationToDelete.date_deleted = new Date();
  return getRepository(Limitation).save(limitationToDelete);
};

export const updateLimitation = async (updatedLimitation) => {
  return getRepository(Limitation).save(updatedLimitation);
};

export const getLastMonthLimitations = async (
  userId: number,
  firstDayOfMonth: string
) => {
  return getRepository(Limitation)
    .query(`select ifnull(sum(l.limit),0) as limitation from limitations l where l.date_created < '${firstDayOfMonth}'
                                          and (l.date_deleted >= '${firstDayOfMonth}' or l.date_deleted is null)
                                          and l.user_id = ${userId}`);
};

export const getCurrentUserLimitation = async (userId: number) => {
  return getRepository(Limitation)
    .query(`select ec.id, ec.category, ec.expense, l.limit
            from (select c.id as id, c.name as category, sum(e.expense) as expense
              from safe_save.expenses e, safe_save.businesses b, safe_save.categories c
              where e.business_id = b.id
              and b.category_id = c.id
              and e.user_id = ${userId}
              and year(e.date) = year(curdate())
              and month(e.date) = month(curdate())
              group by c.id, c.name) as ec, safe_save.limitations l
            where l.category_id = ec.id
            order by (ec.expense / l.limit) desc
          `);
};

export const getSimilarUsersData = async (birthYear: number) => {
  return getRepository(Limitation)
    .query(`select ec.user_id, ec.id, ec.category, ec.expense, l.limit, ec.expense_month, ec.expense_year, IF(ec.expense > l.limit, "true", "false") as overlapsed
    from (select c.id as id, c.name as category, e.user_id, sum(e.expense) as expense, month(e.date) as expense_month, year(e.date) expense_year
        from safe_save.expenses e, safe_save.businesses b, safe_save.categories c
        where e.business_id = b.id
        and b.category_id = c.id
        and day(e.date) <= day(curdate())
          and (year(e.date) < year(curdate()) or month(e.date) < month(curdate()))
        group by c.id, c.name, e.user_id, month(e.date), year(e.date)) as ec,
          limitations l,
          users u
    where l.category_id = ec.id
    and l.user_id = ec.user_id
    and l.user_id = u.id
    and ${birthYear} between year(u.birth_date) - 2 and year(u.birth_date) + 2
    and l.date_deleted is null`);
};
