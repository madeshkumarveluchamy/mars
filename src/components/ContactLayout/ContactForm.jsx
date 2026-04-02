import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "./css/ContactForm.css";
import contactimg1 from "../../assets/contactpage1.png"

const ContactForm = () => {
  return (
    <section className="contact-form-section bg-custom-dark text-white py-5" data-bg="white">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          
          {/* Left Side: The Industrial Form */}
          <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
            <div className="form-container mx-auto w-75">
              <h2 className="form-heading text-uppercase mb-5">Submit Technical Brief</h2>
              
              <form>
                {/* Full Name */}
                <div className="mb-5">
                  <label className="input-label text-uppercase small text-secondary">Lead Engineer / Contact Name</label>
                  <input type="text" className="form-control industrial-input" placeholder="FULL NAME" />
                </div>

                <div className="row">
                  {/* Email */}
                  <div className="col-md-6 mb-5">
                    <label className="input-label text-uppercase small text-secondary">Email Address</label>
                    <input type="email" className="form-control industrial-input" placeholder="ENGR@ORG.COM" />
                  </div>
                  {/* Subject Matter */}
                  <div className="col-md-6 mb-5">
                    <label className="input-label text-uppercase small text-secondary">Subject Matter</label>
                    <select className="form-select industrial-input text-uppercase">
                      <option className='text-black'>Fleet Consultation</option>
                      <option className='text-black'>Custom Design</option>
                    </select>
                  </div>
                </div>

                {/* Project Specs */}
                <div className="mb-5">
                  <label className="input-label text-uppercase small text-secondary">Project Specifications</label>
                  <textarea className="form-control industrial-input" rows="3" placeholder="DESCRIBE THE SCOPE..."></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn industrial-submit-btn w-100 text-uppercase fw-bold py-3 mt-4">
                  Submit Inquiry <span className="ms-2">⚡</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: The Image Link Area */}
          <div className="col-lg-6 position-relative">
            <Link to="/projects" className="text-decoration-none h-100 d-block">
              <div className="industrial-image-container h-100">
                <img 
                  src={contactimg1} 
                  alt="Industrial Machine" 
                  className="industrial-bg-img"
                />
                
                {/* Glassmorphism Text Box */}
                <div className="glass-info-card p-4">
                  <div className="vertical-orange-line"></div>
                  <h5 className="fw-bold text-uppercase m-0">Machine Precision</h5>
                  <p className="small text-secondary mt-2 mb-0">
                    Every inquiry is analyzed by our senior architectural engineers before the first rivet is placed.
                  </p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;