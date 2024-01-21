import Nav from "../components/Nav";
import "../scss/_challenges.scss";

function Challenges() {
  return (
    <div className="challenges-wrapper">
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
      <p>More challenges to </p>
      <Nav />
    </div>
  );
}

export default Challenges;
