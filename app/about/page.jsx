import React from 'react';
import DoctorCardsList from '@/components/doctor-cards-list';

const AboutPage = () => {
    return (
        <main className='flex flex-col w-full gap-y-2 items-center pt-12'>
            <h1 className='
                            text-4xl 
                            text-center
                            text-swans-down-900
                            font-bold
                            '>
                Our Doctors
            </h1>
            <DoctorCardsList/>
        </main>
    );
};

export default AboutPage;