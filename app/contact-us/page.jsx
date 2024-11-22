import React from "react";

const ContactUsPage = async () => {
    const doctors = await getDoctors();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        </div>
    );
}

export default ContactUsPage;