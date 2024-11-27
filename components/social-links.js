import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
    return (
        <section className='flex-col mb-auto md:mt-auto'>
            <div className='flex gap-1'>
                <a href='https://facebook.com' target='_blank'>
                    <div className='rounded-full bg-blue-600 flex hover:bg-blue-400/80 justify-center items-center h-8 w-8 p-2'>
                        <Facebook color='white'/>
                    </div>
                </a>
                <a href='https://instagram.com' target='_blank'>
                    <div className='rounded-full bg-rose-500 hover:bg-rose-300/80 flex justify-center items-center h-8 w-8 p-2'>
                        <Instagram color='white'/>
                    </div>
                </a>
                <a href='https://youtube.com' target='_blank'>
                    <div className='rounded-full bg-red-700 hover:bg-red-400/80 flex justify-center items-center h-8 w-8 p-2'>
                        <Youtube color='white'/>
                    </div>
                </a>
                <a href='https://linkedin.com' target='_blank'>
                    <div className='rounded-full bg-blue-900 hover:bg-blue-700/80 flex justify-center items-center h-8 w-8 p-2'>
                        <Linkedin color='white'/>
                    </div>
                </a>
            </div>
            <p className='pt-3 text-xs md:text-md'>© 2024 <strong><span className='text-red-700'>&#123;</span>POWER<span className='text-red-700'>.</span>CODERS<span className='text-red-700'>&#125;</span></strong>. All Rights Reserved</p>
        </section>
    );
};

export default SocialLinks;