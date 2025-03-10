import React from "react";

const Navbar = ({ onChangePage }) => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-purple-700 p-4 flex flex-col md:flex-row items-center md:justify-between rounded-full">
      <div
        className="text-white font-bold text-xl mb-2 md:mb-0 cursor-pointer"
        onClick={() => onChangePage("home")}
      >
        Employee Management
      </div>
      <div className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-4">
        <button
          onClick={() => onChangePage("home")}
          className="px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-950 active:bg-blue-800 transition-all"
        >
          Home
        </button>
        <button
          onClick={() => onChangePage("login")}
          className="px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-950 active:bg-green-800 transition-all"
        >
          Login
        </button>
        <button
          onClick={() => onChangePage("instructions")}
          className="px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-950 active:bg-gray-800 transition-all"
        >
          How to Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
