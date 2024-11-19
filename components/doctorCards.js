import React from 'react';
import { Doctors } from './doctors';

const DoctorCards = () => {
  return (
    <div className="doctor-cards-container grid grid-cols-2 gap-8 text-swans-down-950">
      {Doctors.map((doctor) => (
        <div key={doctor.id || doctor.name} className="doctor-card 
            bg-swans-down-200 
            rounded-2xl
            p-6 pb-4">
          <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image
            
            " />
          <div className="doctor-content">
            <h3 className="doctor-name
                text-xl">{doctor.name}

            </h3>
            <p className="doctor-specialization
                text-xl font-bold pb-1">{doctor.specialization}
            </p>
            <p className="doctor-experience">Experience: {doctor.experience}</p>
            <p className="doctor-education
                mb-4
            ">Education: {doctor.education}</p>
            {doctor.email && (
                <a
                  href={`mailto:${doctor.email}`}
                  title={`Email to ${doctor.name}`}
                  className="doctor-email-button
                   bg-swans-down-600 rounded-md
                   px-3 py-1
                   text-2xl 
                   hover:bg-swans-down-950
                   hover:no-underline
                ">
                  ✉️
                </a>
            )}
            {doctor && (
                <a
                  href="/booking"
                  title="Book an appointment"
                  className="doctor-email-button
                   bg-swans-down-600 rounded-md
                   px-3 py-1
                   ml-2
                   text-2xl 
                   hover:bg-swans-down-950
                   hover:no-underline
                ">
                  🗓️
                </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorCards;
