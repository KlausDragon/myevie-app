import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../scss/_landing.scss";
import Trees from "../media/trees.jpeg";

function Landing() {
  return (
    <div className="welcome-container">
      <Header />
      <h1 className="welcome-label">Welcome to myEvie</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        consectetur accusantium sed amet porro, est ipsa dicta? Iste accusamus
        culpa, dolorem quos nemo nostrum excepturi at explicabo repudiandae
        voluptatem accusantium.
      </p>
      <br />
      <br />
      <div className="button-container">
        <button className="green-button">
          <a href="./login">Login</a>
        </button>
        <button className="green-button">
          <a href="./signup">Sign Up</a>
        </button>
        <button className="green-button">
          <a href="./challenges">Challenges</a>
        </button>
      </div>
      <br />
      <br />
      <p>Learn More &darr;</p>
      <br />
      <br />
      <h2>About Us</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        consectetur accusantium sed amet porro, est ipsa dicta? Iste accusamus
        culpa, dolorem quos nemo nostrum excepturi at explicabo repudiandae
        voluptatem accusantium.
      </p>
      <img src={Trees} alt="My Evie" class="responsive"/>
      <Footer />
    </div>
  );
}

export default Landing;
