import React from 'react'

const AcceptTask = ({ data, updateTaskStatus, employeeId, taskIndex }) => {
  const handleComplete = () => {
    // Update task to completed status
    const updatedTask = { ...data, active: false, completed: true, newTask: false, failed: false }
    updateTaskStatus(employeeId, taskIndex, updatedTask)
  }

  const handleFail = () => {
    // Update task to failed status
    const updatedTask = { ...data, active: false, failed: true, newTask: false, completed: false }
    updateTaskStatus(employeeId, taskIndex, updatedTask)
  }

  return (
    <div className='flex-shrink-0 h-full w-full md:w-[300px] bg-cyan-700 p-5 rounded-2xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm text-white'>{data.category}</h3>
        <h4 className='text-sm text-white'>{data.date}</h4>
      </div>
      <h2 className='mt-4 text-2xl font-semibold text-zinc-800'>{data.title}</h2>
      <p className='text-sm text-white text-justify mt-2'>{data.description}</p>
      <div className='flex flex-col md:flex-row justify-between mt-4 gap-2'>
        <button 
          onClick={handleComplete}
          className='bg-green-500 text-sm text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'
        >
          Mark as Completed
        </button>
        <button 
          onClick={handleFail}
          className='bg-red-600 text-sm text-white px-4 py-2 rounded-lg hover:bg-red-700 transition'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask;
