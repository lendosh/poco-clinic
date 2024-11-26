import React from "react";
import {TerminForm} from "../../components/terminForm";
import {getDoctors} from "../actions/get-doctors";

const TerminPage = async () => {
    const doctors = await getDoctors();

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-8">
                {/* Info Text */}
                <div className='w-full h-full flex flex-grow flex-col justify-between gap-y-8'>
                    <h1 className="text-2xl font-bold">Book Your Appointment</h1>
                    <div className="flex-1 md:text-left">
                        <p className="mb-4">We are here to assist you! Whether you are seeking medical advice, have
                            questions about our services, or need assistance with booking an appointment, our dedicated
                            team
                            is here to ensure you have the best experience at POCO-Clinic.</p>
                        <p className="mb-4">Our professionals are committed to providing personalized care, so please
                            allow
                            up to 24 hours during business hours for a response. Our business hours are Monday to
                            Friday,
                            from 8:00 AM to 6:00 PM.</p>
                    </div>
                </div>
                {/* Form */}
                <div className="flex-1 max-w-lg w-full">
                    <div className="h-[400px] overflow-y-auto">
                        {/* Added a fixed height and scrollable container for the form */}
                        <TerminForm doctors={doctors}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TerminPage;
