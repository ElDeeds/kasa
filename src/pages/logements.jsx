import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Tag from '../components/Tag';
import Carousel from '../components/Carousel'; 
import StarRating from '../components/Stars';
import logementsData from '../logements.json';
import Collapse from '../components/Collapse';

function Logements() {
    const { id } = useParams();
    const logement = logementsData.find(item => item.id === id);

    return (
        <div className="logementsContainer">
            {/* Header */}
            <Banner />
            {/* Body */}
            <div className="body">
                <div className="logementItem">
                     {/* Carrousel */}
                    <Carousel images={logement.pictures} />
                     {/* Title, localisation et hôte */}
                     <div className='logementInfo'>
                        <div className='logementDesc'>
                            <div className='logementDescTitle'>
                                <h2 className="logementTitle">{logement.title}</h2>
                                <p className="logementLoc">{logement.location}</p>
                            </div>
                            {/* Tags */}
                            <Tag logementId={id} />
                        </div>

                    
                        <div className='hostStars'>
                        <div className='logementDescHost'>
                            {/* Nom et photo de l'hôte */}
                            <div className="hostName">
                                <p className="hostFirstName">{logement.host.name.split(' ')[0]}</p>
                                <p className="hostLastName">{logement.host.name.split(' ')[1]}</p>
                            </div>
                        <img src={logement.host.picture} alt={logement.host.name} className="hostImg" />
                        </div>
                            {/* Etoiles */}
                            <StarRating rating={logement.rating} />
                        </div>
                        </div>
                </div>
                <div className='logementCollapse'>
                    {/* Description */}
                    <Collapse title="Description" content={logement.description} />
                    {/* Equipements */}
                    <Collapse title="Equipements" content={logement.equipments.join('\n')}>
                    </Collapse>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Logements;
