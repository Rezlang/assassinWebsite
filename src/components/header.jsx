import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling if you're using react-scroll package
import './header.css'; // External CSS file for styles

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
      <img src="/logo512.png" alt="Logo" className="logo-img" />
        <span className="logo-text">AssassinGame</span>
      </div>
      
      <div className="nav-links">
        <Link to="testimonial" smooth={true} duration={500} className="hover-underline-animation">
          Learn more
        </Link>
        <a className="hover-underline-animation" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          Apple App Store
        </a>
        <a className="hover-underline-animation" href="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
          Google Play Store
        </a>
      </div>
    </nav>
  );
};

export default Header;
