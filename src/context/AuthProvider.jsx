// src/context/AuthProvider.jsx
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Only initialize localStorage if it hasn't been set before
    if (!localStorage.getItem('employees')) {
      setLocalStorage()
    }
    const { employees } = getLocalStorage()
    setUserData(employees)
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
