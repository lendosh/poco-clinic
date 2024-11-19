import React from 'react';

import {doctorsList} from '@/data/doctors';
import DoctorCard from "@/components/doctor-card";

const DoctorCardsList = () => {
    return (
        <div className="doctor-cards-container grid grid-cols-2 gap-8 text-swans-down-950">
            {doctorsList.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
        </div>
    );
};

export default DoctorCardsList;
