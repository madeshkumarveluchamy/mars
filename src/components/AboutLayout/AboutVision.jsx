import React, { useState } from 'react';
import './css/AboutVision.css';
import data1 from "../../assets/vision.jpg"
import data2 from "../../assets/mission.jpg"
import data3 from "../../assets/values.jpg"

const Innovation = () => {
  const [activeIndex, setActiveIndex] = useState(1); 

  const innovationData = [
    { 
      title: "VISION", 
      desc: "WE DON'T JUST BUILD VEHICLES; WE ENGINEER ASSETS. OUR PHILOSOPHY IS ROOTED IN THE UNCOMPROMISING STRENGTH OF STEEL AND THE PRECISION OF MODERN ROBOTICS.",
      image: data1
    },
    { 
      title: "MISSION", 
      desc: "To redefine industrial mobility through rigorous fabrication standards and modular design architecture that withstands the harshest environments on Earth.",
      image: data2
    },
    { 
      title: "OUR VALUES", 
      desc: "Structural integrity, aStructural integrity, absolute transparency in technical specs, and a relentless pursuit of engineering perfection without aesthetic combsolute transparency in technical specs, and a relentless pursuit of engineering perfection without aesthetic compromise.",
      image: data3
    },
  ];

  return (
    <section className="innovation-section bg-black text-white" data-bg="white">
      <div className="container py-5">
        
        {/* Top Header Part */}
        <div className="row mb-5">
          <div className="col-12">
            <div className='d-flex flex-column flex-lg-row justify-content-between align-items-start text-center text-lg-start'>
              <div className='col-12 col-lg-5'>
                <p className="text-orange-small mb-3">VISION & MISSION</p>
              </div> 
              <div className="d-flex flex-column flex-lg-row col-12 col-lg-7 align-items-start align-items-lg-end text-center text-lg-start">
                <h2 className="innovation-main-title col-12">
                  INNOVATING HEAVY VEHICLE MANUFACTURE WITH EFFICIENT PROCESSES, DURABLE MATERIALS, AND FORWARD-THINKING ENGINEERING SOLUTIONS.
                </h2>
          
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 align-items-start">
          
          {/* Left Side: DYNAMIC IMAGE (DESKTOP ONLY - Above 991px) */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="innovation-img-frame">
              <img 
                src={innovationData[activeIndex].image} 
                alt={innovationData[activeIndex].title} 
                className="img-fluid fade-in-image" 
                key={activeIndex} 
              />
            </div>
          </div>

          {/* Right Side: Interactive List */}
          <div className="col-lg-7 ps-lg-5">
            <div className="innovation-list-container">
              {innovationData.map((item, index) => (
                <div key={index} className="list-item-wrapper">
                  <div 
                    className={`innovation-list-item ${activeIndex === index ? 'active-row' : ''}`}
                    onMouseEnter={() => window.innerWidth > 991 && setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="row align-items-center w-100 g-0">
                      <div className="col-10 col-md-5">
                        <h5 className="list-title">{item.title}</h5>
                      </div>
                      <div className="col-md-6 d-none d-md-block text-center text-lg-start">
                        <p className="list-desc text-center text-lg-start">{item.desc}</p>
                      </div>
                     
                    </div>
                  </div>

                  {/* MOBILE IMAGE: Active row-ku kela matum varum (Below 991px) */}
                  {activeIndex === index && (
                    <div className="mobile-innovation-img d-lg-none">
                       <p className="list-desc d-block d-md-none px-3 mt-2 text-black text-center text-lg-start">{item.desc}</p>
                       <div className="px-3 pb-3 imagee">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="img-fluid rounded shadow" 
                        />
                       </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Innovation;