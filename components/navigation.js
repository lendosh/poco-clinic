import React from 'react';
import NavigationLinks from './navigation-links';

const Navigation = () => {
    return (
        <section className='whitespace-nowrap'>
            <p className='font-semibold pt-1 pb-2 text-md w-full'>Useful Links</p>
            <div className='text-sm'>
                <NavigationLinks/>
            </div>
        </section>
    );
};

export default Navigation;