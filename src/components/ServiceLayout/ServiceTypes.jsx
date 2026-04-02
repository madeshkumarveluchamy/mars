import React from 'react';
import { motion } from 'framer-motion';
import "./css/ServiceTypes.css";
import servicebuilds1 from "../../assets/servicebuilds1.png";
import servicebuilds2 from "../../assets/servicebuilds2.png"
import servicebuilds3 from "../../assets/servicebuilds3.png"
import servicebuilds4 from "../../assets/servicebuilds4.png"
import servicebuilds5 from "../../assets/servicebuilds5.png"
import servicebuilds6 from "../../assets/servicebuilds6.png"

const ServiceTypes = () => {
  const projects = [
    { title: "CARGO CONTAINER UNIT", img: servicebuilds1, desc: "HEAVY REINFORCED HIGH-CUBE SPECIALIZED CHASSIS." },
    { title: "TIPPER TRUCK SYSTEM", img: servicebuilds2, desc: "ADVANCED HYDRAULIC DUMP MECHANISMS FOR MINING." },
    { title: "REFRIGERATED LOGISTICS", img: servicebuilds3, desc: "MULTI-ZONE CLIMATE CONTROLLED THERMAL SHELLS." },
    { title: "FUEL TANKER CHASSIS", img: servicebuilds4, desc: "HAZARD-CERTIFIED ALUMINUM TANK FABRICATION." },
    { title: "MINING SPECIALIZED", img: servicebuilds5, desc: "EXTREME-ENVIRONMENT STRUCTURAL REINFORCEMENTS." },
    { title: "HEAVY LOAD TRANSPORT", img: servicebuilds6, desc: "MULTI-AXLE MODULAR TRAILERS FOR OVERSIZED CARGO." },
  ];

  return (
    <section className="portfolio-section py-5" data-bg="black">
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="mb-5 text-center text-md-start">
          <span className="text-orange small fw-bold tracking-widest text-uppercase">Portfolio</span>
          <h2 className="portfolio-main-title text-uppercase mt-2">Bespoke Vehicle Builds</h2>
        </div>

        {/* Portfolio Grid */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 ">
              <motion
                className="portfolio-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Wrapper */}
                <div className="portfolio-img-wrapper mb-3">
                  <img src={project.img} alt={project.title} className="img-fluid portfolio-img" />
                </div>
                
                {/* Text Content */}
                <h6 className="portfolio-card-title text-uppercase m-0">{project.title}</h6>
                <p className="portfolio-card-desc text-muted mt-2 text-uppercase small">
                  {project.desc}
                </p>
              </motion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;