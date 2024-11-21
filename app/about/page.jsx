import React from 'react';
import DoctorCardsList from '@/components/doctor-cards-list';

const AboutPage = () => {
    return (
        <section>
            <h1 className='
                            text-4xl 
                            text-center
                            text-swans-down-900
                            font-bold
                            pb-12'>
                Our Doctors
            </h1>
            <DoctorCardsList/>
        </section>
    );
};

export default AboutPage;