// src/components/Carousel.tsx
import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img src={images[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
        <div className="nav left" onClick={prevImage}>❮</div>
        <div className="nav right" onClick={nextImage}>❯</div>
      </div>
    </div>
  );
};

export default Carousel;