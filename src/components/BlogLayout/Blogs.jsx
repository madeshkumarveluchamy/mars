import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; 
import { Settings, Cpu, Leaf, ArrowRight } from 'lucide-react'; // Icons added
import './css/Blog.css';

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const imageReveal = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { scale: 1, opacity: 0.6, transition: { duration: 1.5, ease: "easeOut" } }
  };

  return (
    <div className="mars-blog-root">
      
      
      <div className="container blog-main-container">
        {/* --- HERO SECTION --- */}
        <motion.header 
          className="blog-hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="overline">INDUSTRIAL INTELLIGENCE DOSSIER</motion.p>
          <motion.h1 variants={fadeInUp} className="main-headline">
            MARS BLOG: THE <br />
            <span className="accent-orange">FUTURE</span> OF HEAVY <br />
            ENGINEERING
          </motion.h1>
        </motion.header>

        {/* --- FEATURED GRID --- */}
        <div className="row g-4 mt-5">
          <div className="col-12 col-lg-8">
            <motion.div 
              className="main-featured-card" 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="badge-featured">FEATURED REPORT</div>
              <motion.div 
                variants={imageReveal}
                className="featured-image-holder" 
                style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2000&auto=format&fit=crop')`}}
              ></motion.div>
              <div className="featured-content">
                <motion.h2 variants={fadeInUp}>WEEKLY ALIGNMENT TO ACHIEVE SHARED SUCCESS</motion.h2>
                <motion.p variants={fadeInUp} className="d-none d-md-block">The solutions offered were highly effective and tailored to our needs. The team maintained excellent communication throughout all stages.</motion.p>
                <motion.a href="#" variants={fadeInUp} className="read-intelligence">
                  READ FULL INTELLIGENCE <ArrowRight size={16} className="ms-2" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="col-12 col-lg-4">
            <motion.div 
              className="mandate-sidebar"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="quote-box">
                <p>"MARS AUTOMOTIVE DESIGNERS specializes in heavy-duty vehicle body manufacturing..."</p>
                <span className="mandate-tag">THE MARS ENGINEERING MANDATE</span>
              </div>
              <motion.div className="precision-card mt-3" whileHover={{ scale: 1.02 }}>
                <div className="precision-img" style={{backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover'}}></div>
                <p>PRECISION FRAME FABRICATION</p>
              </motion.div>
              <div className="row g-2 mt-3">
                <div className="col-6">
                  <motion.div className="mini-stat" whileHover={{ borderColor: '#ff5f38', y: -5 }}>
                    <h3>99.9%</h3>
                    <p>SAFETY</p>
                  </motion.div>
                </div>
                <div className="col-6">
                  <motion.div className="mini-stat" whileHover={{ borderColor: '#ff5f38', y: -5 }}>
                    <h3>100K</h3>
                    <p>OUTPUT</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- INNOVATION CATEGORIES --- */}
<section className="innovation-section">
  <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="overline text-center">SECTOR FOCUS</motion.p>
  <motion.h2 className="sec-title mb-5" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}}>INNOVATION CATEGORIES</motion.h2>
  
  <motion.div className="row g-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    {[
      { title: "ENGINEERING INNOVATION", icon: <Settings size={32} className="accent-orange mb-3" />, desc: "Continuous design improvements for stronger, safer vehicle bodies using advanced simulations." },
      { title: "ADVANCED TECHNOLOGY", icon: <Cpu size={32} className="accent-orange mb-3" />, desc: "Integrating modern machinery for precision and high-performance delivery across all industrial sectors." },
      { title: "SUSTAINABLE MANUFACTURING", icon: <Leaf size={32} className="accent-orange mb-3" />, desc: "Transforming industry challenges into opportunities with cutting-edge, eco-friendly strategies." }
    ].map((item, i) => (
      <div className="col-12 col-md-4" key={i}>
        {/* Added scale and animation props here */}
        <motion.div 
          className="innovation-card animated-outline-card" 
          variants={fadeInUp} 
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="icon-wrapper">{item.icon}</div>
          <h5>{item.title}</h5>
          <p>{item.desc}</p>
        </motion.div>
      </div>
    ))}
  </motion.div>
</section>

        {/* --- NUMBERS SECTION --- */}
        <section className="legacy-numbers-section">
          <div className="row align-items-center">
            <motion.div className="col-12 col-lg-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="legacy-title">NUMBERS THAT <span className="accent-orange">DEFINE</span> OUR LEGACY</h2>
              <p className="legacy-text">Precision engineering isn't just a process; it's a measurable standard of excellence we uphold across the solar system's most demanding environments.</p>
              <motion.button className="btn-performance" whileHover={{ backgroundColor: '#ff5f38', borderColor: '#ff5f38' }}>
                VIEW FACILITY PERFORMANCE
              </motion.button>
            </motion.div>
            
            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
              <motion.div className="legacy-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[
                  {n:"01", v:"25+ YEARS", l:"EXPERTISE IN FABRICATION"}, 
                  {n:"02", v:"100K UNITS", l:"PRODUCTION CAPACITY"}, 
                  {n:"03", v:"99.9% SAFE", l:"COMPLIANCE RATING"}
                ].map((s, i) => (
                  <motion.div className="legacy-item" key={i} variants={fadeInUp} whileHover={{ x: 10 }}>
                    <span className="item-index">{s.n}</span>
                    <div className="item-content">
                      <h4>{s.v}</h4>
                      <p>{s.l}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;