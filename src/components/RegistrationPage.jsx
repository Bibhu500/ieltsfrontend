import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? 
          <Link to="/login" className="text-blue-500 font-semibold ml-1">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
