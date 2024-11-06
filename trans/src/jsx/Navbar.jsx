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
      <div className='navbar-right'>
        <a href='/cart' className='cart-icon'>
          <i className='fas fa-shopping-cart'></i>
          <span className='cart-count'>0</span>
        </a>
        <a href='/account' className='user-icon'>
          <i className='fas fa-user'></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
