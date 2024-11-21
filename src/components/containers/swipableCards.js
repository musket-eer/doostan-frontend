import React, { useRef } from 'react';
import './swipableCards.css';

const SwipableCards = ({ children }) => {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="swipable-cards-container">
            <button className="scroll-button left" onClick={scrollLeft}>
                &#8249; {/* Left arrow */}
            </button>
            <div className="cards-wrapper" ref={containerRef}>
                {children}
            </div>
            <button className="scroll-button right" onClick={scrollRight}>
                &#8250; {/* Right arrow */}
            </button>
        </div>
    );
};

export default SwipableCards;
