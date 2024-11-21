import React from 'react';
import DoctorCardsList from '@/components/doctor-cards-list';

const AboutPage = () => {
    return (
        <div>
            <h1 className='
                            text-4xl 
                            text-center
                            text-swans-down-900
                            font-bold
                            pb-12'>
                Our Doctors
            </h1>
            <DoctorCardsList/>
        </div>
    );
};

export default AboutPage;