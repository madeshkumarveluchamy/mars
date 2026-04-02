import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import "./css/ServiceFlowChart.css"

const VerticalWorkflow = () => {
  const scrollRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 70%", "end 50%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { id: "01", title: "CONSULTATION", desc: "REQUIREMENT ANALYSIS & FEASIBILITY STUDY", side: "left" },
    { id: "02", title: "DESIGN & ENGINEERING", desc: "TECHNICAL CAD MODELING & FEA TESTING", side: "right" },
    { id: "03", title: "FABRICATION", desc: "PRECISION WELDING & STRUCTURAL ASSEMBLY", side: "left" },
    { id: "04", title: "ASSEMBLY", desc: "COMPONENT INTEGRATION & QC TESTING", side: "right" },
    { id: "05", title: "DELIVERY", desc: "FINAL INSPECTION & SITE DEPLOYMENT", side: "left" },
  ];

  return (
    <section ref={scrollRef} className="v-workflow-bg pt-5" data-bg="white">
      <div className="container text-center">
        {/* Larger Header */}
        <h2 className="v-workflow-title text-white text-uppercase mb-5 pb-5">Engineering Workflow</h2>

        <div className="v-workflow-container position-relative">
          
          {/* Central Vertical Line */}
          <div className="v-base-line"></div>
          <motion.div 
            className="v-filling-line" 
            style={{ height: lineHeight }}
          ></motion.div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className={`v-step-row d-flex align-items-center mb-5 ${step.side === 'right' ? 'flex-row-reverse' : ''}`}>
              
              {/* Content Side: Increased Font Sizes */}
              <div className="col-5">
                <motion.div 
                  initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ duration: 0.7 }}
                  className={`v-step-content ${step.side === 'left' ? 'text-end pe-5' : 'text-start ps-5'}`}
                >
                  <h3 className="text-white fw-black text-uppercase service-title mb-2">{step.title}</h3>
                  <p className="text-secondary tracking-wide small service-desc text-uppercase m-0">{step.desc}</p>
                </motion.div>
              </div>

              {/* Center Square: Made LARGER (75px) */}
              <div className="col-2 d-flex justify-content-center position-relative" style={{ zIndex: 5 }}>
                <div className="v-step-box-large">
                  <span className="v-step-num-large">{step.id}</span>
                </div>
              </div>

              <div className="col-5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalWorkflow;