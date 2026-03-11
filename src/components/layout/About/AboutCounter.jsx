import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./css/AboutCounter.css";

// --- Step 1: Same-Line Vertical Slot Rolling Component ---
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const digits = Array.from(String(value)); 

  return (
    // inline-flex ensures digits stay side-by-side
    <span ref={ref} className="slot-wrapper-inline">
      {digits.map((digit, i) => {
        // Handle dots or static chars like decimal points
        if (isNaN(parseInt(digit))) return <span key={i} className="slot-static-char">{digit}</span>;

        const isOdd = i % 2 !== 0;
        const finalDirection = isOdd ? (baseDirection === "up" ? "down" : "up") : baseDirection;

        return (
          <span key={i} className="digit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}}
              transition={{
                duration: 2.5,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: i * 0.1, 
              }}
              className="digit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => <span key={num}>{num}</span>)}
                  <span>{digit}</span>
                </>
              ) : (
                <>
                  <span>{digit}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => <span key={num}>{num}</span>)}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

const AboutCounter = () => {
  const leadershipData = [
    { title: "YEARS OF EXPERTISE", count: 25, suffix: "+", desc: "Leveraging years of fabrication and engineering experience, we deliver durable heavy vehicle body solutions." },
    { title: "INDUSTRIES SERVED", count: 5, suffix: "+", desc: "We proudly deliver heavy vehicle body manufacturing and fabrication solutions to clients across diverse sectors." },
    { title: "PRODUCTION CAPACITY", count: 100, suffix: "K", desc: "Thousands of heavy vehicle bodies are fabricated through our advanced manufacturing facility." },
    { title: "SAFETY COMPLIANCE", count: 99.9, suffix: "%", desc: "We prioritize safety compliance to minimize incidents and uphold industry-leading standards." }
  ];

  return (
    <section className="about-counter-section py-5">
      <div className="container-xxl">
        <div className=" mt-5 pt-5 border-top">
          <div className="text-center mb-5">
            <h2 className="leadership-main-title">
             Numbers that prove our leadership in heavy vehicle body manufacturing and industrial fabrication solutions.
            </h2>
          </div>

          <div className="row g-0 leadership-grid" style={{width:"100%"}}>
            {leadershipData.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 leadership-card">
                <div className="card-content-wrapper">
                  <h6 className="card-mini-title">{item.title}</h6>
                  <p className="card-desc-text">{item.desc}</p>
                  
                  {/* HORIZONTAL ALIGNMENT FORCE */}
                  <h1 className="card-big-number">
                    <SlotCounter value={item.count} baseDirection="up" />
                    <span className="stat-suffix">{item.suffix}</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;