import React from 'react';
import LogoImage from './logo';
import NavigationLinks from './navigation-links';
import LoginArea from './login';

const Header = () => {
    return (
        <header className='fixed flex justify-between items-center px-4 py-2 bg-inherit shadow-md top-0 w-full gap-x-8'>
            <LogoImage />
            <NavigationLinks orientation='horizontal'/>
            <LoginArea />
        </header>
    );
};

export default Header;