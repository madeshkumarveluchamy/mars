import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./css/About.css";
import Innovation from "./Innovation";
import AboutCounter from "./AboutCounter";

// --- Step 1: Manual Vertical Slot Rolling Component ---
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const digits = Array.from(String(value)); 

  return (
    <span ref={ref} className="slot-wrapper-inline">
      {digits.map((digit, i) => {
        if (isNaN(parseInt(digit))) return <span key={i} className="slot-static-char">{digit}</span>;

        const isOdd = i % 2 !== 0;
        const finalDirection = isOdd ? (baseDirection === "up" ? "down" : "up") : baseDirection;

        return (
          <span key={i} className="digit-column">
            <motion.div
              // FIX: Exact 100% calculation based on digit strip length
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}}
              transition={{
                duration: 2.5,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: i * 0.1, 
              }}
              className="digit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => <span key={num}>{num}</span>)}
                  <span className="target-digit">{digit}</span>
                </>
              ) : (
                <>
                  <span className="target-digit">{digit}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => <span key={num}>{num}</span>)}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};
const About = () => {
  const servicesData = [
    { title: "REQUIREMENT & DESIGN PLANNING", desc: "Driving innovation and efficiency across the refining and processing landscape.", icon: "/aboutsmallimage1.png",id:false },
    { title: "MATERIAL SELECTION", desc: "Committed to advancing performance, safety, and sustainability across every stage.", icon: "/aboutsmallimage2.png",id:true },
    { title: "FRAME FABRICATION", desc: "Driving innovation and operational refinings to shape a sustainable energy future.", icon: "/aboutsmallimage3.png" ,id:false},
    { title: "PANEL & INSULATION INSTALLATION", desc: "Transforming industry challenges into opportunities with cutting edge technology.", icon: "/1234.png",id:true },
    { title: "SURFACE FINISHING & PAINTING", desc: "Ensuring reliable operations through expert engineering and proactive maintenance.", icon: "/aboutsmallimage5.png" ,id:false},
    { title: "QUALITY INSPECTION & DELIVERY", desc: "Expert guidance delivering practical solutions for complex technical challenges.", icon: "/aboutsmallimage6.png" ,id:true},
  ];

  return (
    <section className="about-section py-5" data-bg="black" id="about">
      <div className="container">
      
        <div className="row mb-5 align-items-center stats-row d-flex flex-md-row-reverse">

           <div className="col-12 col-md-9 ps-lg-5 mt-4 mt-lg-0 flex-wrap">
            <p className="text-orange fw-bold mb-2">ABOUT US</p>
            <h2 className="about-heading fw-bold mb-4">
              MARS Automotive Designers manufactures durable, precision-engineered heavy vehicle bodies built for demanding industrial and commercial applications.
            </h2>
            <p className="text-muted about-desc">MARS Automotive Designers specializes in heavy-duty vehicle body manufacturing, delivering strong, durable, and precision-built solutions for industrial applications.</p>
            <button className="blog-swap">
              <span className="arrow">→</span>
              <span className="text">EXPLORE OUR BLOG</span>
            </button>
          </div>


          <div className="col-md-3 pe-3 border-end border-dark stats-left">
            
            {/* 20+ Stats: 2 UP, 0 DOWN */}
            <h1 className="display-1 fw-bold mb-0 main-stat-container">
              <SlotCounter value={20} baseDirection="up" />
              <span className="stat-suffix">+</span>
            </h1>
            
            <p className="fw-bold letter-spacing-1 d-flex justify-content-center">YEARS OF EXPERTISE</p>
            <div className="horizontalLine"></div>
            <div className="mt-5 d-flex align-items-center justify-content-center gap-3">
              <div className="client-avatars">
                <img src="/aboutclients.png" alt="Happy Clients" className="single-avatar-img" />
              </div>

              <div className="client-stats">
                <div className="fw-bold mb-0 count-text secondary-stat-container position-relative" >
                  {/* 4.5K Stats: 4 UP, 5 DOWN */}
                  <SlotCounter value={4} baseDirection="up" className="text-center singam" />
                  <span className="stat-dot">.</span>
                  <SlotCounter value={5} baseDirection="down" className="text-center"/>
                  <span className="stat-suffix">K</span>
                </div>
                <p className="small text-muted mb-0 happy-label">HAPPY CLIENTS</p>
              </div>
            </div>
          </div>
         
          
        </div>
        

        {/* Services Part */}
        <div className="row g-5 mt-4">
          <div className="col-lg-6">
            <div className="row g-0 service-grid">
              {servicesData.map((service, index) => (
                
                
                <div key={index}  className="col-md-6 service-item  p-4">
                  <div className="service-icon-wrapper mb-3">
                    <img src={service.icon} alt={service.title} className="service-geometric-icon" />
                  </div>
                  <h6 className="fw-bold mb-3 service-title ">{service.title}</h6>
                  <p className="small text-muted mb-3 service-desc">{service.desc}</p>
                  <a href="#" className="view-more text-decoration-none fw-bold p-4">VIEW MORE →</a>
              
                </div>
      
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="welding-img-wrapper shadow-lg">
              <img src="/weldinglorrybody.png" alt="Manufacturing" className="img-fluid h-100 w-100 object-fit-cover" />
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default About;