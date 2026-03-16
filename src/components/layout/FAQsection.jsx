import React from 'react';
import '../../assets/css/FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      id: "01",
      question: "WHAT TYPES OF VEHICLE BODIES DOES MARS MANUFACTURE?",
      answer: "We manufacture heavy-duty container, refrigerated, PUF insulated, and tipper bodies. All designs are built for durability and high-load performance."
    },
    {
      id: "02",
      question: "DO YOU OFFER CUSTOMIZED FABRICATION?",
      answer: "Yes, we provide fully customized vehicle body solutions. Each project is tailored to specific industry and load requirements."
    },
    {
      id: "03",
      question: "WHAT MATERIALS DO YOU USE?",
      answer: "We use high-grade steel, MS sheets, and insulated panels. This ensures strength, safety, and long service life."
    },
    {
      id: "04",
      question: "HOW DO YOU MAINTAIN QUALITY STANDARDS?",
      answer: "Every unit undergoes strict quality and safety inspections. We follow precision fabrication and structural testing processes."
    }
  ];

  return (
    <section className="faq-section bg-black text-white py-5" data-bg="white">
      <div className="container-xxl py-5">
        {/* Main Title */}
        <div className="text-center mb-5">
          <h2 className="faq-main-title">
            POWERING DELIVERING RELIABLE <br />
            HEAVY VEHICLE BODY SOLUTIONS <br />
            FOR DIVERSE INDUSTRIES THROUGH <br />
            RELIABLE ENERGY SERVICES
          </h2>
        </div>

        {/* FAQ Rows Container */}
        <div className="faq-list mt-5">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-row py-4 px-3 border-bottom border-secondary">
              <div className="row align-items-center text-center text-lg-start">
                {/* Number */}
                <div className="col-md-1">
                  <span className="faq-number fw-bold ">{faq.id}</span>
                </div>
                {/* Question */}
                <div className="col-md-5">
                  <h6 className="faq-question fw-bold mb-0 text-uppercase">{faq.question}</h6>
                </div>
                {/* Answer */}
                <div className="col-md-5">
                  <p className="faq-answer small mb-0">{faq.answer}</p>
                </div>
                {/* Arrow Icon */}
                <div className="col-md-1 text-end">
                  <span className="faq-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-5 d-flex justify-content-center">
          <button className="still-questions-btn blog-swap-FAQ">
            <span className="arrow">→</span>
            <span className="text">STILL HAVE QUESTIONS?</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;