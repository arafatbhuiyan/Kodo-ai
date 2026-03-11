import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from './Component/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      
      
      

    </div>
  );
};

export default App;