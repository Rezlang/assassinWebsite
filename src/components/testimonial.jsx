import React from 'react';
import './testimonial.css'; // Separate CSS file for styling

const Testimonial = () => {
  return (
    <section id="testimonial">
      <p className="company-message">
              ""Experience thrilling fun with AssassinGame
              - the ultimate app for large-scale, location-based gameplay.
              Designed for intense, interactive sessions,
              it brings Senior Assassin to a new level." - Our CEO" -
        Our CEO
      </p>
      <div className="row">
        <div className="col span_1_of_3">
          <div className="bubble">
            <p className="message">
                          "AssassinGame has completely transformed our group activities!
                          With its cross-platform compatibility and seamless location tracking,
                          it’s never been easier to engage everyone in a thrilling game of Senior
                          Assassin. The app’s real-time updates and mission notifications
                          keep us all on our toes, creating an atmosphere of excitement and
                          strategy that everyone loves."
            </p>
            <span className="company-name">Customer</span>
          </div>
          <div className="client-info">
          <img src="/logo512.png" alt="Avatar1" className="avatar" />
            <div className="name">
              <h4>Robert Smith</h4>
              <p className="role">Community Organizer</p>
            </div>
          </div>
        </div>
        <div className="col span_1_of_3">
          <div className="bubble">
            <p className="message">
                "AssassinGame brings a new layer of excitement to gatherings.
                I love how easy it is to organize large-scale games and keep everyone connected,
                no matter their device. The app’s location-based mechanics and intuitive design
                make each game feel immersive and suspenseful. It’s the perfect way to have some
                friendly competition with friends!"
            </p>
            <span className="company-name">Customer</span>
          </div>
          <div className="client-info">
          <img src="/logo512.png" alt="Avatar2" className="avatar" />
            <div className="name">
              <h4>Tom Johnson</h4>
              <p className="role">Recurring Player</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
