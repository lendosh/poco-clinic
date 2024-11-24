import React from 'react';
import {Button} from "@/components/ui/button";

const ContactCard = (data) => {
    const {contactItem} = data;
    return (
        <section
            className="
                        bg-swans-down-200
                        text-center
                        rounded-2xl
                        p-2 md:p-6 pb-2 md:pb-4
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
                <Button
                    className='mt-auto'
                    variand='default'
                    href={contactItem.href}
                    title={contactItem.title}
                    target="_blank"
                >
                    {contactItem.linktext}
                </Button>
            </div>
        </section>
    );
};

export default ContactCard;