import Nav from "../components/Nav";
import "../scss/_myevie.scss";

function MyEvie() {
  return (
    <div>
      <h1>Evie</h1>
      <p>LVL: 23</p>
      <div className="profile picture">
        <img src="" alt="profile picture" />
      </div>
      <p>Owner: Lorem Ipsum</p>
      <p>Total Challenges Completed: 1</p>
      <p>History: </p>
      <p>2 bottles were recycled on January 1, 2024</p>
      <p>3 bottles were recycled on December 30, 2023</p>
      <span className="view-history">
        <a>View full history</a>
      </span>
      <Nav />
    </div>
  );
}

export default MyEvie;
