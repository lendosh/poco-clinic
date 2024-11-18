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
]

const Navigation = (data) => {
console.log(data);
    return (
        <nav className={`${data.orientation === "horizontal" ? "flex gap-x-2" : "flex flex-col gap-y-2"}`}>
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

export default Navigation;