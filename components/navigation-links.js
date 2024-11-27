import React from 'react';
import Link from "next/link";

const navLinks = [{
        name: 'Emergency',
        href: '/emergency'
    },
    {
        name: 'Booking',
        href: '/booking'
    },
    {
        name: 'About Us',
        href: '/about'
    },
    {
        name: 'Contact Us',
        href: '/contact-us'
    },
]

const NavigationLinks = (data) => {
    return (
        <nav className={` hidden md:flex ${data.orientation === "horizontal" ? "gap-x-8" : "flex-col gap-y-1"}`}>
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