// src/components/other/AllTasks.jsx
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider.jsx';

// Custom hook to track window width
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const AllTasks = () => {
  const [userData] = useContext(AuthContext);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 640; // Adjust breakpoint as needed

  return (
    <div id="tasklist" className="bg-gray-800 p-5 mt-5 rounded">
      {isMobile ? (
        // Mobile layout: Each employee is rendered in a card with task details stacked.
        <>
          <h2 className="text-xl font-bold mb-3 text-white">Employee Task Insights</h2>
          <div className="space-y-4">
            {userData.map((emp, idx) => (
              <div key={idx} className="bg-gray-700 p-4 rounded text-white">
                <h2 className="text-lg font-bold">{emp.firstName}</h2>
                <div className="mt-2 space-y-1">
                  <p><span className="font-semibold">New Task:</span> {emp.taskNumbers.newTask}</p>
                  <p><span className="font-semibold">Active Task:</span> {emp.taskNumbers.active}</p>
                  <p><span className="font-semibold">Completed:</span> {emp.taskNumbers.completed}</p>
                  <p><span className="font-semibold">Failed:</span> {emp.taskNumbers.failed}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Desktop layout: Table-like grid view for better insight extraction.
        <>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-purple-800 py-2 px-4 rounded mb-2 text-white">
            <div className="text-center font-semibold">Employee Name</div>
            <div className="text-center font-semibold">New Task</div>
            <div className="text-center font-semibold">Active Task</div>
            <div className="text-center font-semibold">Completed</div>
            <div className="text-center font-semibold">Failed</div>
          </div>

          <div className="max-h-[80%] overflow-auto">
            {userData.map((emp, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-gray-700 py-2 px-4 rounded mb-2 text-white">
                <div className="text-center">{emp.firstName}</div>
                <div className="text-center text-cyan-500">{emp.taskNumbers.newTask}</div>
                <div className="text-center text-blue-500">{emp.taskNumbers.active}</div>
                <div className="text-center text-green-500">{emp.taskNumbers.completed}</div>
                <div className="text-center text-red-500">{emp.taskNumbers.failed}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllTasks;
