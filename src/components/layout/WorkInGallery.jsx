import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper Essential Styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/css/WorkInGallery.css';

const WorkInGallery = () => {
  // First Slider Images
  const galleryImages = [
    { src: "/brighttruckbackground.png", alt: "MARS Lorry Body Fabrication" },
    { src: "/heropagetruck.png", alt: "Industrial Vehicle Design" },
    { src: "/proffesionalwelder.png", alt: "Custom Body Manufacturing" },
  ];

  // Second Slider Images
  const galleryImages1 = [
    { src: "/heropagetruck.png", alt: "Industrial Vehicle Design" },
    { src: "/proffesionalwelder.png", alt: "Custom Body Manufacturing" },
    { src: "/brighttruckbackground.png", alt: "Heavy Duty Solutions" },
  ];

  return (
    <section className="gallery-section py-5 bg-white" data-bg="black">
      <div className="container-fluid px-md-5">
        
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="gallery-main-title">
            OUR WORK IN ACTION <br /> GALLERY
          </h2>
        </div>

        {/* 1. Relative Wrapper for Floating Buttons */}
        <div className='container position-relative gallery-content-area'>
          
          <div className='row row-cols-1 row-cols-md-2 g-4 '>
            {/* Left Slider */}
            <div className="gallery-slider-wrapper ">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: '.gallery-custom-next',
                  prevEl: '.gallery-custom-prev',
                }}
                className='galleryc d-none d-md-block h-50'
              >
                {galleryImages.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="gallery-img-box">
                      <img src={item.src} alt={item.alt} className="gallery-img h-75" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Bottom Description Area */}
          <div className="row mt-5 d-flex flex-column w-100 align-items-start">
            <div className="col-lg-7">
              <p className="gallery-desc">
                Innovation guides us from planning to execution, helping us implement smarter processes, 
                advanced technology, and sustainable solutions throughout all stages of energy development.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 d-flex justify-content-center justify-content-md-start" >
              <button className=" blog-swap-gallery p-1 ">
                <span className="arrow-gallery">→</span>
                <span className="text-gallery border-0">VIEW MORE</span>
              </button>
            </div>
          </div>
            </div>

            {/* Right Slider */}
            <div className="gallery-slider-wrapper">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: '.gallery-custom-next',
                  prevEl: '.gallery-custom-prev',
                }}
              >
                {galleryImages1.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="gallery-img-box">
                      <img src={item.src} alt={item.alt} className="gallery-img" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* 2. Floating Navigation Over Image Center */}
          <div className="cinematic-nav-wrapper ">
            <button className="gallery-custom-prev">←</button>
            <button className="gallery-custom-next">→</button>
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default WorkInGallery;