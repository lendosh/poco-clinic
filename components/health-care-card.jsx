'use client';

import React from 'react';

import {Card, CardContent} from "@/components/ui/card";
import {useRouter} from "next/navigation";

const HealthCareCard = (data) => {
    const {program} = data;
    const router = useRouter();

    return (
        <Card
            className={`
            card-shadow w-[304px] 
            h-384 rounded-2xl p-2 bg-cover bg-center relative overflow-hidden    
            hover:cursor-pointer       
            `}
            style={{backgroundImage: `url("${program.imageUrl}")`}}
            onClick={() => router.push(`/health-care/${program.id}`)}
        >
            <CardContent className='h-96 flex'>
                <div
                    className="w-full mt-auto text-white border-swans-down-600 bg-swans-down-800 bg-opacity-90 rounded-md
                    text-3xl font-semibold
                    "
                >
                    <p className="h-full p-2">
                        {program.title}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default HealthCareCard;