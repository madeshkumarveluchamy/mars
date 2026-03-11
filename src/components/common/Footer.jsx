import React from 'react';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <section data-bg="white">
    <footer className="footer-section bg-black text-white pt-5 pb-3">
      <div className="container">
        {/* Top Heading */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-9">
            <h2 className="footer-main-title">
              DRIVING INDUSTRIAL GROWTH <br />
              THROUGH ADVANCED VEHICLE <br />
              BODY ENGINEERING
            </h2>
          </div>
          <div className="col-md-3 text-end">
             <div className="expand-icon-box">
                <span className="expand-icon">↗</span>
             </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Footer Links Grid */}
        <div className="row mt-5">
          {/* Logo & About Column */}
          <div className="col-md-4 footer-col pe-md-5">
            <img src="/marslogo.png" alt="Mars Logo" className="footer-logo mb-4" />
            <p className="footer-desc small ">
              Advancing innovation in heavy vehicle body manufacturing with efficient and responsible production practices.
            </p>
            <button className="mt-3 blog-swap-Footer">
              <span className="arrow">→</span>
              <span className="text">GET A QUOTE</span>
            </button>
          </div>

          {/* Contact & Address Column */}
          <div className="col-md-3 footer-col px-md-4 border-start-custom">
            <div className="mb-4">
              <h6 className="footer-label mb-3">CONTACT</h6>
              <p className="small mb-0 ">(+91) 987 654 32 10</p>
            </div>
            <div>
              <h6 className="footer-label mb-3">ADDRESS</h6>
              <p className="small">
                418/3A, 418/3B, Sholavandan to <br />
                Nagari Road, Taluk, Vadipatti, <br />
                Sholavandan, Tamil Nadu 625214
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-2 footer-col px-md-4 border-start-custom ">
            <h6 className="footer-label mb-4">QUICK LINKS</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="/" className='text-white'>Home</a></li>
              <li><a href="/about" className='text-white'>About</a></li>
              <li><a href="/solutions" className='text-white'>Mars Solution</a></li>
              <li><a href="/contact" className='text-white'>Contact</a></li>
              <li><a href="/blog" className='text-white'>Blog</a></li>
            </ul>
          </div>

          {/* Utility Pages Column */}
          <div className="col-md-3 footer-col ps-md-4 border-start-custom">
            <h6 className="footer-label mb-4" >UTILITY PAGES</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="/gallery" className='text-white'>Gallery</a></li>
              <li><a href="/quote" className='text-white'>Get Quote</a></li>
              <li><a href="/terms" className='text-white'>Terms & Conditions</a></li>
              <li><a href="/location" className='text-white'>Mars Location</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-5 pt-4 border-top border-secondary">
          <p className="small  mb-0 text-white">Designed by : Team Kriya</p>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;