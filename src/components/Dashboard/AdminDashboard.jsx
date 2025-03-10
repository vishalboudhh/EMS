// src/components/Dashboard/AdminDashboard.jsx
import React, { useState } from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTasks from '../other/AllTasks';
import EmployeeManagement from '../other/EmployeeManagement';
import EmployeeProfile from '../other/EmployeeProfile';
import Analytics from '../other/Analytics';

const tabs = [
  { key: 'create', label: 'Create Task' },
  { key: 'tasks', label: 'All Tasks' },
  { key: 'employees', label: 'Employees' },
  { key: 'analytics', label: 'Analytics' },
];

const AdminDashboard = ({ changeUser }) => {
  const [activeTab, setActiveTab] = useState('employees');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Handler for updating an employee profile from the admin side
  const updateEmployeeProfile = (updatedProfile) => {
    console.log("Updated Employee Profile:", updatedProfile);
    alert("Employee profile updated!");
    setSelectedEmployee(null); // Return to the employee list after updating
  };

  // Render the appropriate component based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'create':
        return <CreateTask />;
      case 'tasks':
        return <AllTasks />;
      case 'employees':
        return selectedEmployee ? (
          <EmployeeProfile 
            data={selectedEmployee} 
            updateProfile={updateEmployeeProfile} 
            editable={true} 
            onBack={() => setSelectedEmployee(null)}
          />
        ) : (
          <EmployeeManagement onSelectEmployee={(emp) => setSelectedEmployee(emp)} />
        );
      case 'analytics':
        return <Analytics />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={changeUser} />
      <nav className="mt-5 mb-10 flex gap-5">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => { setActiveTab(tab.key); setSelectedEmployee(null); }}
            className={`px-4 py-2 rounded transition-all ${
              activeTab === tab.key
                ? 'bg-purple-700 text-white'
                : 'bg-purple-900 hover:bg-purple-950 text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      {renderContent()}
    </div>
  );
};

export default AdminDashboard;
