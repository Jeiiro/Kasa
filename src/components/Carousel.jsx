import React, { useState } from "react";

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPictures = pictures.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPictures);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPictures) % totalPictures);
  };

  if (totalPictures === 1) {
    return (
      <div className="carousel">
        <img
          src={pictures[0]}
          alt="Logement"
          className="carousel-image"
        />
      </div>
    );
  }

  return (
    <div className="carousel">
      <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
        &#10094;
      </button>
      <img
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
        &#10095;
      </button>
      <div className="carousel-counter">
        {currentIndex + 1}/{totalPictures}
      </div>
    </div>
  );
}