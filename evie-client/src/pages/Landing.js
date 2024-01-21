import React from "react";
import Footer from "../components/Footer";
import "../scss/_landing.scss";
import Trees from "../media/trees.jpeg";

function Landing() {
  return (
    <div className="landing-container">
      <div className="welcome-section">
        <h1>Welcome to myEvie</h1>
        <p className="welcome-text">
        Embark on your eco-journey with our EXP system. Recycle bottles daily, go car-free weekly, and explore self-reporting. Link with Translink for easy tracking. Check in at recycling plants using Google Maps. QR Scan for extra points. Grow your EVIE avatar and connect with friends. Join the Eco-Challenge, tracking local sustainability efforts.
        </p>
        <div className="auth-buttons">
          <a href="./login" className="auth-button">
            Login
          </a>
          <a href="./signup" className="auth-button signup">
            Sign Up
          </a>
        </div>
        <div className="learn-more">
          <a href="./challenges">Learn More ↓</a>
        </div>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p className="about-text">
        We're the brains behind a green mission. Simplifying eco-efforts through bottle recycling, car-free days, and sustainable challenges. Grow your EVIE avatar, connect with friends, and champion local sustainability. Together, let's make every small action count!
        </p>
        <img src={Trees} alt="Trees" className="trees-image" />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
