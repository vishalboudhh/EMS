import React, { useState } from "react";
import Navbar from "../Nav/Navbar";

const Login = ({ handleLogin, onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen w-screen flex-col bg-black">
      <Navbar onChangePage={onBack} />

      <div className="flex items-center justify-center p-4 flex-grow">
        <div className="bg-gray-900 border border-purple-500 shadow-lg rounded-2xl p-8 md:p-12 w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-purple-600 mb-6 text-center">Login</h1>
          <form onSubmit={submitHandler} className="flex flex-col space-y-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 focus:border-purple-500 focus:ring-emerald-500 py-3 px-4 text-lg text-gray-100 bg-gray-800 rounded-lg shadow-sm outline-none transition-all"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 focus:border-purple-500 focus:ring-emerald-500 py-3 px-4 text-lg text-gray-100 bg-gray-800 rounded-lg shadow-sm outline-none transition-all"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-all"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onBack}
              className="w-full bg-gray-300 hover:bg-gray-400 py-3 text-lg font-semibold text-gray-700 rounded-lg shadow-md transition-all"
            >
              Back to Home
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
