import React from 'react';

import {doctorsList} from '@/data/doctors';
import DoctorCard from "@/components/doctor-card";

const DoctorCardsList = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4  text-swans-down-950">
            {doctorsList.map((doctor: any) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
        </section>
    );
};

export default DoctorCardsList;
