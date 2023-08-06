import React from 'react';
import bannerIndex from '../assets/bannerIndex.png';
import Card from '../components/Card'; 
import '../css/styles.css';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import logementsData from '../logements.json'; 
import { Link } from 'react-router-dom';


function Index() {
  return (
    <div className="indexContainer">
      {/* Header */}
      <Banner />

      {/* Body */}
      <div className="body">
        <div className='banner'>
          <img src={bannerIndex} alt="Bannière avec slogan" className="bannerImg" />
          <p className='bannerText'>Chez vous, partout et ailleurs</p>
        </div>

        {/* Cartes */}
        <div className="cardRow">
        {logementsData.map(logement => (
        <Link to={`/logements/${logement.id}`} key={logement.id} className="cardLink">
        <Card data={logement} />
        </Link>
        ))}

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Index;
