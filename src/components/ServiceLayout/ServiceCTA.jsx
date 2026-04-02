import React from 'react';
import { motion } from 'framer-motion';
import "./css/ServiceCTA.css"
import { Link } from 'react-router-dom';

const ServiceCTA = () => {
  return (
    <section className="service-cta-bg py-5" data-bg="black">
      <div className="container py-5 text-center">
        
        {/* Massive Bold Heading */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="cta-main-title text-uppercase m-0"
        >
          Ready to revolutionize <br /> your fleet?
        </motion.h2>

        {/* Gradient Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-5"
        >
            <Link to="/contact">
          <button className="btn cta-gradient-btn text-uppercase fw-bold">
            Get a Free Consultation
          </button>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ServiceCTA;