import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo/Brand */}
        <div className="text-lg font-bold">
          YourBrand
        </div>
        
        {/* Center - Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex space-x-4">
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
