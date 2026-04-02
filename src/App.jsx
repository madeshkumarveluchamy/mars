import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom"; // Removed BrowserRouter from here
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import ScrollToTop from './pages/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  // Now this hook is safe because the whole <App /> is inside a <BrowserRouter> in main.jsx
  const location = useLocation();

  return (
    <div className="App">
        {/* ScrollToTop handles the logic if you want to jump to top or not */}
        <ScrollToTop /> 
        
        <AnimatePresence mode="wait">
          {/* CRITICAL: Passing location and key to Routes for Framer Motion to work */}
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path="/gallery" element={<Gallery/>} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;