import React from 'react';
import {programList} from "@/data/program-list";

const HealthCarePage = async ({params}) => {
    const {id} = await params;
    const program = programList.find(p => p.id === Number(id));

    return (
        <div className='text-black'>
            {program.description}
        </div>
    );
};

export default HealthCarePage;