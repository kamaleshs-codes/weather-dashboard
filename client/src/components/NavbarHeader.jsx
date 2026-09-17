import React from "react";
import { FiHome, FiInfo, FiMail } from "react-icons/fi";
import { LuCircleHelp } from "react-icons/lu";
import { Link } from "react-router-dom";

const NavbarHeader = () => {
  return (
    <header className='flex justify-between px-8 py-3 h-16 items-center font-mooli bg-secondary text-main font-semibold text-lg border-b-2 border-border shadow-subtle'>
      <h1>Weatherly</h1>
      <nav>
        <ul className='flex gap-8'>
          <li>
            <div className='flex items-center gap-1 hover:text-accent'>
              <span>
                <FiHome />
              </span>
              <Link to='/'>Home</Link>
            </div>
          </li>
          <li>
            <div className='flex items-center gap-1 hover:text-accent'>
              <span>
                <FiInfo />
              </span>
              <Link to='/about'>About</Link>
            </div>
          </li>
          <li>
            <div className='flex items-center gap-1 hover:text-accent'>
              <span>
                <FiMail />
              </span>
              <Link to='/contact'>Contact</Link>
            </div>
          </li>
          <li>
            <div className='flex items-center gap-1 hover:text-accent'>
              <span>
                <LuCircleHelp />
              </span>
              <Link to='/help'>Help</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarHeader;
