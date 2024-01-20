import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div>
      <Header />
      <h1>Welcome to Evie</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        consectetur accusantium sed amet porro, est ipsa dicta? Iste accusamus
        culpa, dolorem quos nemo nostrum excepturi at explicabo repudiandae
        voluptatem accusantium.
      </p>
      <button>
        <a href="./login">Login</a>
      </button>
      <button>
        <a href="./signup">Sign Up</a>
      </button>
      <p>Learn More &darr;</p>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        consectetur accusantium sed amet porro, est ipsa dicta? Iste accusamus
        culpa, dolorem quos nemo nostrum excepturi at explicabo repudiandae
        voluptatem accusantium.
      </p>
      <Footer />
    </div>
  );
}

export default Landing;
