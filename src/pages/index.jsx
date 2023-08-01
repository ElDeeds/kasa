import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import logoWhite from '../assets/logoWhite.png';
import banner from '../assets/bannerImg.png';
import Card from '../components/Card'; 
import '../css/styles.css';

function Index() {
  return (
    <div className="indexContainer">
      {/* Header */}
      <header className="header">
        <div className="headerLogo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="headerNav">
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </header>

      {/* Body */}
      <div className="body">
        <div className='banner'>
        <img src={banner} alt="Bannière avec slogan" className="bannerImg" />
        <p className='bannerText'>Chez vous, partout et ailleurs</p>
        </div>

        {/* Cartes */}
        <div className="cardRow">
          <Card title="Titre de la carte 1" content="Contenu de la carte 1" />
          <Card title="Titre de la carte 2" content="Contenu de la carte 2" />
          <Card title="Titre de la carte 3" content="Contenu de la carte 3" />
          <Card title="Titre de la carte 4" content="Contenu de la carte 4" />
          <Card title="Titre de la carte 5" content="Contenu de la carte 5" />
          <Card title="Titre de la carte 6" content="Contenu de la carte 6" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
      <div className="footerLogo">
          <img src={logoWhite} alt="Logo Blanc" />
        </div>
        <p className='footerText'>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Index;
