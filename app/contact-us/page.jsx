import React from 'react';
import ContactCardsList from '@/components/contact-us-cards-list';

const ContactUsPage = () => {
    return (
        <section>
            <h1 className='
                            text-4xl 
                            text-center
                            text-swans-down-950
                            font-bold
                            pb-12'>
                Contact Us
            </h1>
            <ContactCardsList/>
        </section>
    );
};

export default ContactUsPage;