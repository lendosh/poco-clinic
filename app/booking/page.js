import React from "react";

import { TerminForm } from "@/components/terminForm";

import { getDoctors } from "@/app/actions/get-doctors";

const TerminPage = async () => {
    const doctors = await getDoctors();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Book Your Appointment</h1>
            <div  className="alex" >
                <h2>How to Schedule an Appointment</h2>
                <ol>
                    <li><strong>Fill in Your Personal Information:</strong> Enter your <em>First Name</em> and <em>Last Name</em>.</li>
                    <li><strong>Provide Your Contact Details:</strong> Add a valid <em>Email</em> and <em>Phone Number</em>.</li>
                    <li><strong>Select a Preferred Date and Time:</strong> Choose an available <em>Date</em> and <em>Time</em>.</li>
                    <li><strong>Enter Your Insurance Number:</strong> Provide it if applicable.</li>
                    <li><strong>Choose Your Doctor:</strong> Select the doctor from the dropdown menu.</li>
                    <li><strong>Review and Submit:</strong> Double-check your details and click <em>Submit</em>.</li>
                    <li><strong>Confirmation:</strong> Check your email for the appointment confirmation.</li>
                </ol>
            </div>
            <TerminForm doctors={doctors} />
        </div>
    );
}

export default TerminPage;
