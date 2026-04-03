import React from 'react';
import './css/ServiceCapabilities.css';
import capabilities1 from "../../assets/capabilities1.png";
import capabilities2 from "../../assets/capabilities2.png"
import capabilities3 from "../../assets/capabilities3.png"
// Import your orange SVGs here
// import techIcon from '../assets/gear-icon.svg';

const ServiceCapabilities = () => {
  return (
    <section className="capabilities-bg py-5" data-bg="white">
      <div className="container py-5 ">
        <div className="row">
          
          {/* Column 1: Advanced Fabrication */}
          <div className="col-lg-4 capability-col my-3 text-center text-md-start">
            <div className="ps-4 py-4 ">
              <div className="cap-icon-wrapper mb-4">
                <img src={capabilities1} alt="Tech" className="cap-icon-img" />
              </div>
              <h2 className="cap-main-heading text-white text-uppercase">
                Advanced Fabrication <br /> Technology
              </h2>
              <ul className="cap-list  list-unstyled mt-4 ps-2 ps-md-0">
                <li>5-AXIS CNC MACHINING</li>
                <li>SS 316 MARINE GRADE ALLOYS</li>
                <li>HARDOX WEAR PLATE WELDING</li>
                <li>AUTOMATED ARC ROBOTICS</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Custom Design */}
          <div className="col-lg-4 capability-col my-3">
            <div className="ps-4 py-4 text-center text-md-start">
              <div className="cap-icon-wrapper mb-4">
                <img src={capabilities2} alt="Design" className="cap-icon-img" />
              </div>
              <h2 className="cap-main-heading text-white text-uppercase">
                Custom Design <br /> Integration
              </h2>
              <p className="cap-description text-secondary mt-4">
                Our engineering suite utilizes cutting-edge Finite Element Analysis (FEA) to ensure every custom build exceeds structural requirements while optimizing weight distribution and aerodynamics.
              </p>
              <div className="mt-4">
                <span className="orange-link-text text-uppercase fw-bold">CAD / CAM / FEA Pipeline</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quality & Compliance */}
          <div className="col-lg-4 capability-col my-3">
            <div className="ps-4 py-4 text-center text-md-start">
              <div className="cap-icon-wrapper mb-4">
                <img src={capabilities3} alt="Quality" className="cap-icon-img" />
              </div>
              <h2 className="cap-main-heading text-white text-uppercase">
                Quality & <br /> Compliance
              </h2>
              <p className="cap-description text-secondary mt-4">
                Rigorous vibration testing and stress-loading protocols. All fabrication is performed under ISO 9001:2015 standards with certified non-destructive testing (NDT) on all critical welds.
              </p>
              <div className="m-4  d-flex justify-content-center justify-content-md-start">
                <span className="badge-dark text-uppercase me-4">ISO 9001</span>
                <span className="badge-dark text-uppercase">ASME Certified</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;