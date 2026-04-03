import React from 'react';
import { motion } from 'framer-motion';
import "./css/AboutTeam.css"
import data1 from "../../assets/per1.jpg"
import data2 from "../../assets/per2.jpg"
import data3 from "../../assets/per3.jpg"
import data4 from "../../assets/per4.jpg"

const TeamSection = () => {
  const team = [
    { name: "ELIAS VANCE", role: "CHIEF OPERATIONS", img: data1 },
    { name: "SARAH KOVAC", role: "HEAD OF DESIGN", img: data2 },
    { name: "DAVID CHEN", role: "PRECISION LEAD", img: data3 },
    { name: "ELENA MORETTI", role: "SYSTEMS DIRECTOR", img: data4 }
  ];

  return (
    <section className="team-section py-5 bg-white" data-bg="black">
      <div className="container py-5">
        
        {/* Section Heading */}
        <div className="mb-5">
          <h2 className="team-main-title text-uppercase">
            The Architects of <br /> Steel & Power
          </h2>
        </div>

        {/* Team Grid */}
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <motion.div 
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Member Image */}
                <div className="member-img-wrapper mb-3 ">
                  <img src={member.img} alt={member.name} className="img-fluid member-img" />
                </div>
                
                {/* Member Details */}
                <div className="member-info text-center text-lg-start">
                  <h6 className="member-name text-uppercase m-0">{member.name}</h6>
                  <p className="member-role text-uppercase m-0 mt-1">{member.role}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;