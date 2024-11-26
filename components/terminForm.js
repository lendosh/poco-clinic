"use client";

import React, { useState, useEffect } from "react";
import { createTermin } from "@/app/actions/create-termin";

export const TerminForm = ({ doctors }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    setIsLoaded(true);
  }, [isLoaded]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    insuranceNumber: "",
    doctorId: "",
    isSubscribed: false,
    reminderDate: "",
    reminderTime: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear errors when user changes the field
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name & Last Name Validation (Only letters and space allowed)
    if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name must only contain letters and spaces.";
    }
    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    }

    if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name must only contain letters and spaces.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    }

    // Email Validation (Must include @ and no spaces)
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., example@domain.com).";
    }

    // Phone Validation (Swiss phone number format, with +41 country code or local 07xx numbers)
    if (!formData.phone || !/^(?:\+41\d{9}|\d{2} \d{3} \d{4})$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid Swiss phone number (+41 79 123 4567 or 076 123 4567).";
    }

    // Insurance Number Validation (Must be 13 characters and start with 756)
    if (!formData.insuranceNumber || !/^756\d{10}$/.test(formData.insuranceNumber)) {
      newErrors.insuranceNumber = "Insurance number must be 13 digits and start with 756.";
    }

    // Date Validation (Year should be 4 digits and not greater than 2100)
    if (!formData.date || !/^\d{4}-\d{2}-\d{2}$/.test(formData.date)) {
      newErrors.date = "Please select a valid appointment date.";
    } else if (parseInt(formData.date.split("-")[0], 10) > 2100) {
      newErrors.date = "Year cannot be greater than 2100.";
    }

    // Time Validation
    if (!formData.time) {
      newErrors.time = "Please select a valid appointment time.";
    }

    // Doctor Selection Validation
    if (!formData.doctorId) {
      newErrors.doctorId = "Please select a doctor.";
    }

    // Reminder Date Validation
    if (!formData.reminderDate) {
      newErrors.reminderDate = "Please select a reminder date.";
    }

    // Reminder Time Validation
    if (!formData.reminderTime) {
      newErrors.reminderTime = "Please select a reminder time.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Don't submit if there are errors
    }

    scheduleReminder(); // Schedule reminder

    if (formData.isSubscribed) {
      console.log("User has subscribed to the newsletter.");
    } else {
      console.log("User has not subscribed to the newsletter.");
    }

    // Create the appointment
    await createTermin(formData);
  };

  const scheduleReminder = () => {
    const reminderDateTime = new Date(`${formData.reminderDate}T${formData.reminderTime}`);
    const now = new Date();

    if (reminderDateTime > now) {
      const timeUntilReminder = reminderDateTime - now;

      setTimeout(() => {
        alert("Termin Reminder: It's time for your appointment!");
      }, timeUntilReminder);
    } else {
      console.log("Reminder date/time is in the past. Please set a valid reminder.");
    }
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return times;
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      insuranceNumber: "",
      doctorId: "",
      isSubscribed: false,
      reminderDate: "",
      reminderTime: "",
      specialRequests: "",
    });
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-lg shadow"
    >
      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Firstname (e.g., John)"
          className="w-full border p-2 rounded"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Lastname (e.g., Nash)"
          className="w-full border p-2 rounded"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-Mail (e.g., max@example.com)"
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="phone number (e.g., +41 79 123 4567 or 076 123 4567)"
          className="w-full border p-2 rounded"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      {/* Date */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      {/* Time */}
      <div>
        <label htmlFor="time" className="block text-sm font-medium">
          Time:
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select time</option>
          {generateTimeOptions().map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
      </div>

      {/* Doctor */}
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
            {doctors.map((doctor) => {
                return <option value={doctor.id} key={doctor.id}>{doctor.firstName} {doctor.lastName}</option>;
            })}
        </select>
        {errors.doctorId && <p className="text-red-500 text-sm">{errors.doctorId}</p>}
      </div>


      {/* Reminder Date */}
      <div>
        <label htmlFor="reminderDate" className="block text-sm font-medium">
          Reminder Date:
        </label>
        <input
          type="date"
          id="reminderDate"
          name="reminderDate"
          value={formData.reminderDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.reminderDate && <p className="text-red-500 text-sm">{errors.reminderDate}</p>}
      </div>

      {/* Reminder Time */}
      <div>
        <label htmlFor="reminderTime" className="block text-sm font-medium">
          Reminder Time:
        </label>
        <input
          type="time"
          id="reminderTime"
          name="reminderTime"
          value={formData.reminderTime}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.reminderTime && <p className="text-red-500 text-sm">{errors.reminderTime}</p>}
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium">
          Special Requests:
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Any special requests?"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-between">
        <button
          type="reset"
          onClick={handleReset}
          className="bg-gray-300 p-2 rounded-lg"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
