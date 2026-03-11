import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS inga dhaan varanum
import Navbar from './components/common/Navbar'; // Path correct-ah check pannunga
import Home from './pages/Home'; // Home page kulla Hero section irukkum

function App() {
  return (
    <div className="App">
      {/* Navbar universal-ah mela irukkum */}
      <Navbar />
      
      {/* Home page-kulla dhaan Hero and other sections irukkum */}
      <Home />
      
      {/* Intha App.jsx-la dhaan future-la Routes (About, Contact) add pannuvom */}
    </div>
  );
}

export default App;