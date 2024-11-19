import React from 'react';
import LogoImage from './logo';
import NavigationLinks from './navigation-links';

const Header = () => {
    return (
        <header
            className='
            fixed
            flex
            justify-between
            items-center
            py-2
            px-32
            bg-inherit
            shadow-md
            top-0
            w-full
            gap-x-8
        '>
            <LogoImage/>
            <NavigationLinks orientation='horizontal'/>
        </header>
    );
};

export default Header;