import React from 'react';
import '../../assets/css/SuccessStories.css';

const SuccessStories = () => {
  const stories = [
    {
      img: "/proffesionalwelder.png",
      title: "TECHNOLOGY-DRIVEN SERVICES"
    },
    {
      img: "/heropagetruck.png",
      title: "ADVANCED TECHNOLOGY AND EXPERIENCE"
    },
    {
      img: "/crosswelding.png",
      title: "RESPONSIBLE AND INNOVATIVE SOLUTIONS"
    }
  ];

  return (
    /* This wrapper acts as the 'rail' for the sticky effect */
    <section className="success-outer-pin" data-bg="white">
      <div className="container-fluid px-md-5">
        <div className="row align-items-start locked-row">
          
          {/* LEFT SIDE: Pinned Title */}
          <div className="col-lg-4 pinned-sidebar">
            <div className="sidebar-inner-content">
              <p className="text-uppercase small mb-4 text-secondary">ENGINEERING SUCCESS STORIES</p>
              <h2 className="success-main-title">
                RELIABLE FABRICATION. <br />
                ENGINEERED WITH INTEGRITY, <br />
                SAFETY, AND INNOVATION.
              </h2>
            </div>
          </div>

          {/* CENTER: The Stacking Images */}
          <div className="col-lg-4 stacking-scroller">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className="overlap-sticky-card" 
                style={{ top: '150px' }} // Depth offset
              >
                <div className="img-holder">
                  <img src={story.img} alt={story.title} className="img-fluid w-100" />
                </div>
                <div className="label-holder p-4 bg-cream text-black">
                  <p className="small fw-bold mb-0 text-uppercase">{story.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Pinned Blog Box */}
          <div className="col-lg-4 pinned-sidebar">
            <div className="blog-callout-locked p-4 bg-white text-black shadow-lg">
              <h6 className="fw-bold mb-2">WEEKLY ALIGNMENT TO ACHIEVE SHARED SUCCESS</h6>
              <p className="small text-muted mb-3">
                The solutions offered were highly effective and tailored to our needs.
              </p>
              <button className="blog-swap-success p-1">
                <span className="arrow">→</span>
                <span className="text">EXPLORE OUR BLOG</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;