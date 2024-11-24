import React from 'react';
import Link from "next/link";

const navLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Appointment',
        href: '/booking'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Contact Us',
        href: '/contact-us'
    },
    {
        name: 'Emergency',
        href: '/emergency'
    }
]

const NavigationLinks = (data) => {
    return (
        <nav className={`${data.orientation === "horizontal" ? "flex gap-x-8" : "flex flex-col gap-y-1"}`}>
            {navLinks.map(link => {
                return (
                    <Link
                        className='text-swans-down-500 font-bold'
                        key={link.name}
                        href={link.href}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    );
};

export default NavigationLinks;