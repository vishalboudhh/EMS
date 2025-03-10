import React from 'react'

const NewTask = ({ data, updateTaskStatus, employeeId, taskIndex }) => {
  const handleAccept = () => {
    // When accepting, mark the task as active and not new
    const updatedTask = { ...data, active: true, newTask: false }
    updateTaskStatus(employeeId, taskIndex, updatedTask)
  }

  return (
    <div className="flex-shrink-0 h-full w-full md:w-[300px] bg-cyan-700 p-5 rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-white mt-2 sm:mt-0">
          {data.date}
        </h4>
      </div>
      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-zinc-800">
        {data.title}
      </h2>
      <p className="text-sm text-white text-justify mt-2">
        {data.description}
      </p>
      <div className="flex mt-4 gap-2">
        <button 
          onClick={handleAccept}
          className="w-full bg-green-500 text-sm text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
