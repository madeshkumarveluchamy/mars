import React, { useState } from 'react';
import './css/TheRevolution.css';

// Ensure your images are imported correctly
import stockImg from '../../assets/servicebuilds1.png'; 
import marsImg from '../../assets/servicebuilds2.png'; 

const TheRevolution = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = ((clientX - rect.left) / rect.width) * 100;
    
    if (x >= 0 && x <= 100) {
      setSliderPosition(x);
    }
  };

  return (
    <section className="revolution-section" data-bg="white">
      <div className="container text-center px-3">
        <h1 className="revolution-title text-uppercase">The Revolution</h1>
        <p className="revolution-subtitle text-uppercase">From Factory Standard to MARS Engineered</p>

        <div 
          className="comparison-wrapper" 
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* MARS Image (Background) */}
          <img src={marsImg} alt="Mars Revolutionized" className="comparison-img" />

          {/* Stock Image (Clipping Overlay) */}
          <div 
            className="stock-overlay" 
            style={{ width: `${sliderPosition}%` }}
          >
            <img src={stockImg} alt="Stock Specification" className="comparison-img" />
          </div>

          {/* MECHANICAL SLIDER HANDLE */}
          <div className="slider-line" style={{ left: `${sliderPosition}%` }}>
            <div className="slider-handle-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8L22 12L18 16M6 8L2 12L6 16" />
              </svg>
            </div>
          </div>

          {/* GLASS-MORPHISM BADGES */}
          <div className="badge-glass badge-left">STOCK SPEC</div>
          <div className="badge-glass badge-right">MARS REVOLUTIONIZED</div>
        </div>
      </div>
    </section>
  );
};

export default TheRevolution;