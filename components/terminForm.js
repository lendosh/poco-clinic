"use client";

import React, { useState ,useEffect } from "react";
import {createTermin} from "@/app/actions/create-termin";

/**
 *
 * @param doctors
 * @model Doctor {
 *   id        Int      @id @default(autoincrement())
 *   email     String   @unique
 *   firstName String
 *   lastName  String
 *   role      String
 * }
 * @returns {JSX.Element}
 * @constructor
 */
export const TerminForm = (doctors) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            return;
        }
    
        setIsLoaded(true)
    }, []);  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    insuranceNumber: "",
    doctorId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    //TODO: should handle createTermin action
    await createTermin(formData);
  };

  return (
    <form action={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@example.com"
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+123456789"
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Select a date"
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="time" className="block text-sm font-medium">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Select a time"
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="insuranceNumber" className="block text-sm font-medium">Insurance Number:</label>
        <input
          type="text"
          id="insuranceNumber"
          name="insuranceNumber"
          value={formData.insuranceNumber}
          onChange={handleChange}
          placeholder="Enter your insurance number"
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="doctor" className="block text-sm font-medium">Doctor:</label>
        <select
          id="doctorId"
          name="doctorId"
          value={formData.doctorId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select a doctor</option>
          {doctors.doctors.map((doctor) => {
            return <option value={doctor.id} key={doctor.id}>{doctor.firstName} {doctor.lastName}</option>;
          })}
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
