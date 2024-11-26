'use client';

import React from 'react';

import Link from "next/link";
import {CalendarDays} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const EmergencyClinic = () => {
    const router = useRouter();

    return (
        <section className='text-center text-swans-down-950 flex flex-col gap-y-6 items-center w-2/5 mx-auto'>
            <h1 className='text-5xl uppercase text-red-600 font-bold'>
                    Emergency
            </h1>
            <p>Call us
                <Link href="tel:+41791234567" className='font-bold text-swans-down-500 mx-1'>
                    +41 (79) 123-45-67
                </Link>
            or
                <span className='font-bold'> come by directly!</span>
            </p>

            <p>We are a walk-in practice. This means that you can
                <span className='font-bold'> come to us</span>
                with any health problem or emergency,
                <span className='font-bold'> even in a non-urgent case, </span>
                without having to make an appointment by phone.
            </p>

            <p>If you come without an appointment, you may have to wait longer. However, you will <span className='font-bold'>usually wait less time than in a hospital emergency room.</span></p>

            <Button
                size='lg'
                onClick={() => router.push('/booking')}
            >
                        <CalendarDays className='h-6 w-6 mr-1'/>
                        <span>Book Appointment</span>
            </Button>
        </section>
    );
};

export default EmergencyClinic;