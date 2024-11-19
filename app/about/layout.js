import React from 'react';
import DoctorCards from '@/components/doctorCards';

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
            <DoctorCards/>
        </div>
    );
};

export default Layout;