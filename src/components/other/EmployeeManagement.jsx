import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { toast } from 'react-hot-toast'

const EmployeeManagement = ({ onSelectEmployee }) => {
  const [userData, setUserData] = useContext(AuthContext)
  const [newEmployee, setNewEmployee] = useState({ firstName: '', email: '', password: '' })

  const addEmployee = (e) => {
    e.preventDefault()
    
    if (!newEmployee.firstName || !newEmployee.email || !newEmployee.password) {
      toast.error("All fields are required!")
      return
    }

    const newId = userData.length > 0 ? Math.max(...userData.map(emp => emp.id)) + 1 : 1
    const employeeToAdd = {
      id: newId,
      ...newEmployee,
      tasks: [],
      taskNumbers: { active: 0, newTask: 0, completed: 0, failed: 0 }
    }

    const updatedData = [...userData, employeeToAdd]
    setUserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))

    toast.success("Employee added successfully!")

    setNewEmployee({ firstName: '', email: '', password: '' })
  }

  const deleteEmployee = (id) => {
    const updatedData = userData.filter(emp => emp.id !== id)
    setUserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))

    toast.success("Employee deleted successfully!")
  }

  const handleViewEditProfile = (employee) => {
    onSelectEmployee(employee)
    toast.info("Viewing employee profile!")
  }

  return (
    <div className="p-10 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-5">Employee Management</h2>

      <form onSubmit={addEmployee} className="mb-5">
        <input
          type="text"
          placeholder="Name"
          value={newEmployee.firstName}
          onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
          className="p-2 rounded mr-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newEmployee.email}
          onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
          className="p-2 rounded mr-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={newEmployee.password}
          onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })}
          className="p-2 rounded mr-2"
          required
        />
        <button type="submit" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
          Add Employee
        </button>
      </form>

      <ul>
        {userData.map(emp => (
          <li key={emp.id} className="flex justify-between items-center bg-gray-700 p-2 mb-2 rounded">
            <span>{emp.firstName} ({emp.email})</span>
            <div className="space-x-2">
              <button
                onClick={() => handleViewEditProfile(emp)}
                className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
              >
                View/Edit Profile
              </button>
              <button
                onClick={() => deleteEmployee(emp.id)}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EmployeeManagement
