// App.js
import React from 'react';
import Header from './components/header';
import Testimonial from './components/testimonial';
import Download from './components/download';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <div className="hero-image parallax">
        <div className="dark-overlay">
          <h1 className="slogan">Kill your friends, Assassinate your enemies</h1>
        </div>
      </div>

      <Testimonial />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
