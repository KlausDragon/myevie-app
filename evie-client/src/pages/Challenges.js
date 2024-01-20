import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Challenges() {
  return (
    <div>
      <h1>Eco Challenges:</h1>
      <p>Click on each challenge to learn more!</p>
      <div className="challenges">
        <div className="bottle-recycle">
          <h2>Bottles Recycled</h2>
        </div>
        <div className="car-free-day">
          <h2>Car-Free Day</h2>
        </div>
        <div className="recycling-plant">
          <h2>Recycling Plant</h2>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Challenges;
