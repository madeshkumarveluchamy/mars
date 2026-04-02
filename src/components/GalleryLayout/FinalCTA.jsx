import React from 'react';
import { motion } from 'framer-motion';
import "./css/FinalCTA.css"

const FinalCTA = () => {
  const stats = [
    { label: "BUILDS COMPLETED", value: "250+" },
    { label: "WELDING GUARANTEE", value: "15YR" },
    { label: "STRUCTURAL RATING", value: "99.9%" }
  ];

  return (
    <section className="final-cta-section bg-light-grey py-5 position-relative overflow-hidden" data-bg="black">
      {/* Background Watermark Text */}
      <div className="bg-watermark">MARS</div>

      <div className="container py-5 text-center position-relative" style={{ zIndex: 2 }}>
        
        {/* Main Heading */}
        <motion.h1 
          className="display-3 fw-black text-uppercase m-0 cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to upgrade <br /> your performance?
        </motion.h1>

        {/* Gradient Button */}
        <motion.div 
          className="mt-5 mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="d-flex justify-content-center ">
            <button className="blog-swap">
              <span className="arrow">→</span>
              <span className="text">Let's Build Your Vehicle</span>
            </button>
            </div>
        </motion.div>

        {/* Stats Row */}
        <div className="row justify-content-center mt-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-6 mb-4">
              <h3 className="text-orange fw-black m-0">{stat.value}</h3>
              <p className="smaller text-muted fw-bold text-uppercase tracking-widest m-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;