import React from 'react'
import { toast } from 'react-hot-toast'

const Header = (props) => {
  // If props.data exists, then it is an employee login; otherwise, show "Admin"
  const username = props.data ? props.data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    toast.success('Logged out successfully!')
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
      <h1 className="text-white text-2xl md:text-2xl font-medium text-center md:text-left">
        Hello <br /> <span className="font-semibold text-3xl">{username}</span>
      </h1>
      <button 
        onClick={logOutUser} 
        className="mt-4 md:mt-0 text-white bg-red-600 px-5 py-2 rounded-lg text-lg font-medium"
      >
        LogOut
      </button>
    </div>
  )
}

export default Header
