import React from 'react';
import { NavLink } from 'react-router-dom';
import { dataNavbar } from './dataNav';

const Nav = () => {
    return (
        <nav className="fixed bottom-0 right-0 flex flex-col  md:flex-row bg-transparent md:bg-transparent md:justify-center md:items-center md:mx-auto md:py-4 md:px-6 z-10">
            {dataNavbar.map((item, index) => (
                <NavLink key={index} to={item.path} className="text-black py-2 md:px-4 md:py-0 md:mx-2 text-center hover:bg-gray-200 md:hover:bg-transparent md:hover:text-black">
                    <button>{item.icon}</button>
                    <span className="block md:hidden">{item.name}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default Nav;
