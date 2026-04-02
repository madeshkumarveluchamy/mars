import React from 'react';
import { motion } from 'framer-motion';
// --- STEP 1: IMPORT THE IMAGE FROM ASSETS ---
import serviceBg from '../../assets/serviceHero.png'; 
import './css/ServiceHero.css';

const ServiceHero = () => {
  // --- STEP 2: USE THE IMPORTED IMAGE IN INLINE STYLES ---
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${serviceBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Parallax effect
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };

  return (
    <section style={heroStyle} className="service-hero overflow-hidden">
      <div className="container serviceHero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Main Typography */}
          <h1 className="service-main-title text-white text-uppercase m-0">
            Engineering Precision. <br />
            <span className="text-orange">Crafting Performance.</span>
          </h1>

          {/* Subtext */}
          <p className="service-sub-text text-uppercase mt-4">
            Advanced Fabrication & Custom Vehicle Solutions For <br />
            High-Performance Industrial Fleets.
          </p>

          {/* Button */}
          <div className="mt-5">
            <button className="service-cta-btn">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;