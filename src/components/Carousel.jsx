import React, { useState } from 'react';

export default function Carousel(arrayOfPictures) {
  const [index, setIndex] = useState(0);

  const images = arrayOfPictures.arrayOfPictures;

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  if (!images || !images.length) {
    return <div><p>Oups, nous n'avons pas trouvé les photos pour ce logement.</p></div>;
  }

  return (
    <div className="carousel">
      <img className="carousel-img" src={images[index]} alt="carousel" />
      {images.length > 1 && (
      <div className="carousel-layout-ButtonsContainer">
        <button onClick={handlePrev} className="carousel-layout-button-prev">
          <i
            className="fa-solid fa-angle-left"
          />
        </button>
        <button onClick={handleNext} className="carousel-layout-button-next">
          <i
            className="fa-solid fa-angle-right"
          />
        </button>
      </div>
      )}
    </div>
  );
}
