import React, { useState, useEffect } from 'react';
import './HomeSlider.css'; // Ensure this CSS file is imported
import Navbar from '../Navbar/Navbar';

const HomeSlider = ({ images, autoSlideInterval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length, autoSlideInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container sm:m-8 sm:ml-16 sm:mr-16 shadow-xl rounded-xl">
      <button className="slider-button prev" onClick={prevSlide}>‹</button>
      <div className="slider-wrapper">
        <div
          className="slider-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className="slider-image rounded-xl " />
          ))}
        </div>
      </div>
      <button className="slider-button next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default HomeSlider;
