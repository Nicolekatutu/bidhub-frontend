import React, { useState, useEffect } from 'react';
import property1 from '../../assets/slider/property1.jpg';
import property2 from '../../assets/slider/property2.jpg';
import property3 from '../../assets/slider/property3.jpg';
import property4 from '../../assets/slider/property4.jpg';

const images = [property1, property2, property3, property4];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative mx-auto overflow-hidden w-full bg-gray-200">
      <div className="flex justify-center items-center mb-12 mt-8">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-3/4 max-w-full mx-auto transition-opacity duration-500 ease-in-out"         
        />
      </div>
    </div>
  );
};

export default ImageSlider;
