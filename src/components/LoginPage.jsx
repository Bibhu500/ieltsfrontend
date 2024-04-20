import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FaUser, FaLock } from 'react-icons/fa'; // Importing Google icons

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4 flex items-center justify-center">
            <FaUser className="w-6 h-6 mr-2 text-blue-500" />
            <input
              className="w-full px-3 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-400"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6 flex items-center justify-center">
            <FaLock className="w-6 h-6 mr-2 text-green-500" />
            <input
              className="w-full px-3 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-400"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <Link to="/maindash" className="text-white font-semibold ml-1"><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
           
           Login
         
         </button></Link>
          
        </form>
        <p className="text-center mt-4">
          New here? 
          <Link to="/signup" className="text-blue-500 font-semibold ml-1">
            Let's register
          </Link>
        </p>
        {/* Placeholder for images */}
       
      </div>
    </div>
  );
};

export default LoginPage;
