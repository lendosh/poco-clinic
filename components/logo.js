import React from 'react';
import Image from 'next/image';

const LogoImage = () => {
    return (
        <div>
            <Image  className="rounded-full flex items-center space-x-2"  
                    src="/hospital-logo.jpg" 
                    width={150} 
                    height={150}
                    alt="Logo"/>
        </div>
    );
};

export default LogoImage;