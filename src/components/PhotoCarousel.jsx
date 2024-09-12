import React, { useState } from 'react';
import { CarouselContainer } from './Styles/Project/CarouselContainer.style';
import { Pagination } from './Styles/Project/Pagination.style';

const PhotoCarousel = ({ photos }) => {
    const [currentPhoto, setCurrentPhoto] = useState(0);
  
    const nextPhoto = () => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
    };
  
    const prevPhoto = () => {
      setCurrentPhoto((prevPhoto) => (prevPhoto === 0 ? photos.length - 1 : prevPhoto - 1));
    };
  
    return (
      <CarouselContainer>
        <div className="photo-frame">
          <img src={photos[currentPhoto]} alt={`Project Screenshot ${currentPhoto + 1}`} />
        </div>
        <Pagination>
          <button onClick={prevPhoto}>{"<"}</button>
          <span>{currentPhoto + 1} / {photos.length}</span>
          <button onClick={nextPhoto}>{">"}</button>
        </Pagination>
      </CarouselContainer>
    );
  };
  
  export default PhotoCarousel;