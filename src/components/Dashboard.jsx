import React, { useState } from 'react';
import AddTask from '../pages/AddTask';
import AddCategory from './AddCategory';
import TaskList from '../pages/TaskList';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [view, setView] = useState('taskList');

  const renderView = () => {
    switch (view) {
      case 'addTask':
        return <AddTask />;
      case 'addCategory':
        return <AddCategory />;
      case 'taskList':
      default:
        return <TaskList />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onSelect={setView} />
      <div className="flex-1 p-4">
        {renderView()}
      </div>
    </div>
  );
};

export default Dashboard;