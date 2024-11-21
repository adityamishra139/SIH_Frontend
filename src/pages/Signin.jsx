import React, { useState } from 'react';
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import myImage from '../assets/myImage.jpeg';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 flex">
        
  
        <div className="w-full md:w-1/2 p-6">
          <div className="mb-6">
            <p className="w-12 h-12 mb-4 font-extrabold hover:scale-x-125 hover:scale-y-125 text-indigo-400 text-lg hover:text-indigo-500 transition-transform transform hover:scale-100">LegalEdgeAI</p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
          

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
            <div className="mb-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
              <span 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div className="mb-4 flex justify-start">
              <a href="#" className="text-sm text-blue-700 font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="mb-4">
              <button 
                type="submit" 
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 hover:scale-105 transition duration-300">
                Sign In
              </button>
            </div>
          </form>

         
          <p className="text-center mt-4 mb-2 text-xl font-bold">OR</p>

         
          <p className="text-center text-lg font-semibold text-gray-700 mb-4">Login using Social Media</p>

          <div className="flex space-x-4 mb-4 justify-center">
            <button className="bg-blue-500 text-white py-3 px-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <GrFacebookOption className='text-2xl' />
            </button>
            <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <FcGoogle className='text-2xl' />
            </button>
            <button className="bg-blue-700 text-white py-3 px-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <FaLinkedinIn className='text-2xl' />
            </button>
          </div>
        </div>

       
        <div className="hidden md:flex w-1/2 bg-cover bg-center">
          <div className="w-full p-6 flex-col justify-center text-white"
            style={{
              backgroundImage: `url(${myImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '90vh',
            }} 
          >
            <h2 className="text-3xl font-bold mb-2">New Here?</h2>
            <p className="mb-6">Sign up and discover the great benefits of AI</p>
            <button 
              className="bg-white text-blue-600 font-bold py-2 px-4 rounded-md hover:bg-gray-100 hover:scale-110 hover:w-[100px] transition-transform duration-400 ease-in-out"
              onClick={() => navigate('/signup')} 
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
