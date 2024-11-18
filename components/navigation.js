import React from 'react';

const Navigation = (orientation) => {

    return (
        <nav className= {`${orientation="horizontal" ? "flex gap-x-2":"flex flex-col gap-y-2"}`}> 
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/booking">Appointment</a>
        </nav>
    );
};

export default Navigation;

