import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import Navigation from "@/components/navigation";

const Footer = () => {
    return (
        <footer className='bg-slate-300 text-gray-800 flex space-x-2 fixed bottom-0 w-full p-4 text-left'>
            <section className='basis-1/3 flex-col align-bottom space-y-1.5 p-1'>
                <p className='text-xl font-semibold pb-2'><span className='text-red-700'>&#123;</span>POWER<span className='text-red-700'>.</span>CODERS<span className='text-red-700'>&#125;</span></p>
                <ul>
                    <li>📌 <a href="https://maps.app.goo.gl/V2pDiHLdXp1iGBiDA" target="_blank">Marktgasse 46, 3011 Bern</a></li>
                    <li>✉️ <a href="mailto:info@powercoders.org">info@powercoders.org</a></li>
                    <li>📞 <a href="tel:+41791234567">+41 (79) 123-45-67</a></li>
                </ul>
            </section>
            <section className='basis-1/3'>
                <p className='font-semibold py-2'>Useful Links</p>
                <Navigation/>
            </section>
            <section className='basis-1/3 flex-col mt-auto'>
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
                <p className='mt-4'>© 2024 <strong><span className='text-red-700'>&#123;</span>POWER<span className='text-red-700'>.</span>CODERS<span className='text-red-700'>&#125;</span></strong>. All Rights Reserved</p>
            </section>
      </footer>
    );
};

export default Footer;