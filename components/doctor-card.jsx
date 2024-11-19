import React from 'react';

import Image from "next/image";
import Link from "next/link";

import {MailIcon} from "lucide-react";

const DoctorCard = (data) => {
    const {doctor} = data;
    return (
        <div
            className="doctor-card
                    bg-swans-down-200
                    rounded-2xl
                    p-6 pb-4
                    flex gap-x-8
                    w-full
                    "
        >
            {doctor.imageUrl && (
                <Image
                    width={150}
                    height={100}
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    quality={100}
                    className="doctor-image rounded-md shadow-xl aspect-square w-fit border"
                />
            )}
            <div className="doctor-content flex flex-col flex-grow text-swans-down-950">
                <h3 className="doctor-name text-3xl font-bold">
                    {doctor.name}
                </h3>
                <p
                    className="doctor-specialization text-xl font-bold pb-1"
                >
                    {doctor.specialization}
                </p>
                <p className="doctor-experience">Experience: {doctor.experience}</p>
                <p className="doctor-education mb-4">Education: {doctor.education}</p>
                <div className='mt-auto ml-auto flex items-center justify-center'>
                    {doctor.email && (
                        <div
                            className="doctor-email-button
                                           bg-swans-down-600 rounded-md
                                           px-3 py-1
                                           text-2xl
                                           transition
                                           delay-75
                                           hover:bg-swans-down-800
                                           hover:no-underline
                                           hover:cursor-pointer
                                    "
                        >

                            <MailIcon className='h-6 w-6 text-white'>
                                <Link
                                    href={`mailto:${doctor.email}`}
                                    title={`Email to ${doctor.name}`}
                                />
                            </MailIcon>
                        </div>
                        // <a
                        //     href={`mailto:${doctor.email}`}
                        //     title={`Email to ${doctor.name}`}
                        //     className="doctor-email-button
                        //        bg-swans-down-600 rounded-md
                        //        px-3 py-1
                        //        text-2xl
                        //        transition
                        //        delay-75
                        //        hover:bg-swans-down-800
                        //        hover:no-underline
                        // ">
                        //     ✉️
                        // </a>
                    )}
                    <a
                        href="/booking"
                        title="Book an appointment"
                        className="doctor-email-button
                                   bg-swans-down-600 rounded-md
                                   px-3 py-1
                                   ml-2
                                   text-2xl
                                   transition
                                   delay-75
                                   hover:bg-swans-down-800
                                   hover:no-underline
                            ">
                        🗓️
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;