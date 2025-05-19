import React, { useState, useEffect } from 'react';

const Banner = ({ images }) => {
  const [current, setCurrent] = useState(0);

  

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear on unmount
  }, []);

  return (
    <div className="relative w-full h-60  mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className="w-full flex-shrink-0" />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 cursor-pointer rounded">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 cursor-pointer rounded">
        Next
      </button>
    </div>
  );
};

export default Banner;
