import React from 'react';
import LogoImage from './logo';

const Header = () => {
    return (
        <header className='fixed top-0 w-full'>
            <LogoImage/>
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </header>
    );
};

export default Header;