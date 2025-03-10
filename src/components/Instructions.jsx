import React from 'react';
import Navbar from './Nav/Navbar';

const Instructions = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-10">
      <nav className="bg-gradient-to-r from-purple-500 to-purple-700 p-4 flex flex-col md:flex-row items-center md:justify-between rounded-full">
        <div className="text-white font-bold text-xl mb-2 sm:mb-0">
          Employee Management
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto">
          <button
            onClick={onBack}
            className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 active:bg-red-800 transition-all"
          >
            Back
          </button>
        </div>
      </nav>
      
      <div className="mt-10 max-w-2xl mx-auto bg-gray-950 text-white p-6 sm:p-8 rounded-4xl shadow">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4">
          How to Login
        </h2>
        <p className="mb-2">
          <strong>Admin Login:</strong> Use <em>admin@gmail.com</em> as the email and <em>123</em> as the password.
        </p>
        <p className="mb-2">
          <strong>Employee Login:</strong> Use your registered email and password. Employee details are maintained locally.
        </p>
        <p className="mb-2">
          After logging in, admins can create tasks and manage employees, while employees can view and update their task statuses.
        </p>
        <button
          onClick={onBack}
          className="mt-4 w-full sm:w-auto bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-all"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Instructions;
