import React from 'react';
import LogoImage from './logo';

const Header = () => {
    return (
        <header className='fixed top-0 w-full'>
            <LogoImage/>
            <div class="logo">MyLogo</div>
            <nav>
            <ul>
                <li><a href="index.html">Main</a></li>
                <li><a href="terms.html">Terms</a></li>
                <li><a href="about.html">Namnam</a></li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;