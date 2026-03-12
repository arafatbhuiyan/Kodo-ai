import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from './Component/Navbar/Navbar';
import HeroContnt from './Component/HeroContant/HeroContnt';
import Community from './Component/CommunityDesignSection/Community';

const App = () => {
  return (
    <div>
      <div className='bg-linear-to-b/hsl from-whit to-blue-200'>
        <Navbar></Navbar>
        <HeroContnt></HeroContnt> 
      </div>
      <Community></Community>
      <Outlet></Outlet>

    </div>
  );
};

export default App;