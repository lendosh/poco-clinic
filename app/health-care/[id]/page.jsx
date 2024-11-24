import React from 'react';
import {programList} from "@/data/program-list";
import Image from 'next/image';
import {Button} from "@/components/ui/button";

const HealthCarePage = async ({params}) => {
    const {id} = await params;
    const program = programList.find(p => p.id === Number(id));

    return (
        <main
            className="gap-x-12 gap-y-4 w-[450px] md:w-full
            grid grid-cols-1 md:grid-cols-2 px-2 md:px-8 xl:px-36
            place-items-center"
        >
            <Image
                src={program.imageUrl}
                height={900}
                width={450}
                alt="Program logo"
                className="rounded-xl ml-auto object-cover"
            />
            <section className="flex flex-col gap-y-4 w-[450px] h-full">
                <p className="font-bold text-4xl">{program.title}</p>
                <p className="text-md max-h-full overflow-hidden overflow-y-auto">{program.description}</p>
                <Button className="w-full mt-auto">
                    Find out more
                </Button>
            </section>
        </main>

    );
};

export default HealthCarePage;