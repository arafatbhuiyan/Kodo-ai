import React from 'react';
import { FaAsterisk } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav className="flex max-w-[1220px] mx-auto justify-between items-center py-5">
                <div>
                    <h1  className=' flex items-center gap-1 pr-20'><FaAsterisk className=' text-xl'/><span className=' text-2xl font-bold'>kodo</span></h1>
                </div>
                <div>
                    <ul className=' flex gap-4 text-md text-gray-500'>
                        <li><NavLink to="/pricing"> Pricing</NavLink></li>
                        <li><NavLink to="/blog"> Blog</NavLink></li>
                        <li><NavLink to="/docs"> Docs </NavLink></li>
                        <li><NavLink to="/pricing"> Pricing</NavLink></li>
                    </ul>
                </div>
                {/* ----------Button-------------- */}
                <div className='flex items-center gap-2'>
                    <button className=" text-md px-2 py-1 border border-gray-200 rounded hover:bg-gray-100 cursor-pointer bg-gray-50 transition-colors duration-300 
                    ">Sing In</button>
                    <button className=" text-md px-3 py-1 border rounded bg-rounded bg-black text-white cursor-pointer"> Get Started</button>
                    
                </div>
                
            </nav>
        </div>
    );
};

export default Navbar;