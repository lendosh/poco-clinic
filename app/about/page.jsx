import React from 'react';
import DoctorCardsList from '@/components/doctor-cards-list';

const AboutPage = () => {
    return (
        <main>
            <h1 className='
                            text-4xl 
                            text-center
                            text-swans-down-900
                            font-bold
                            pb-12
                            pt-60'>
                Our Doctors
            </h1>
            <DoctorCardsList/>
        </main>
    );
};

export default AboutPage;