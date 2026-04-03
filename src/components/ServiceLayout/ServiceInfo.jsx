import React from 'react';
import { motion } from 'framer-motion';
import "./css/ServiceInfo.css";
import serviceicon1 from "../../assets/serviceicon1.png";
import serviceicon2 from "../../assets/serviceicon2.png"
import serviceicon3 from "../../assets/serviceicon3.png"
import serviceicon4 from "../../assets/serviceicon4.png"

// Example import (uncomment when you have your icons)
// import factoryIcon from '../assets/factory.svg';
// import phoneIcon from '../assets/phone.svg';
// import mailIcon from '../assets/mail.svg';

const ServiceInfo = () => {
  const infoData = [
    {
      title: "Custom Body Fabrication",
      subtitle: "HUB",
      iconImg: serviceicon1, // Replace this with your actual path
      details: "88 Forge Heavy-duty structural welding and chassis modification using aerospace-grade steel and laser-cut precision components., Industrial Zone 4 Detroit, MI 48201, USA",
      linkText: "Explore On Service",
      linkSymbol: "↗"
    },
    {
      title: "Fleet Modernization",
      subtitle: "SALES",
      iconImg: serviceicon2, // Replace this with your actual path
      details: "Retrofitting aging fleets with modern hydraulic systems, telemetry, and high-efficiency cargo management units.",
      linkText: "Explore Services",
      linkSymbol: "↗"
    },
    {
      title: "Industrial Prototyping",
      subtitle: "INQUIRY",
      iconImg: serviceicon3, // Replace this with your actual path
      details: "Rapid 3D modeling and structural prototyping for specialized vehicle components and bespoke mechanical parts.",
      linkText: "Explore Services",
      linkSymbol: "↗"
    },
      {
      title: "Vehicle Engineering & Design",
      subtitle: "HUB",
      iconImg: serviceicon4, // Replace this with your actual path
      details: "End-to-end technical blueprinting, FEA analysis, and aerodynamic modeling for next-generation transport solutions.",
      linkText: "Explore Services",
      linkSymbol: "↗"
    },
  ];

  return (
    <section className="bg-white border-top border-bottom" data-bg="black">
      <div className="container py-5">
        <div className="row g-0">
          {infoData.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3  contact-info-col">
              <motion.div 
                className="p-5 h-100 d-flex flex-column text-center text-md-start" // Center on mobile, left on desktop
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image Icon with specific styling */}
                <div className="contact-icon-wrapper mb-4">
                  <img src={item.iconImg} alt={item.title} className="contact-icon-img" />
                </div>
                
                <h3 className="contact-info-title text-uppercase mb-3">
                  {item.title} <br /> {item.subtitle}
                </h3>
                <div className='d-flex justify-content-center justify-content-md-start'>
                <p className="contact-info-details mb-4 text-center text-md-start">
                  {item.details}
                </p>
                </div>
                <div className="mt-auto">
                  <a href="#" className="contact-info-link text-uppercase fw-bold">
                    {item.linkText} <span className="ms-1">{item.linkSymbol}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;