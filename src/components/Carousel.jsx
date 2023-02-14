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
    <div>
      <img src={images[index]} alt="" />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
