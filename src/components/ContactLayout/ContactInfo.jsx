import React from 'react';
import { motion } from 'framer-motion';
import "./css/ContactInfo.css";
import contacticon1 from "../../assets/contacticon1.png";
import contacticon2 from "../../assets/contacticon2.png"
import contacticon3 from "../../assets/contacticon3.png"

// Example import (uncomment when you have your icons)
// import factoryIcon from '../assets/factory.svg';
// import phoneIcon from '../assets/phone.svg';
// import mailIcon from '../assets/mail.svg';

const ContactInfo = () => {
  const infoData = [
    {
      title: "ENGINEERING",
      subtitle: "HUB",
      iconImg: contacticon1, // Replace this with your actual path
      details: "88 Forge District, Industrial Zone 4 Detroit, MI 48201, USA",
      linkText: "VIEW ON MAP",
      linkSymbol: "↗"
    },
    {
      title: "TECHNICAL",
      subtitle: "SALES",
      iconImg: contacticon2, // Replace this with your actual path
      details: "+1 (313) 555-0192 Mon — Fri, 08:00 - 18:00 EST",
      linkText: "DIRECT CALL",
      linkSymbol: "📞"
    },
    {
      title: "GENERAL",
      subtitle: "INQUIRY",
      iconImg: contacticon3, // Replace this with your actual path
      details: "projects@mars-automotive.io Response within 12 technical hours",
      linkText: "SEND MESSAGE",
      linkSymbol: "@"
    }
  ];

  return (
    <section className="bg-white border-top border-bottom" data-bg="white">
      <div className="container py-5">
        <div className="row ">
          {infoData.map((item, index) => (
            <div key={index} className="col-md-4 contact-info-col">
              <motion.div 
                className="p-5 h-100 d-flex flex-column align-items-center align-items-md-start" // Center on mobile, left on desktop
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
                <p className="contact-info-details mb-4">
                  {item.details}
                </p>
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

export default ContactInfo;