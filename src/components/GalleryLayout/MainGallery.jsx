import React from 'react';
import { motion } from 'framer-motion';

import "./css/MainGallery.css";

import img1 from "../../assets/servicebuilds1.png"; 
import img2 from "../../assets/servicebuilds2.png"; 
import img3 from "../../assets/servicebuilds1.png"; 


const MainGallery = () => {
  const steps = [
    {
      num: "01",
      title: "CHASSIS PREPARATION",
      subtitle: "FRAME ALIGNMENT & SURFACE GRINDING",
      img:img1
    },
    {
      num: "02",
      title: "INTERNAL RIBBING",
      subtitle: "LOAD-BEARING STRUCTURAL SYNTHESIS",
      img:img2
    },
    {
      num: "03",
      title: "QUALITY CHECKS",
      subtitle: "NDT ANALYSIS & STRESS MAPPING",
      img:img3
    }
  ];

  return (
    <section className="bg-black text-white py-5" data-bg="white">
      <div className="container py-5">
        
        {/* Header Section */}
        <div className="row mb-5 align-items-start">
          <div className="col-md-7 text-center text-md-start">
            <span className="text-orange text-uppercase small fw-bold tracking-widest">The Industrial Forge</span>
            <h2 className="forge-main-title text-uppercase m-0 mt-2">Behind The <br /> Scenes</h2>
          </div>
          <div className="col-md-5 pt-md-4">
            <p className="text-secondary small line-height-lg text-center text-md-start">
              Transparency in fabrication. From the first weld to the final quality assessment, we document every stage of structural evolution.
            </p>
          </div>
        </div>

        {/* The 3-Column Grid */}
        <div className="row g-0">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4 forge-card-wrapper">
              <motion.div 
                className="forge-card position-relative h-100"
                whileHover={{ opacity: 0.9 }}
              >
                {/* Background Image */}
                <img src={step.img} alt={step.title} className="forge-img w-100 h-100 object-fit-cover" />
                
                {/* Content Overlay */}
                <div className="forge-overlay p-4 d-flex flex-column justify-content-end">
                  <h1 className="text-orange fw-black mb-1">{step.num}</h1>
                  <h5 className="text-white fw-bold text-uppercase mb-1">{step.title}</h5>
                  <p className="text-secondary smaller text-uppercase m-0">{step.subtitle}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MainGallery;