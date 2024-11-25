import React from 'react';
import LogoImage from './logo';
import {Card, CardContent} from "@/components/ui/card";

const welcomeText = 'We deliver innovative, compassionate care, blending advanced technology with a patient-first\n' +
    '                        approach.'

const ClinicInfo = () => {
    return (
        <Card
            className='
            card-shadow w-full
            rounded-2xl p-2 bg-cover bg-center relative overflow-hidden
            hover:cursor-pointer
            '
            style={{backgroundImage: `url("/main-page-img.webp")`}}

        >
            <CardContent className='flex h-96'>
                <div
                    className="
                    w-full mt-auto text-white border-swans-down-600
                    bg-swans-down-800 bg-opacity-90 rounded-md
                    text-3xl font-semibold
                    "
                >
                    <LogoImage width={100} height={100} textSize={'large'}/>
                    <p className="h-full p-2">
                        {welcomeText}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default ClinicInfo;