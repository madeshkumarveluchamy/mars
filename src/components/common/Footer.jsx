import React from "react";
import "../../assets/css/Footer.css";

const Footer = () => {
  return (
    <section data-bg="white">
      <footer className="footer-section bg-black text-white pt-5 pb-3">
        <div className="container-xxl ">
          {/* Top Heading */}
          <div className="row mb-5 align-items-center ps-md-5">
            <div className="col-sm-9 ">
              <h2 className="footer-main-title text-center text-lg-start">
                DRIVING INDUSTRIAL GROWTH <br />
                THROUGH ADVANCED VEHICLE <br />
                BODY ENGINEERING
              </h2>
            </div>
            <div className="col-sm-3 text-end mt-3 mt-sm-0 icons-div">
              <div className="icon-frame ">
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>

                <div className="arrow-footer text-center"></div>
              </div>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="row mt-5  ps-md-5">
            {/* Logo & About Column */}
            <div className="col-md-7 footer-col pe-md-5 d-flex flex-column flex-md-row border-first-custom text-center text-lg-start">
              <div className="text-center text-lg-start footer-div">
                <img
                  src="/marslogo.png"
                  alt="Mars Logo" 
                  className="footer-logo mb-4"
                />
                <p className="footer-desc small">
                  Advancing innovation in heavy vehicle body manufacturing with
                  efficient and responsible production practices.
                </p>
                <div className="w-100 d-flex justify-content-center align-items-center justify-content-lg-start">
                <button className="mt-3 blog-swap-Footer">
                  <span className="arrow">→</span>
                  <span className="text">GET A QUOTE</span>
                </button>
               </div>
              </div>
              <div className="col-md-3 footer-col px-md-4">
                <div className="mb-4 pt-3">
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
            </div>

            {/* Quick Links Column */}
            <div className="col-md-2 footer-col px-md-4 border-start-custom ">
              <h6 className="footer-label mb-4 mt-3 text-center text-lg-start">QUICK LINKS</h6>
              <ul className="list-unstyled footer-links text-center text-lg-start">
                <li>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/solutions" className="text-white">
                    Mars Solution
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Utility Pages Column */}
            <div className="col-md-3 footer-col ps-md-4 border-start-custom">
              <h6 className="footer-label mb-4 mt-3 text-center text-lg-start">UTILITY PAGES</h6>
              <ul className="list-unstyled footer-links text-center text-lg-start">
                <li>
                  <a href="/gallery" className="text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/quote" className="text-white">
                    Get Quote
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/location" className="text-white">
                    Mars Location
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center mt-4 mb-3 border-secondary">
            <p className="small text-white">Designed by : Team Kriya</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
