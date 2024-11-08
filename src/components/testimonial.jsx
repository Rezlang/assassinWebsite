import React from 'react';
import './testimonial.css'; // Separate CSS file for styling

const Testimonial = () => {
  return (
    <section id="testimonial">
      <p className="company-message">
        "Unleash your potential with Lightweight - the ultimate app for high-motivation
        weightlifters. Elevate your training, track progress, and exceed your goals." -
        Our CEO
      </p>
      <div className="row">
        <div className="col span_1_of_3">
          <div className="bubble">
            <p className="message">
              "LightWeight app provides personalized workout sessions for beginners
              like me. With clear exercise instructions and customizable weights and
              reps, I feel confident and motivated to start my fitness journey. The app
              adapts based on my progress, ensuring each session is challenging yet
              achievable."
            </p>
            <span className="company-name">Customer</span>
          </div>
          <div className="client-info">
          <img src="/logo512.png" alt="Avatar1" className="avatar" />
            <div className="name">
              <h4>Robert Smith</h4>
              <p className="role">Computer Scientist</p>
            </div>
          </div>
        </div>
        <div className="col span_1_of_3">
          <div className="bubble">
            <p className="message">
              "LightWeight app has revolutionized my bodybuilding journey. With easy
              exercise management, customizable templates, and detailed progress
              tracking, it keeps me focused and motivated. The app's intuitive interface
              and visual charts provide a clear overview of my progress, empowering me
              to push harder and achieve my professional bodybuilding goals."
            </p>
            <span className="company-name">Customer</span>
          </div>
          <div className="client-info">
          <img src="/logo512.png" alt="Avatar2" className="avatar" />
            <div className="name">
              <h4>Tom Johnson</h4>
              <p className="role">Recent Graduate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
