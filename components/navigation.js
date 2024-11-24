import React from 'react';
import NavigationLinks from './navigation-links';

const Navigation = () => {
    return (
        <section className='whitespace-nowrap'>
            <p className='font-semibold py-2 text-xl w-full'>Useful Links</p>
            <NavigationLinks/>
        </section>
    );
};

export default Navigation;