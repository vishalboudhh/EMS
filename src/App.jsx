import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import HomePage from './components/HomePage'
import Instructions from './components/Instructions'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  // New state to control which page to show when not logged in
  const [currentPage, setCurrentPage] = useState("home")

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userDataParsed = JSON.parse(loggedInUser)
      setUser(userDataParsed.role)
      setloggedInUserData(userDataParsed.data)
    }
  }, [])

  // Update task status function (same as before)
  const updateTaskStatus = (employeeId, taskIndex, updatedTask) => {
    const updatedUserData = userData.map(emp => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map((task, idx) => {
          return idx === taskIndex ? updatedTask : task
        })
        // Recalculate task numbers
        const newTaskCount = updatedTasks.filter(t => t.newTask).length
        const activeCount = updatedTasks.filter(t => t.active).length
        const completedCount = updatedTasks.filter(t => t.completed).length
        const failedCount = updatedTasks.filter(t => t.failed).length

        return { 
          ...emp, 
          tasks: updatedTasks, 
          taskNumbers: { newTask: newTaskCount, active: activeCount, completed: completedCount, failed: failedCount } 
        }
      }
      return emp
    })

    setUserData(updatedUserData)
    // Update loggedInUserData and "loggedInUser" entry if needed
    if (loggedInUserData && loggedInUserData.id === employeeId) {
      const updatedEmployee = updatedUserData.find(emp => emp.id === employeeId)
      setloggedInUserData(updatedEmployee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
    }
    localStorage.setItem('employees', JSON.stringify(updatedUserData))
  }

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password)
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    } else {
      alert("Invalid credentials")
    }
  }

  if (!user) {
    // Show home page, login page, or instructions page based on currentPage
    if (currentPage === "home") {
      return <HomePage onChangePage={setCurrentPage} />
    } else if (currentPage === "login") {
      return <Login handleLogin={handleLogin} onBack={() => setCurrentPage("home")} />
    } else if (currentPage === "instructions") {
      return <Instructions onBack={() => setCurrentPage("home")} />
    }
  }

  return (
    <>
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard 
          data={loggedInUserData}  
          updateTaskStatus={updateTaskStatus}
          changeUser={setUser} 
        />
      ) : null}
    </>
  )
}

export default App
