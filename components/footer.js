import React from 'react';
import Contacts from "@/components/contacts";
import Navigation from "@/components/navigation";
import SocialLinks from '@/components/social-links';

const Footer = () => {
    return (
        <footer className='
            bg-slate-100 
            text-gray-800 
            flex space-x-2 
            fixed bottom-0 w-full 
            py-4 px-32 text-left
            justify-between items-center'
        >
            <section className='flex gap-x-32'>
                <Contacts />
                <Navigation />
            </section>
            <SocialLinks />
      </footer>
    );
};

export default Footer;