import React from 'react';
import LogoImage from './logo';

const ClinicInfo = () => {
    return (
        <section
            className='
                        bg-[url("/main-page-img.webp")] 
                        w-3/4 h-96
                        mb-10
                        card-shadow rounded-2xl p-4 bg-center relative overflow-hidden   
                    '>

            <article className='flex'>
                <div
                    className="text-white border-swans-down-600 bg-swans-down-800 bg-opacity-80 rounded-md
                    text-3xl font-semibold
                    "
                >
                    <LogoImage />
                    <p className="p-2">
                    We deliver innovative, compassionate care, blending advanced technology with a patient-first approach.
                    </p>
                </div>
            </article>
        </section>
    );
};

export default ClinicInfo;