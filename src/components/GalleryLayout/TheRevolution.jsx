import React, { useState, useRef } from 'react';
import './css/TheRevolution.css';
import stockImg from '../../assets/new tractor.png'; // Your tractor image
import marsImg from '../../assets/old tractor.png';    // Your orange truck image



const TheRevolution = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    
    // Get mouse or touch position
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = e.touches ? e.touches[0].clientX : e.clientX;
    
    // Calculate percentage (0 to 100)
    let percentage = ((xPos - rect.left) / rect.width) * 100;
    
    // Constraints
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    setSliderPos(percentage);
  };

  return (
    <section className="revolution-section py-5 bg-black">
      <div className="container text-center">
        <h1 className="fw-black text-white text-uppercase mb-2">The Revolution</h1>
        <p className="text-secondary smaller text-uppercase tracking-widest mb-5">
          From Factory Standard to MARS Engineered
        </p>

        <div 
          className="comparison-wrapper" 
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* THE BASE IMAGE (STOCK) */}
          <img src={stockImg} alt="Stock" className="comparison-img base-img" />

          {/* THE OVERLAY IMAGE (MARS) */}
          <div 
            className="mars-overlay" 
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <img src={marsImg} alt="Mars" className="comparison-img" />
          </div>

          {/* THE MECHANICAL HANDLE */}
          <div className="slider-line" style={{ left: `${sliderPos}%` }}>
            <div className="slider-handle-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M18 8L22 12L18 16M6 8L2 12L6 16" />
              </svg>
            </div>
          </div>

          {/* BADGES */}
          <div className="badge-glass badge-left">STOCK SPEC</div>
          <div className="badge-glass badge-right">MARS REVOLUTION</div>
        </div>
      </div>
    </section>
  );
};

export default TheRevolution;