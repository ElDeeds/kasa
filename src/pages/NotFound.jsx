import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className='notFoundContainer'>
       {/* Header */}
       <Banner />

      {/* Body */}
      <div className="notFoundBody">
        <h1>404</h1>
        <p className='notFoundBodyTxt'>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink exact to="/" activeClassName="activeLink" className='notFoundLink'>
        Retourner sur la page d’accueil
        </NavLink>
      </div>

      {/* Footer */}
      <Footer />
          </div>
        );
      }

export default NotFound;
