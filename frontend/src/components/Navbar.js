import React from 'react';
import logo from '../assets/ezyFind_Horizontal.png';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img id='logo' src={logo} alt='ezyFind logo' />
      <button id='nav-button'>Register</button>
    </div>
  );
};

export default Navbar;
