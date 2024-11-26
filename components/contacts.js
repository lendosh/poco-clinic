import React from 'react';
import {MailIcon, Phone, MapPin, Clock} from "lucide-react";

const Contacts = () => {
    return (
        <section className='flex-col align-bottom space-y-1.5 w-full'>
            <p className='text-lg flex items-center font-semibold pb-1'>
                <span className='text-red-700'>
                    &#123;
                </span>
                <span className='flex items-center'>
                    POWER
                    <span className='text-red-700'>.</span>
                    CODERS
                </span>
                <span className='text-red-700'>&#125;</span>
            </p>
            <ul className='flex flex-col gap-y-1 text-sm'>
                <li className='flex gap-x-2 items-center justify-start text-center'>
                    <MapPin className='h-4 w-4 mr-0.5 text-swans-down-700 inline'/>
                    <a href="https://maps.app.goo.gl/V2pDiHLdXp1iGBiDA" target="_blank" className='font-bold'>Marktgasse 46, 3011 Bern</a>
                </li>
                <li className='flex gap-x-2 items-center justify-start text-center'>
                    <MailIcon className='h-4 w-4 mr-0.5 text-swans-down-700 inline'/>
                    <a href="mailto:info@powercoders.org" className='font-bold'>info@powercoders.org</a>
                </li>
                <li className='flex gap-x-2 items-center justify-start text-center'>
                    <Phone className='h-4 w-4 mr-0.5 text-swans-down-700 inline'/>
                    <a href="tel:+41791234567" className='font-bold'>+41 (79) 123-45-67</a>
                </li>
                <li className='flex gap-x-2 items-center justify-start text-center'>
                    <Clock className='h-4 w-4 mr-0.5 text-swans-down-700 inline'/>
                    <span className='font-bold'>Monday to Friday, 8 am to 6 pm</span>
                </li>
            </ul>
        </section>
    );
};

export default Contacts;