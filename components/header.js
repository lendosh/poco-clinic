import React from 'react';
import LogoImage from './logo';

const Header = () => {
    return (
        <header className='flex justify-start items-center px-4 py-2 bg-inherit shadow-md top-0 w-full gap-x-8'>
            <LogoImage />
            <nav className="flex justify-start space-x-4">
                <a
                    href="/"
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Home
                </a>
                <a
                    href="/booking"
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Booking
                </a>
                <a
                    href="/about"
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    About
                </a>
            </nav>
        </header>
    );
};

export default Header;