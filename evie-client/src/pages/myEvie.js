import Nav from "../components/Nav";
import "../scss/_myevie.scss";

function MyEvie() {
  return (
    <div className="profile-wrapper">
      <h1>Evie</h1>
      <p className="lvl">LVL: 23</p>
      <div className="profile-picture">
        <img src="" alt="profile picture" />
      </div>
      <p className="owner-info">Owner: Lorem Ipsum</p>
      <p className="total-challenges">Total Challenges Completed: 1</p>
      <p className="history">History: </p>
      <p className="first-log">2 bottles were recycled on January 1, 2024</p>
      <p className="second-log">3 bottles were recycled on December 30, 2023</p>
      <span className="view-history">
        <a>View full history</a>
      </span>
      <Nav />
    </div>
  );
}

export default MyEvie;
