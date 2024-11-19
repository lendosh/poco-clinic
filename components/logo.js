import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const LogoImage = () => {
    return (
        <Link
            href='/'
            className='flex items-center justify-center gap-x-2'
        >
            <Image  className="rounded-full flex items-center space-x-2"  
                    src="/clinic-logo.svg"
                    width={50}
                    height={50}
                    alt="Logo"
            />
            <p className='font-bold text-xl font-serif'>POCO-Clinic</p>
        </Link>
    );
};

export default LogoImage;