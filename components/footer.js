import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-slate-300 text-gray-800 flex space-x-2 fixed bottom-0 border-t-2 border-white w-full p-4 text-left'>
            <section className='basis-1/3 flex-col align-bottom space-y-1.5 p-1'>
                <p className='text-xl font-semibold'>POWER<span className='text-red-700'>.</span>CODERS</p>
                <ul>
                    <li><a href="https://maps.app.goo.gl/V2pDiHLdXp1iGBiDA" target="_blank">📌 Marktgasse 46, 3011 Bern</a></li>
                    <li><a href="mailto:info@powercoders.org">✉️ info@powercoders.org</a></li>
                    <li><a href="tel:+41791234567">📞 +41 (79) 123-45-67</a></li>
                </ul>
            </section>
      </footer>
    );
};

export default Footer;