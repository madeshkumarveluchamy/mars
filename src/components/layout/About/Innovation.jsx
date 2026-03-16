import React, { useState } from 'react';
import './css/Inovation.css';

const Innovation = () => {
  const [activeIndex, setActiveIndex] = useState(1); 

  const innovationData = [
    { 
      title: "EFFICIENT MANUFACTURING", 
      desc: "Using advanced fabrication methods for reliable and resource-efficient production.",
      image: "/brighttruckbackground.png" 
    },
    { 
      title: "ENGINEERING INNOVATION", 
      desc: "Continuous design improvements for stronger, safer vehicle bodies.",
      image: "/proffesionalwelder.png" 
    },
    { 
      title: "INDUSTRY PARTNERSHIPS", 
      desc: "Collaborating with clients to deliver dependable heavy vehicle solutions.",
      image: "/crosswelding.png"
    },
    { 
      title: "ADVANCED TECHNOLOGY", 
      desc: "Integrating modern machinery for precision and performance.",
      image: "/weldinglorrybody.png"
    }
  ];

  return (
    <section className="innovation-section bg-black text-white" data-bg="white">
      <div className="container py-5">
        
        {/* Top Header Part */}
        <div className="row mb-5">
          <div className="col-12">
            <div className='d-flex flex-column flex-lg-row justify-content-between align-items-start text-center text-lg-start'>
              <div className='col-12 col-lg-5'>
                <p className="text-orange-small mb-3">SUSTAINABILITY & INNOVATION</p>
              </div> 
              <div className="d-flex flex-column flex-lg-row col-12 col-lg-7 align-items-start align-items-lg-end text-center text-lg-start">
                <h2 className="innovation-main-title col-12 col-lg-9">
                  INNOVATING HEAVY VEHICLE MANUFACTURE WITH EFFICIENT PROCESSES, DURABLE MATERIALS, AND FORWARD-THINKING ENGINEERING SOLUTIONS.
                </h2>
                <div className='w-100 d-flex justify-content-center'>
                <button className="blog-swap-Innovation col-lg-3 mt-3 mt-lg-0" style={{border:"1px solid #fff"}}>
                  <span className="arrow">→</span>
                  <span className="text">EXPLORE NOW</span>
                </button>
                </div>
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
                      <div className="col-2 col-md-1 text-end">
                        <span className="list-arrow">{activeIndex === index ? '→' : '→'}</span>
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