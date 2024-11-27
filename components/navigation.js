import React from 'react';
import NavigationLinks from './navigation-links';

const Navigation = () => {
    return (
        <section className='flex-col gap-y-2 hidden md:flex'>
            <p className='font-semibold pt-1 pb-2 text-md w-full'>Useful Links</p>
            <div className='text-sm w-full'>
                <NavigationLinks/>
            </div>
        </section>
    );
};

export default Navigation;