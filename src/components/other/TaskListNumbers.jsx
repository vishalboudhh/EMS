import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="p-6 rounded-xl bg-red-300 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
      <div className="p-6 rounded-xl bg-cyan-500 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="p-6 rounded-xl bg-green-300 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="p-6 rounded-xl bg-indigo-600 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium">Active</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
