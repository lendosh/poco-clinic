import React from 'react';
import {CalendarDays} from "lucide-react";


const EmergencyClinic = () => {
    return (
        <section className='text-center text-swans-down-950 mb-14'>
            <h1 className='
                                text-5xl 
                                uppercase
                                text-red-600
                                font-bold
                                pb-8'>
                    Emergency
            </h1>
            <p>Call us <a href="tel:+41791234567" className='font-bold'>+41 (79) 123-45-67</a> or <span className='font-bold'>come by directly!</span></p>

            <p>We are a walk-in practice. This means that you can <span className='font-bold'>come to us</span> with any health problem or emergency, <span className='font-bold'>even in a non-urgent case,</span> without having to make an appointment by phone.</p>

            <p>If you come without an appointment, you may have to wait longer. However, you will <span className='font-bold'>usually wait less time than in a hospital emergency room.</span></p>

            <a className="
                        bg-swans-down-600 rounded-md
                        px-4 py-2 mt-6
                        text-xl
                        transition
                        delay-75
                        hover:bg-swans-down-800
                        hover:no-underline
                        hover:cursor-pointer
                        inline-flex items-center
                        text-white
                    "

                    href={`/booking`} title={`Book an appointment`}>
                        <CalendarDays className='h-6 w-6 mr-1'/>
                        <span>Book Appointment</span>
            </a>
        </section>
    );
};

export default EmergencyClinic;