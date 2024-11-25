import React from 'react';
import ContactCardsList from '@/components/contact-us-cards-list';

const ContactUsPage = () => {
    return (
        <main className='flex flex-col w-full gap-y-2 items-center pt-12'>
            <h1 className='
                            text-4xl
                            text-center
                            text-swans-down-950
                            font-bold
                            '>
                Contact Us
            </h1>
            <ContactCardsList/>
        </main>
    );
};

export default ContactUsPage;