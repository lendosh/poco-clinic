'use server';

import bcrypt from 'bcryptjs';
import * as z from 'zod';

import {db} from '@/lib/db';
import {RegisterSchema} from '@/schemas';
import {getUserByEmail} from '@/data/user';
import {generateVerificationToken} from '@/lib/tokens';
import {sendVerificationEmail} from '@/lib/mail';

const saltOrRounds = 10;

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedField = RegisterSchema.safeParse(values);

  if (!validatedField.success) {
    return {error: 'Invalid fields!'};
  }

  const {email, password, name} = validatedField.data;
  const hashedPassword = await bcrypt.hash(password, saltOrRounds);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {error: 'Email already in use!'};
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword
    }
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
  );

  return {success: 'Confirmation email send!'};
};