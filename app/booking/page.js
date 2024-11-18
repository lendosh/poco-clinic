import React from "react";

import {TerminForm} from "@/components/terminForm";

import {getDoctors} from "@/app/actions/get-doctors";

const TerminPage = async () => {
    const doctors = await getDoctors();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Book Your Appointment</h1>
            <TerminForm doctors={doctors}/>
        </div>
    );
}

export default TerminPage;
