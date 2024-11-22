import React from 'react';
import Link from "next/link";

const EmergencyOutside = () => {
    return (
        <section className='text-center text-swans-down-950'>
                <h1 className='
                                text-4xl 
                                uppercase
                                font-bold
                                py-8'>
                        Outside our working hours
                </h1>
                <p>Please contact the following offices <span className='font-bold'>outside of our opening hours:</span></p>
                <ul>
                    <li>In a life-threatening emergency: <span className='font-bold'>Ambulance</span> <Link href="tel:1414" className='font-bold text-swans-down-500'>144</Link></li>
                    <li>In a non-life-threatening emergency:
                        <Link 
                            className='font-bold text-swans-down-500 ml-1' 
                            href="https://www.berner-aerzte.ch/fr/information/pour-patients/urgence-medicale.html"
                            target='_blank'>
                                fast medical assistance by phone
                        </Link>
                    </li>
                    <li>In case of poisoning: <span className='font-bold'>Tox Info Suisse</span> 
                        <Link href="tel:1414" className='font-bold text-swans-down-500 ml-1'>
                            145
                        </Link>
                    </li>
                    <li>In case of an accident in the mountains: <span className='font-bold'>Rega</span>
                        <Link href="tel:1414" className='font-bold text-swans-down-500 ml-1'>
                            1414
                        </Link>
                    </li>
                    <li>In case of return transport from abroad: <span className='font-bold'>Rega</span>
                        <Link href="tel:+41333333333" className='font-bold text-swans-down-500 ml-1'>
                            +41 333 333 333
                        </Link>
                    </li>
                </ul>
        </section>
    );
};

export default EmergencyOutside;