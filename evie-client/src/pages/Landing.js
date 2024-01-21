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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img src={Trees} alt="Trees" className="trees-image" />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
