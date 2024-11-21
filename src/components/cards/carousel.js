import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button left" onClick={handlePrevious}>
                &#8249; {/* Left arrow */}
            </button>
            <div className="carousel-wrapper">
                <div
                    className="carousel-content"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {children.map((child, index) => (
                        <div className="carousel-card" key={index}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <button className="carousel-button right" onClick={handleNext}>
                &#8250; {/* Right arrow */}
            </button>
        </div>
    );
};

export default Carousel;

