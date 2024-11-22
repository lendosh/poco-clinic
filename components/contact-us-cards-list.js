import React from 'react';

import {contactItems} from '@/data/contact-items';
import ContactCard from '@/components/contact-us-card';

const ContactCardsList = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-swans-down-950">
            {contactItems.map((contactItem) => (
                <ContactCard key={contactItem.id} contactItem={contactItem} />
            ))}
        </section>
    );
};

export default ContactCardsList;