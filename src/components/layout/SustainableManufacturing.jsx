import React from 'react';
import '../../assets/css/SustainableManufacturing.css';

const SustainableManufacturing = () => {
  // Images matrum atharkana text-ai array-vil kuduthullom
  const orbitalData = [
    { img: "/brighttruckbackground.png", text: "ADVANCED CHASSIS" },
    { img: "/crosswelding.png", text: "PRECISION WELDING" },
    { img: "/heropagetruck.png", text: "DURABLE BODIES" },
    { img: "/truck4.png", text: "SAFETY FIRST" },
    { img: "/truck5.png", text: "INNOVATIVE DESIGN" },
    { img: "/truck6.png", text: "QUALITY ASSURED" },
    { img: "/truck7.png", text: "MODERN TECHNOLOGY" },
    { img: "/truck8.png", text: "EXPERT ENGINEERING" }
  ];

  return (
    <section className="sustainable-section" data-bg="black">
      <div className="container orbital-container">
        
        {/* CENTER CONTENT */}
        <div className="center-content text-center ">
          <p className="subtitle">SUSTAINABLE MANUFACTURING</p>
          <h2 className="main-title">
            BUILT WITH PRECISION. <br/> 
            DELIVERED WITH SAFETY AND STRENGTH
          </h2>
          <div className='d-flex justify-content-center mt-3'>
            <button className="blog-swa">
              <span className="rrow">→</span>
              <span className="ext">DRIVE INNOVATION</span>
            </button>
          </div>
        </div>

        {/* 8-IMAGE ORBITAL PATH */}
        <div className="orbit-wrapper">
          {orbitalData.map((item, index) => (
            <div key={index} className={`orbit-item item-${index + 1}`}>
              <div className="stabilizer">
                <img src={item.img} alt={item.text} className="orbit-img" />
                {/* TEXT OVERLAY - HOVER PANNUM POTHU THERIYUM */}
                <div className="image-text-overlay">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SustainableManufacturing;