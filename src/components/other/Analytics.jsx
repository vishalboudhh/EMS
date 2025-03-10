// src/components/other/Analytics.jsx
import React, { useContext } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { AuthContext } from '../../context/AuthProvider';

const Analytics = () => {
  const [userData] = useContext(AuthContext);

  // Aggregate totals across employees
  const totalNewTasks = userData.reduce((acc, emp) => acc + emp.taskNumbers.newTask, 0);
  const totalActiveTasks = userData.reduce((acc, emp) => acc + emp.taskNumbers.active, 0);
  const totalCompletedTasks = userData.reduce((acc, emp) => acc + emp.taskNumbers.completed, 0);
  const totalFailedTasks = userData.reduce((acc, emp) => acc + emp.taskNumbers.failed, 0);

  // Data for PieChart
  const pieData = [
    { name: 'New Tasks', value: totalNewTasks },
    { name: 'Active Tasks', value: totalActiveTasks },
    { name: 'Completed Tasks', value: totalCompletedTasks },
    { name: 'Failed Tasks', value: totalFailedTasks }
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6666'];

  // Data for BarChart per employee
  const barData = userData.map(emp => ({
    name: emp.firstName,
    New: emp.taskNumbers.newTask,
    Active: emp.taskNumbers.active,
    Completed: emp.taskNumbers.completed,
    Failed: emp.taskNumbers.failed
  }));

  return (
    <div className="p-10 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-5">Analytics</h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Pie Chart Container */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl mb-3">Overall Task Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart Container */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl mb-3">Employee Task Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="New" fill="#8884d8" />
              <Bar dataKey="Active" fill="#82ca9d" />
              <Bar dataKey="Completed" fill="#ffc658" />
              <Bar dataKey="Failed" fill="#ff6666" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
