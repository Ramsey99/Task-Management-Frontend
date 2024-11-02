import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  return (
    <div className="main-layout flex h-screen">
      <Sidebar />
      <div className="content flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
