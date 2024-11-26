import {db} from '@/lib/db';

export const getAccountByUserId = async (userId) => {
  try {
    return await db.account.findFirst({
      where: {userId}
    });
  } catch {
    return null;
  }
};