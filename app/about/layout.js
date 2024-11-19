import React from 'react';
import DoctorCardsList from '@/components/doctor-cards-list';

const Layout = () => {
    return (
        <div>
            <h1 className='
                            text-4xl 
                            text-center
                            text-swans-down-900
                            font-bold
                            pb-6'>
                Our Doctors
            </h1>
            <DoctorCardsList/>
        </div>
    );
};

export default Layout;