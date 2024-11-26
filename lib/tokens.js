import crypto from 'crypto';
import {v4 as uuid} from 'uuid';
import {db} from '@/lib/db';

import {getVerificationTokenByEmail} from '@/data/verification-token';
import {getPasswordResetTokenByEmail} from '@/data/password-reset-token';
import {getTwoFactorTokenByEmail} from '@/data/two-factor-token';

const ONE_HOUR = 3600 * 1000;
const FIVE_MINUTES = 5 * 60 * 1000;

export const generateTwoFactorToken = async (email) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expires = new Date(new Date().getTime() + FIVE_MINUTES);

  const existingToken = await getTwoFactorTokenByEmail(email);

  if (existingToken) {
    await db.twoFactorToken.delete({
      where: {id: existingToken.id}
    });
  }

  return db.twoFactorToken.create({
    data: {
      email,
      token,
      expires
    }
  });
};

export const generatePasswordResetToken = async (email) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + ONE_HOUR);

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {id: existingToken.id}
    });
  }

  return db.passwordResetToken.create({
    data: {
      email,
      token,
      expires
    }
  });
};

export const generateVerificationToken = async (email) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + ONE_HOUR);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id
      },
    });
  }

  return db.verificationToken.create({
    data: {
      email,
      token,
      expires
    },
  });
};