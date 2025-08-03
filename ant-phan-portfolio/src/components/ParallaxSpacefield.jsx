import React from 'react';
import './ParallaxSpacefield.css';

const ParallaxSpacefield = () => {
  console.log('ParallaxSpacefield component rendered!'); // Debug log
  
  return (
    <div className="parallax-spacefield">
      <div className="parallax-bg">
        <h1 style={{color: 'white', zIndex: 10, position: 'relative'}}>BACKGROUND TEST</h1>
      </div>
    </div>
  );
};

export default ParallaxSpacefield;
