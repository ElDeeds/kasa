import React, { useState } from 'react';
import RightArrow from '../assets/arrowRight.png';
import LeftArrow from '../assets/arrowLeft.png';

function Carousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <img src={images[currentImageIndex]} alt={`Carrousel ${currentImageIndex}`} className='carouselImg' />

            <div className="photoCounter">
                {currentImageIndex + 1}/{images.length}
            </div>
            {/* Flèches de navigation */}
            <img src={LeftArrow} alt="Précédent" className='arrow leftArrow' onClick={goToPreviousImage} /> 
            <img src={RightArrow} alt="Suivant" className='arrow rightArrow' onClick={goToNextImage} />
                
           
        </div>
    );
}

export default Carousel;
