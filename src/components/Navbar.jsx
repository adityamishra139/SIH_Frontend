import React, { useState } from 'react';
import { IoIosGlobe } from "react-icons/io";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-900 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold hover:text-indigo-400 hover:scale-110">
          <a href='#'>LegalEdgeAI</a>
        </div>

        <div className="flex items-center space-x-4">
          {/* Global Icon and Language Dropdown */}
          <button 
            className="flex items-center text-white"
            onClick={toggleDropdown}
            aria-label="Select Language"
          >
            <IoIosGlobe className='text-3xl'/>
            <span className="ml-2">Language</span>
            <svg
              className={`ml-1 w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute mt-2 w-48 bg-blue-950 rounded-md shadow-lg z-10">
              <a href="#regional1" className="block px-4 py-2 text-white hover:bg-gray-400">
                Marathi
              </a>
              <a href="#regional2" className="block px-4 py-2 text-white hover:bg-gray-400">
                Bengali
              </a>
              <a href="#regional3" className="block px-4 py-2 text-white hover:bg-gray-400">
                Tamil
              </a>
              <a href="#regional4" className="block px-4 py-2 text-white hover:bg-gray-400">
                Telugu
              </a>
            </div>
          )}
        </div>
      </div>

      <hr className="border-blue-900" /> 

      <div className="container mx-auto flex justify-between items-center mt-4">
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:bg-gray-500">Home</a>
          <a href="/about" className="text-white hover:bg-gray-500">About</a>
          <a href="/analysis" className="text-white hover:bg-gray-500">Analysis</a>
          <a href="/localization" className="text-white hover:bg-gray-500">Localization</a>
          <a href="/contact" className="text-white hover:bg-gray-500">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-white hover:bg-gray-300 py-2 px-6 rounded-full flex items-center">
            <p className="text-gray-700 font-bold text-lg">Log In</p>
          </button>

          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
