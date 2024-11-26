import {db} from '@/lib/db';

export const getTwoFactorConfirmationByUserId = async (userId) => {
  try {
    return await db.twoFactorConfirmation.findUnique({
      where: {userId}
    });
  } catch {
    return null;
  }
};