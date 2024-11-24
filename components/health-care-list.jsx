import React from 'react';
import {programList} from "@/data/program-list";
import HealthCareCard from "@/components/health-care-card";

const HealthCareList = () => {
    return (
        <section className='px-2 md:px-8 lg:px-16 flex flex-col items-center w-full'>
            <p className='w-full text-center font-bold text-5xl'>Our programs:</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 pt-4'>
            {
                programList.map(program => {
                    return (
                        <HealthCareCard key={program.id} program={program} />
                    )
                })
            }
            </div>
        </section>
    );
};

export default HealthCareList;