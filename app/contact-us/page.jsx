import React from 'react';
import ContactCardsList from '@/components/contact-us-cards-list';

const ContactUsPage = () => {
    return (
        <section className='w-[95%] md:w-[85%] xl:w-3/4'>
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
        </section>
    );
};

export default ContactUsPage;