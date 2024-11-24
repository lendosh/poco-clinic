import React from 'react';
import ContactCardsList from '@/components/contact-us-cards-list';

const ContactUsPage = () => {
    return (
        <main>
            <h1 className='
                            text-4xl 
                            text-center
                            text-swans-down-950
                            font-bold
                            pt-20 py-12
                            '>
                Contact Us
            </h1>
            <ContactCardsList/>
        </main>
    );
};

export default ContactUsPage;