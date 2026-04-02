import React from 'react';
import { motion } from 'framer-motion';
import "./css/AboutFabrication.css"
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";

const ProtocolSection = () => {
  const steps = [
    { id: "02", numImg: img1, iconImg: icon1, title: "LASER CUTTING", desc: "Precision-guided CNC fiber lasers ensuring sub-millimeter accuracy." },
    { id: "03", numImg: img2, iconImg: icon2, title: "WELDING & RIGGING", desc: "Certified master welders utilizing TIG and MIG techniques." },
    { id: "01", numImg: img3, iconImg: icon3, title: "DIGITAL DESIGN", desc: "High-fidelity CAD modeling and stress-testing simulations." },
    { id: "04", numImg: img4, iconImg: icon4, title: "PROTECTIVE COATING", desc: "Industrial-grade epoxy and thermal-fused powder coatings." },
    { id: "05", numImg: img5, iconImg: icon5, title: "QA/QC AUDIT", desc: "Multi-stage inspection protocol covering structural load and finishing." },
    { id: "06", numImg: img6, iconImg: icon6, title: "DEPLOYMENT", desc: "Secure logistics management and on-site integration training." },
  ];

  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This creates the "one-by-one" appearance
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="protocol-container py-5" data-bg="black">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="protocol-title text-uppercase m-0">The Fabrication Protocol</h2>
          <div className="title-underline"></div>
        </div>

        <motion.div 
          className="protocol-content-box"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Starts animation when 20% of the section is visible
        >
          <div className="row row-cols-1 row-cols-md-3 ">
            {steps.map((step, index) => (
              <motion.div key={index} className="col-12 cardMap" variants={itemVariants}>
                {/* Adding a hover scale effect */}
                <motion.div 
                  className="protocol-card"
                  whileHover={{ y: -10 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className='text-center text-md-start'>
                   <img src={step.numImg} alt={step.id} className="protocol-num-img mb-3" />
                  </div>
                  <div className="protocol-icon-wrapper mb-3 text-center text-md-start">
                    <img src={step.iconImg} alt={step.title} className="protocol-icon-img" />
                  </div>
                  <h6 className="protocol-card-title text-uppercase mb-3 text-center text-md-start ">{step.title}</h6>
                  <p className="protocol-card-desc mb-0 text-center text-md-start">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProtocolSection;