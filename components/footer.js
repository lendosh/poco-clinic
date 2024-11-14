import React from 'react';

const Footer = () => {
    return (
        <footer className='flex space-x-2 fixed bottom-0 border-t-2 border-white w-full p-4 text-left'>
            <div className='basis-1/3 flex-col space-y-1.5 p-1'>
                <p className='text-xl font-semibold'>Medunna</p>
                <ul>
                    <li><a href="https://maps.app.goo.gl/sPkLeMRoMvCZwzB46" target="_blank">📌 575 Eighth Avenue New York, NY 10018</a></li>
                    <li><a href="mailto:info@medunna.com">✉️ info@medunna.com</a></li>
                    <li><a href="tel:+14155550132">📞 +1 (415) 555-01-32</a></li>
                </ul>
            </div>
            <div className='basis-1/3 justify-center space-y-1.5 p-1'>
                <p className='font-semibold'>Useful links</p>
                <ul className='py-2'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Doctors</a></li>
                    <li><a href="#">Make an apointment</a></li>
                </ul>
            </div>
            <div className='basis-1/3 flex-col'>
                <div className='inline-flex gap-2'>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                </div>
                <p>© Copyright <strong>Medunna</strong>. All Rights Reserved</p>
            </div>
      </footer>
    );
};

export default Footer;