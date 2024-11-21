import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    
    setError('');
    setSuccess('Signup successful!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  
  

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <div className="mb-6">
          <p className="w-12 h-12 mb-4 font-extrabold hover:scale-x-125 hover:scale-y-125 text-indigo-400 text-lg hover:text-indigo-500 transition-transform transform hover:scale-100">LegalEdgeAI</p>
        </div>
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">Create Account</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
       
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

     
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 pr-10"
                placeholder="••••••••"
              />
              <span 
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />} 
              </span>
            </div>
          </div>

         
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700" htmlFor="confirm-password">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 pr-10"
                placeholder="••••••••"
              />
              <span 
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />} 
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 hover:scale-110 transition duration-300 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Sign Up
          </button>

   
          <div className="flex items-center justify-between my-4">
            <div className="border-b w-1/5"></div>
            <span className="text-gray-800 mx-2">OR</span>
            <div className="border-b w-1/5"></div>
          </div>

          
          <button
            className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 hover:scale-110 transition duration-300 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            onClick={() => alert('Login with Google clicked')} 
          >
            <FcGoogle className="mr-2" /> 
            Login with Google
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">Already have an account? 
            <a href="#" className="text-blue-600 hover:underline"> Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
