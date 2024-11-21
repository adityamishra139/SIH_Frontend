import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='bg-gray-200'>
    <Navbar></Navbar>
      <div className="container mx-auto px-6 mb-10">
        {/* Logo Section */}
        {/* <div className="mb-6">
          <p className="w-12 h-12 mb-4 font-extrabold hover:scale-x-110 hover:scale-y-110 text-indigo-400 text-4xl hover:text-indigo-500 transition-transform transform hover:scale-100">LegalEdgeAI</p>
        </div> */}

        {/* Contact Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Contact Us</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mx-auto px-6">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 mb-10">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-900 hover:w-[200px] transition duration-200 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="container mx-auto text-left px-6">
          <h3 className="text-lg font-bold mb-2">Contact Details</h3>
          <p className="text-gray-700 flex items-center">
            <MdEmail className="mr-2" /> {/* Email Icon */}
            Email: <span className="text-blue-600">legaledgeAI@xyz.gmail.com</span>
          </p>
          <p className="text-gray-700 flex items-center">
            <IoCall className="mr-2" /> {/* Phone Icon */}
            Contact Number: <span className="text-blue-600">+91-XYZ-XXXX-XXXX</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
