import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav className="flex max-w-[1220px] mx-auto justify-between">
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <ul className=' flex gap-4'>
                        <li><NavLink to="/pricing"> Pricing</NavLink></li>
                        <li><NavLink to="/blog"> Blog</NavLink></li>
                        <li><NavLink to="/docs"> Docs </NavLink></li>
                        <li><NavLink to="/pricing"> Pricing</NavLink></li>
                    </ul>
                </div>
                <div>
                    <button>Sing In</button>
                    <button> Get Started</button>
                </div>
                
            </nav>
        </div>
    );
};

export default Navbar;