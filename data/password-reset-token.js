import {db} from '@/lib/db';

export const getPasswordResetTokenByToken = async (token) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: {token}
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email) => {
  try {
    return await db.passwordResetToken.findFirst({
      where: {email}
    });

  } catch {
    return null;
  }
};