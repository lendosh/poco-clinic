import EmergencyClinic from '@/components/emergency-clinic';
import EmergencyOutside from '@/components/emergency-outside';

import React from 'react';

const EmergencyPage = () => {
    return (
        <section className='w-full h-full'>
            <EmergencyClinic/>
            <EmergencyOutside/>
        </section>
    );
};

export default EmergencyPage;