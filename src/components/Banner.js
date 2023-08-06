import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Banner() {
  return (
    <header className="header">
      <div className="headerLogo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="headerNav">
      <NavLink  to="/" activeclassname="activeLink">
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="activeLink">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Banner;
