// src/components/TaskList/TaskList.jsx
import React from 'react'
import AcceptTask from '../other/AcceptTask'
import NewTask from '../other/NewTask'
import CompleteTask from '../other/CompleteTask'
import FaildTask from '../other/FaildTask'

const TaskList = ({ data, updateTaskStatus, employeeId }) => {
  return (
    <div id='tasklist' className='flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[50%] w-full py-5 mt-10 rounded-3xl'>
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return (
            <NewTask 
              key={idx} 
              data={elem} 
              updateTaskStatus={updateTaskStatus} 
              employeeId={employeeId}
              taskIndex={idx}
            />
          )
        }
        if (elem.active) {
          return (
            <AcceptTask 
              key={idx} 
              data={elem} 
              updateTaskStatus={updateTaskStatus} 
              employeeId={employeeId}
              taskIndex={idx}
            />
          )
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FaildTask key={idx} data={elem} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList
