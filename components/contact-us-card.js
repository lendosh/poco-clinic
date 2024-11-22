import React from 'react';

import Button from "next/link";
import {MailIcon, CalendarDays} from "lucide-react";
import {contactItems} from '@/data/contact-items';

const ContactCard = (data) => {
    const {contactItem} = data;
    return (
        <section
            className="
                        bg-swans-down-200
                        text-center
                        rounded-2xl
                        p-6 pb-4
                        flex gap-x-8
                        
                        w-full
                    "
        >
            <div className="flex flex-col flex-grow text-swans-down-900">
                <h3 className="text-3xl font-bold border-b-2 border-swans-down-900 mb-2">
                    {contactItem.name}
                </h3>
                <p className="text-xl font-bold pb-2">{contactItem.boldtext}</p>
                <p className='mb-4'>{contactItem.text}</p>

                <div className='mt-auto my-4'>
                    <Button className="hover:no-underline bg-swans-down-600 rounded-md
                                px-4 py-2
                                text-lg
                                transition
                                delay-75
                                hover:bg-swans-down-800
                                hover:cursor-pointer
                                text-white inline
                                " 
                            href={contactItem.href} 
                            title={contactItem.title}
                            target="_blank"
                    >
                        {contactItem.linktext}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ContactCard;