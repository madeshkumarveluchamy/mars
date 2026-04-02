import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "./css/CTASection.css"

const CTASection = () => {
  return (
    <section className="cta-section bg-white py-5">
      <div className="container py-5 text-center">
        
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="cta-title text-uppercase m-0"
        >
          Let's Innovate <br /> Together
        </motion.h2>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5"
        >
            
            <div className="d-flex justify-content-center ">
            <Link to="/contact" className='text-decoration-none'> 
            <button className="blog-swap">
              <span className="arrow">→</span>
              <span className="text">Let's Build Your Vehicle</span>
            </button>
            </Link>
            </div>
           
        </motion.div>
        
      </div>
    </section>
  );
};

export default CTASection;