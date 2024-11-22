import EmergencyClinic from '@/components/emergency-clinic';
import EmergencyOutside from '@/components/emergency-outside';

import React from 'react';

const EmergencyPage = () => {
    return (
        <section className='w-1/2 leading-7'>
            <EmergencyClinic/>
            <EmergencyOutside/>
        </section>
    );
};

export default EmergencyPage;