import React from 'react';
import { motion } from 'framer-motion';
import '../../assets/css/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" data-bg="black" id="home">
      {/* 1. Background workshop with shader */}
      <div className="hero-bg-wrapper">
        <img src="/brighttruckbackground.png" alt="Workshop" className="hero-bg-img" />
        <div className="hero-overlay-dark"></div>
      </div>
      
      <div className="hero-content-layer">
       
        {/* 2. Massive MARS Text (Behind the Truck) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 2, 
            ease: [0.16, 1, 0.3, 1] // Ultra smooth ease-out
          }}
          className="mars-text-bg"
        >
          {/* massively scaled MARS text */}
          <h1 className="massives-text">MARS</h1>
        </motion.div>

        {/* 3. Animated White Truck (In Front of Text) */}
        <motion.div
          initial={{ x: "100vw" , opacity: 1 }}
          animate={{ x: "5vw", opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 25, // Lower stiffness stops the 'jerk' lag
            damping: 15, 
            mass: 1.2,
            delay: 0.5 
          }}
          className="truck-foreground"
        >
          <img src="/whitetruck.png" alt="Mars Truck" className="truck-img" />
        </motion.div>
        
        {/* 4. Bottom Elements - Smooth Entry */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "circOut", delay: 1.5 }}
          className="hero-bottom-container container-fluid d-flex flex-row col-12 justify-content-start align-items-md-end"
        >
          {/* Box 1: Info Box */}
          <div className="mb-sm-0">
            <div className="info-box-elite justify-content-start d-flex">
              <div className="info-img-wrapper">
                <img src="/heropagetruck.png" alt="Info Truck" className="info-thumb"/>
              </div>
              <div className="info-text-wrapper ps-3">
                <p className="infos-title mb-0 text-muted">YOUR ENERGY, OUR EXPERTISE</p>
                <div className="info-arrow-bottom">→</div>
              </div>
            </div>
          </div>

          {/* Box 2: Explore Button */}
          <div className=" d-flex justify-content-start">
            <div className="explore-split-box justify-content-start">
              <button className="blog-swap-hero">
                <span className="arrow">→</span>
                <span className="text">EXPLORE NOW</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;