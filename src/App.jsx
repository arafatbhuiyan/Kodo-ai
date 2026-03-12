import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from './Component/Navbar/Navbar';
import HeroContnt from './Component/HeroContant/HeroContnt';
import Community from './Component/CommunityDesignSection/Community';
import HowItWorks from './Component/HowITWork/HowItWorks';

const App = () => {
  return (
    <div>
      <div className='bg-linear-to-b/hsl from-whit to-blue-200'>
        <Navbar></Navbar>
        <HeroContnt></HeroContnt> 
      </div>
      <Community></Community>
      <HowItWorks></HowItWorks>
      <Outlet></Outlet>

    </div>
  );
};

export default App;