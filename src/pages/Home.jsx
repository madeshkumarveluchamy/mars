import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About/About';
import WorkInGallery from '../components/layout/WorkInGallery';
import SuccessStories from '../components/layout/SuccessStories';
import FAQSection from '../components/layout/FAQsection';
import SustainableManufacturing from '../components/layout/SustainableManufacturing';
import Footer from '../components/common/Footer';
import AboutCounter from '../components/layout/About/AboutCounter';
import Innovation from '../components/layout/About/Innovation';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <AboutCounter />
      <Innovation />
      <WorkInGallery />
      <SuccessStories />
      <FAQSection />
      <SustainableManufacturing />
      <Footer/>
      {/* Adutha sections inga varum */}
    </div>
  );
};

export default Home;