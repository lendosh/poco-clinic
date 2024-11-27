import React from 'react';
import Contacts from "@/components/contacts";
import Navigation from "@/components/navigation";
import SocialLinks from '@/components/social-links';

const Footer = () => {
    return (
        <footer className='
            flex
            bg-inherit
            text-swans-down-800 
            space-x-4
            py-4
            px-2
            md:px-16
            lg:px-32
            mt-8
            justify-between 
            items-center
            w-full
            [box-shadow:0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]'
        >
            <section className='flex flex-col md:flex-row justify-around max-w-[50%] w-full'>
                <Contacts/>
                <Navigation/>
            </section>
            <SocialLinks/>
        </footer>
    );
};

export default Footer;