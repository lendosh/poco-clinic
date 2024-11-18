import React from 'react';
import LogoImage from './logo';
import NavigationLinks from './navigation-links';

const Header = () => {
    return (
        <header className='flex justify-start items-center px-4 py-2 bg-inherit shadow-md top-0 w-full gap-x-8'>
            <LogoImage />
            <NavigationLinks />
        </header>
    );
};

export default Header;