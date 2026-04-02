import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/GalleryCategories.css';

// Asset Imports
import hd1 from '../../assets/capabilities1.png';
import hd2 from '../../assets/capabilities2.png';
import hd3 from '../../assets/capabilities3.png';
import spec1 from '../../assets/servicebuilds1.png';
import spec2 from '../../assets/servicebuilds2.png';
import spec3 from '../../assets/servicebuilds3.png';
import fab1 from '../../assets/capabilities1.png';
import fab2 from '../../assets/capabilities2.png';
import fab3 from '../../assets/capabilities3.png';
import rd1 from '../../assets/servicebuilds1.png';
import rd2 from '../../assets/servicebuilds2.png';
import rd3 from '../../assets/servicebuilds3.png';

export const galleryItems = [
  { id: 1, category: "HEAVYDUTY", title: "32-Ton Tipper", img: hd1, desc: "Mining Grade Hydraulics" },
  { id: 2, category: "HEAVYDUTY", title: "Fuel Tanker", img: hd2, desc: "Hazard-Certified Aluminum" },
  { id: 3, category: "HEAVYDUTY", title: "Flatbed Trailer", img: hd3, desc: "Reinforced Multi-Axle" },
  { id: 4, category: "SPECIALIZED BUILDS", title: "Mobile ICU", img: spec1, desc: "Advanced Life Support Unit" },
  { id: 5, category: "SPECIALIZED BUILDS", title: "Fire Tender", img: spec2, desc: "High-Pressure Suppression" },
  { id: 6, category: "SPECIALIZED BUILDS", title: "Reefer Van", img: spec3, desc: "Multi-Zone Climate Control" },
  { id: 7, category: "FABRICATION", title: "Chassis Welding", img: fab1, desc: "Robotic Arc Integration" },
  { id: 8, category: "FABRICATION", title: "Laser Cutting", img: fab2, desc: "Precision Sheet Metal" },
  { id: 9, category: "FABRICATION", title: "Hardox Assembly", img: fab3, desc: "Structural Wear Resistance" },
  { id: 10, category: "DESIGN R&D", title: "CAD Modeling", img: rd1, desc: "3D Virtual Prototyping" },
  { id: 11, category: "DESIGN R&D", title: "FEA Testing", img: rd2, desc: "Structural Stress Analysis" },
  { id: 12, category: "DESIGN R&D", title: "Wind Tunnel", img: rd3, desc: "Aerodynamic Optimization" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const categories = ["ALL", "HEAVYDUTY", "SPECIALIZED BUILDS", "FABRICATION", "DESIGN R&D"];

  const filteredItems = activeFilter === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="gallery-sections bg-white" data-bg="black">
      <div className="container py-5">
        
        {/* Navigation Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The Grid - Sound's Fix: Removed min-vh-100 */}
        <div className="row g-4 transition-grid">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                layout // Smoothly re-positions items
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="col-lg-4 col-md-6"
              >
                <div className="mars-gallery-card">
                  <div className="img-container">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                    <div className="img-overlay">
                      <span className="text-orange fw-bold small">{item.category}</span>
                      <h4 className="text-white text-uppercase mt-2">{item.title}</h4>
                      <p className="text-secondary smaller">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Gallery;