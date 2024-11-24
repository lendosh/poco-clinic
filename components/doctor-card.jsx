import React from 'react';

import Image from "next/image";
import Link from "next/link";

import {MailIcon, CalendarDays} from "lucide-react";
import {Button} from "@/components/ui/button";

const DoctorCard = (data) => {
    const {doctor} = data;
    return (
        <section
            className="
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
                    className="rounded-md shadow-xl aspect-square w-fit border"
                />
            )}
            <div className="flex flex-col flex-grow text-swans-down-950">
                <h3 className="text-3xl font-bold">
                    {doctor.name}
                </h3>
                <p
                    className="text-xl font-bold pb-2"
                >
                    {doctor.specialization}
                </p>
                <p>Experience: {doctor.experience}</p>
                <p className="mb-4">Education: {doctor.education}</p>
                <div className='mt-auto ml-auto flex gap-x-2 items-center justify-center'>
                    {doctor.email && (
                        <Button>
                            <Link href={`mailto:${doctor.email}`} title={`Email to ${doctor.name}`}>
                                <MailIcon className='h-6 w-6 text-white'/>
                            </Link>
                        </Button>
                    )}
                    <Button>
                        <Link href={`/booking`} title={`Book an appointment`}>
                            <CalendarDays className='h-6 w-6 text-white'/>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default DoctorCard;