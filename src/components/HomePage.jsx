import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Nav/Navbar";

const HomePage = ({ onChangePage }) => {
  // Animation variants for employee cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar onChangePage={onChangePage} />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-400 mt-6 mb-4 text-center">
          Welcome to the Employee Management System
        </h1>
        <p className="text-base md:text-lg text-gray-300 text-center max-w-xl">
          Manage tasks, employees, and productivity seamlessly. Use the navigation above to login or view instructions.
        </p>

        {/* Employee Cards Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-pulse">
          {["HR", "Developer", "Manager", "Designer", "Finance", "Support"].map(
            (role, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                className="bg-purple-900 p-6 rounded-lg shadow-lg text-white text-center w-64"
              >
                <h3 className="text-xl font-bold">{role}</h3>
                <p className="text-sm text-gray-200 mt-2">Managing employees</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
