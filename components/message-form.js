import React, { useState ,useEffect } from "react";


export const MessageForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //const handleSubmit = async () => {
    //TODO: should handle createTermin action
    //await createTermin(formData);
  //};

  return (
    <form action={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow w-3/4">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
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
          className="w-full border p-2 rounded"
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
          className="w-full border p-2 rounded"
        />
      </div>
      <p>Your message:</p>
      <div>
        <textarea 
            id="message"
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
        >
        </textarea>
      </div>
      
      <button 
        type="submit" 
            className="
                hover:no-underline 
                bg-swans-down-600 rounded-md
                px-4 py-2
                text-lg
                transition
                delay-75
                hover:bg-swans-down-800
                hover:cursor-pointer
                text-white inline">
        Submit
      </button>
    </form>
  );
}
