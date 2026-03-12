import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from './Component/Navbar/Navbar';
import HeroContnt from './Component/HeroContant/HeroContnt';

const App = () => {
  return (
    <div className='bg-linear-to-b/hsl from-whit to-blue-200 h-[800px]'>
      <div>
        <Navbar></Navbar>
        <HeroContnt></HeroContnt>
      </div>
      <Outlet></Outlet>
      
      
      
      

    </div>
  );
};

export default App;