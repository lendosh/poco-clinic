import React from 'react';
import {Card, CardContent} from "@/components/ui/card";

const HealthCareCard = (data) => {
    const {imageSource, description} = data;
    return (
        <Card
            className={`
            card-shadow w-[304px] 
            h-384 rounded-2xl p-2 bg-cover bg-center relative overflow-hidden 
            bg-[url('/1_health.avif')]
            `}
        >
            <CardContent className='h-96 flex'>
                <div
                    className="w-full mt-auto text-white border-swans-down-600 bg-swans-down-800 bg-opacity-90 rounded-md
                    text-4xl font-semibold
                    "
                >
                    <p className="h-full p-2">
                        {description}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default HealthCareCard;