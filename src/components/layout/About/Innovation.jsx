import React, { useState } from 'react';
import './css/Inovation.css';

const Innovation = () => {
  // Default-ah second item (index 1) active-ah irukkum
  const [activeIndex, setActiveIndex] = useState(1); 

  const innovationData = [
    { 
      title: "EFFICIENT MANUFACTURING", 
      desc: "Using advanced fabrication methods for reliable and resource-efficient production.",
      image: "/brighttruckbackground.png" // Indha maari unique images add pannunga
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
            
            <div className='d-flex flex-column flex-lg-row justify-content-center justify-content-start justify-content-lg-between align-items-start'>
              <div className='col-12 col-lg-5'>
                <p className="text-orange-small mb-3">SUSTAINABILITY & INNOVATION</p>
              </div> 
              <div className="d-flex flex-column flex-lg-row col-12 col-lg-7 align-items-start align-items-lg-end">
                <h2 className="innovation-main-title col-12 col-lg-9">
                  INNOVATING HEAVY VEHICLE MANUFACTURE WITH EFFICIENT PROCESSES, DURABLE MATERIALS, AND FORWARD-THINKING ENGINEERING SOLUTIONS.
                </h2>
                <button className="blog-swap-Innovation col-lg-3" style={{border:"1px solid #fff"}}>
                <span className="arrow">→</span>
                <span className="text">EXPLORE NOW</span>
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 align-items-center">
          {/* Left Side: DYNAMIC IMAGE */}
          <div className="col-lg-5">
            <div className="innovation-img-frame">
              <img 
                // ActiveIndex-a vechi image switch aagum
                src={innovationData[activeIndex].image} 
                alt={innovationData[activeIndex].title} 
                className="img-fluid fade-in-image" 
                key={activeIndex} // Key helps re-trigger animation on change
              />
            </div>
          </div>

          {/* Right Side: Interactive List */}
          <div className="col-lg-7 ps-lg-5 mt-4">
            <div className="innovation-list-container">
              {innovationData.map((item, index) => (
                <div 
                  key={index} 
                  className={`innovation-list-item ${activeIndex === index ? 'active-row' : ''}`}
                  // Hover pannumpothu index update aagum
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="row align-items-center w-100">
                    <div className="col-md-5">
                      <h5 className="list-title">{item.title}</h5>
                    </div>
                    <div className="col-md-6">
                      <p className="list-desc">{item.desc}</p>
                    </div>
                    <div className="col-md-1 text-end">
                      <span className="list-arrow">↗</span>
                    </div>
                  </div>
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