import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { toast } from 'react-hot-toast'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [asignTo, setAsignTo] = useState("")
  const [category, setCategory] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
      toast.error("All fields are required!", {
        style: {
          background: "#fff",
          color: "#000"
        }
      });
      return
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const updatedUserData = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskNumbers: {
            ...elem.taskNumbers,
            newTask: elem.taskNumbers.newTask + 1
          }
        }
      }
      return elem
    })

    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(updatedUserData))

    // Show success notification
    toast.success("Task created successfully!", {
      style: {
        background: "#fff",
        color: "#000"
      }
    });

    // Reset form
    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className="max-w-4xl mx-auto p-4 text-bold">
      <form onSubmit={submitHandler} className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <label className="block text-white mb-2">Task Title</label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Make a UI"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Date</label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Assign</label>
              <input
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                type="text"
                placeholder="Employee name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Category</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Dev, design, etc"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-white"
              />
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <label className="block text-white mb-2">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Task description"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-white h-32 resize-none"
            ></textarea>
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
