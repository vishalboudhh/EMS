import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="bg-[#1c1c1c] min-h-screen p-4 md:p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <div className="mt-6">
        <TaskList 
          data={props.data} 
          updateTaskStatus={props.updateTaskStatus}
          employeeId={props.data.id} 
        />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
