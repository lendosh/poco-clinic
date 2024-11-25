import React from 'react';
import ContactCardsList from '@/components/contact-us-cards-list';

const ContactUsPage = () => {
    return (
        <main className='flex flex-col w-full gap-y-2 items-center'>
            <h1 className='
                            text-4xl
                            text-center
                            text-swans-down-950
                            font-bold
                            pb-6
                            '>
                Contact Us
            </h1>
            <ContactCardsList/>
        </main>
    );
};

export default ContactUsPage;