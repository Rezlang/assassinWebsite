// Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Downloads</h3>
              <ul>
                <li><a href="#">Apple</a></li>
                <li><a href="#">Google</a></li>
                <li><a href="#">Github</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>AssassinGame</h3>
              <p>Kill your friends, Assassinate your enemies</p>
            </div>
            <div className="col item social">
              <a href="#"><i className="icon ion-social-facebook"></i></a>
              <a href="#"><i className="icon ion-social-twitter"></i></a>
            </div>
          </div>
          <p className="copyright">AssassinGame © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
