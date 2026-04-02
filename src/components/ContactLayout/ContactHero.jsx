import React from 'react';
import { motion } from 'framer-motion';
import "./css/ContactHero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero-bg py-5 position-relative overflow-hidden" data-bg="white">
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="text-orange fw-bold tracking-widest mb-3 text-uppercase">
                Direct Engineering Access
              </h6>
              
              <h1 className="contact-title text-white text-uppercase m-0">
                Let's Build The <br />
                <span className="text-orange-title">Future</span> of <br />
                Transport
              </h1>

              <p className="contact-subtext text-secondary mt-4">
                Reach out to our engineering team for custom vehicle solutions and 
                fleet consultations. Our workshop is ready for your specifications.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Vertical Scale Indicator (Decorative) */}
          <div className="col-lg-4 d-none d-lg-flex justify-content-end">
            <div className="scale-indicator-container">
              <div className="orange-dot"></div>
              <div className="vertical-line"></div>
              <span className="vertical-text text-uppercase">Scale_Indicator_v2.0</span>
              <div className="hollow-square"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;