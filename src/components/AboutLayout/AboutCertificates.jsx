import React from 'react';
import { motion } from 'framer-motion';
import "./css/AboutCertificates.css"

const CertificationSection = () => {
  const certifications = [
    { name: "ISO 9001", img: "path_to_iso.png" },
    { name: "OSHA CC", img: "path_to_osha.png" },
    { name: "DOT COMP", img: "path_to_dot.png" },
    { name: "SAE INT", img: "path_to_sae.png" }
  ];

  return (
    <section className="cert-section bg-black py-5" data-bg="white">
      <div className="container text-center py-5">
        
        {/* Small Orange Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="cert-subtitle text-uppercase mb-5"
        >
          Global Certifications & Standards
        </motion.p>

        {/* Logos Grid */}
        <div className="row justify-content-center align-items-center g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col-6 col-md-3">
              <motion.div 
                className="cert-box"
                whileHover={{ scale: 1.05, borderColor: "#c4711e" }}
                transition={{ duration: 0.3 }}
              >
                {/* Use <img> if you have logos, otherwise <span> for text */}
                <span className="cert-text text-uppercase">{cert.name}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;