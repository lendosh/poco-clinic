import React from 'react';
import {MailIcon, Phone, MapPin, Clock} from "lucide-react";


const Contacts = () => {
    return (
        <section className='flex-col align-bottom space-y-1.5 p-1 w-full'>
            <p className='text-xl font-semibold pb-2'><span className='text-red-700'>&#123;</span>POWER<span className='text-red-700'>.</span>CODERS<span className='text-red-700'>&#125;</span></p>
            <ul>
            
                <li><MapPin className='h-5 w-5 mr-2 text-swans-down-700 inline'></MapPin><a href="https://maps.app.goo.gl/V2pDiHLdXp1iGBiDA" target="_blank">Marktgasse 46, 3011 Bern</a></li>
                <li><MailIcon className='h-5 w-5 mr-2 text-swans-down-700 inline'></MailIcon><a href="mailto:info@powercoders.org">info@powercoders.org</a></li>
                <li><Phone className='h-5 w-5 mr-2 text-swans-down-700 inline'></Phone><a href="tel:+41791234567">+41 (79) 123-45-67</a></li>
                <li><Clock className='h-5 w-5 mr-2 text-swans-down-700 inline'></Clock>Monday to Friday, 8 am to 6 pm</li>
            </ul>
        </section>
    );
};

export default Contacts;