import {signOut} from 'next-auth/react';

export const logout = async () => {
  //some stuff before signOut;
  await signOut();
};