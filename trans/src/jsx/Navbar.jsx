import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <a href='/' className='logo'>
          SIMATS TRANSPORT
        </a>
      </div>
      <div className='navbar-center'>
        <ul className='nav-links'>
          <li>
            <a href='/HOME'>HOME</a>
          </li>
          <li>
            <a href='/PASS_DETAILS'>PASS DETAILS</a>
          </li>
          <li>
            <a href='/NOTIFICATION'>NOTIFICATION</a>
          </li>
          <li>
            <a href='/Raise_Issue'>RAISE ISSUE</a>
          </li>
          <li>
            <a href='/Attendance'>ATTENDANCE</a>
          </li>
          <li>
            <a href='/Contact'>CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
