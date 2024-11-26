import React, {Suspense} from 'react';
import {ResetForm} from '@/components/auth/reset-form';

const ResetPage = () => {
  return (
      <Suspense>
        <ResetForm />
      </Suspense>
  );
};

export default ResetPage;
