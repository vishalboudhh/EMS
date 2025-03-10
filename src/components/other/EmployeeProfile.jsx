// src/components/other/EmployeeProfile.jsx
import React, { useState } from 'react'

const EmployeeProfile = ({ data, updateProfile, editable, onBack }) => {
  const [profile, setProfile] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProfile(profile)
  }

  return (
    <div className="p-10 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-5">Employee Profile</h2>
      {editable ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-1">Name:</label>
            <input
              value={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
              className="p-2 rounded w-full bg-gray-700 border border-gray-600"
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Email:</label>
            <input
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="p-2 rounded w-full bg-gray-700 border border-gray-600"
            />
          </div>
          <button type="submit" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
            Save Changes
          </button>
          <button
            type="button"
            onClick={onBack}
            className="ml-4 bg-gray-500 px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
        </form>
      ) : (
        <>
          <div className="mb-3">
            <label className="block mb-1">Name:</label>
            <input
              value={data.firstName}
              disabled
              className="p-2 rounded w-full bg-gray-700 border border-gray-600 cursor-not-allowed"
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Email:</label>
            <input
              value={data.email}
              disabled
              className="p-2 rounded w-full bg-gray-700 border border-gray-600 cursor-not-allowed"
            />
          </div>
          <p className="text-sm text-gray-400">Only administrators can modify employee information.</p>
          <button onClick={onBack} className="mt-4 bg-gray-500 px-4 py-2 rounded hover:bg-gray-600">
            Back
          </button>
        </>
      )}
    </div>
  )
}

export default EmployeeProfile
