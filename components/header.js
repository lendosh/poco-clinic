import React from 'react';
import LogoImage from './logo';
import NavigationLinks from './navigation-links';
import LoginArea from './login';

const Header = () => {
    return (
        <header className='flex flex-col w-full fixed top-0'>
            <section className='bg-slate-300 text-rose-500 w-full text-center flex gap-x-2 justify-center'>
                <a href="https://maps.app.goo.gl/V2pDiHLdXp1iGBiDA" target="_blank" className='font-bold'>Marktgasse 46, 3011 Bern,</a>
                <a href="tel:+41791234567" className='font-bold text-rose-500'>TEL: +41 (79) 123-45-67</a>
            </section>
            <section
                className='
                flex
                justify-between
                items-center
                py-2
                px-32
                bg-inherit
                shadow-md
                top-0
                w-full
                gap-x-8'
            >
                <LogoImage/>
                <NavigationLinks orientation='horizontal'/>
                <LoginArea />
            </section>
        </header>
    );
};

export default Header;